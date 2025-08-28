import { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { FiTrash2, FiX } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";

export default function ForumSection({ wordSlug = null, isMainForum = false }) {
  const supabase = useSupabaseClient();
  const session = useSession();

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [selectedThread, setSelectedThread] = useState(null);
  const [threadReplies, setThreadReplies] = useState([]);
  const [modalReplyContent, setModalReplyContent] = useState("");
  const [loadingThread, setLoadingThread] = useState(false);
  const [replyingToModal, setReplyingToModal] = useState(null);
  const [modalNestedReplyContent, setModalNestedReplyContent] = useState("");
  const [userVotes, setUserVotes] = useState({}); // Track user's votes
  const [modalReplyFiles, setModalReplyFiles] = useState([]);
  const [modalReplyUrl, setModalReplyUrl] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const categories = [
    { id: "all", label: "All", emoji: "🌐" },
    { id: "general", label: "General", emoji: "💬" },
    { id: "slang", label: "Slang", emoji: "🗣️" },
    { id: "chunks", label: "Chunks", emoji: "🧩" },
    { id: "tips", label: "Language Tips", emoji: "💡" },
    { id: "mexico", label: "Living in Mexico", emoji: "🇲🇽" }
  ];

  const commonEmojis = ["😀", "😂", "🥰", "😎", "🤔", "👍", "👎", "❤️", "🔥", "🎉", "😭", "😅", "🤣", "🙌", "💯", "✨", "🤝", "👏", "😊", "🎯"];

  const buildNestedReplies = (posts, parentId = null) =>
    posts
      .filter((p) => p.parent_id === parentId)
      .map((p) => ({
        ...p,
        replies: buildNestedReplies(posts, p.id),
      }));

  const fetchUserVotes = async () => {
    if (!session?.user?.id) return;
    
    const { data, error } = await supabase
      .from('forum_votes')
      .select('post_id, vote')
      .eq('user_id', session.user.id);
    
    if (!error && data) {
      const votesMap = {};
      data.forEach(v => {
        votesMap[v.post_id] = v.vote > 0 ? 'upvote' : 'downvote';
      });
      setUserVotes(votesMap);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    let query = supabase
      .from("forum_posts_with_profiles")
      .select("*");

    if (wordSlug) {
      query = query.eq("word_slug", wordSlug?.toLowerCase());
    } else if (isMainForum) {
      query = query.is("word_slug", null);
    }

    if (isMainForum && activeCategory !== "all") {
      query = query.eq("category", activeCategory);
    }

    if (isMainForum) {
      query = query.is("parent_id", null);
    }

    const { data, error } = await query;

    if (error) {
      console.error("❌ Error fetching posts:", error);
    } else {
      const nested = isMainForum ? data || [] : buildNestedReplies(data || []);
      // Sort by most recent first
      const sorted = [...nested].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setPosts(sorted);
    }
    setLoading(false);
  };

  const fetchThreadDetails = async (threadId) => {
    setLoadingThread(true);
    
    try {
      const { data: mainPost, error: mainError } = await supabase
        .from("forum_posts_with_profiles")
        .select("*")
        .eq("id", threadId)
        .single();
      
      if (mainError) {
        console.error("Error fetching main post:", mainError);
        setLoadingThread(false);
        return;
      }
      
      const { data: allPosts, error: postsError } = await supabase
        .from("forum_posts_with_profiles")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (postsError) {
        console.error("Error fetching posts:", postsError);
        setLoadingThread(false);
        return;
      }
      
      const threadPostIds = new Set([threadId]);
      let foundNew = true;
      
      while (foundNew) {
        foundNew = false;
        for (const post of allPosts || []) {
          if (post.parent_id && threadPostIds.has(post.parent_id) && !threadPostIds.has(post.id)) {
            threadPostIds.add(post.id);
            foundNew = true;
          }
        }
      }
      
      const threadPosts = (allPosts || []).filter(p => threadPostIds.has(p.id) && p.id !== threadId);
      
      setSelectedThread(mainPost);
      setThreadReplies(threadPosts);
    } catch (error) {
      console.error("Error in fetchThreadDetails:", error);
    }
    
    setLoadingThread(false);
  };

  const handleThreadClick = async (post) => {
    if (isMainForum && post.parent_id === null) {
      await fetchThreadDetails(post.id);
      
      await supabase
        .from("forum_posts")
        .update({ view_count: (post.view_count || 0) + 1 })
        .eq("id", post.id);
    }
  };

  const closeModal = () => {
    setSelectedThread(null);
    setThreadReplies([]);
    setModalReplyContent("");
    setReplyingToModal(null);
    setModalNestedReplyContent("");
    setModalReplyFiles([]);
    setModalReplyUrl("");
    setShowEmojiPicker(false);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
    fetchUserVotes();
  }, [wordSlug, activeCategory, session?.user?.id]);

  const handlePost = async () => {
    if (!newPost.trim()) return;
    if (!session?.user?.id) return alert("Please log in to post.");

    setPosting(true);
    const postData = {
      user_id: session.user.id,
      content: newPost.trim(),
      word_slug: wordSlug?.toLowerCase() || null,
    };

    if (isMainForum && !replyingTo) {
      if (!newPostTitle.trim()) {
        alert("Please add a title for your post");
        setPosting(false);
        return;
      }
      postData.title = newPostTitle.trim();
      postData.category = selectedCategory;
    }

    const { error } = await supabase.from("forum_posts").insert(postData);

    if (!error) {
      setNewPost("");
      setNewPostTitle("");
      fetchPosts();
    }
    setPosting(false);
  };

  const handleReply = async (parentId) => {
    if (!replyContent.trim() || !session?.user?.id) return;

    const { error } = await supabase.from("forum_posts").insert({
      user_id: session.user.id,
      content: replyContent.trim(),
      word_slug: wordSlug?.toLowerCase() || null,
      parent_id: parentId,
      category: posts.find(p => p.id === parentId)?.category || "general"
    });

    if (!error) {
      setReplyingTo(null);
      setReplyContent("");
      fetchPosts();
    }
  };

  const handleModalReply = async () => {
    if (!modalReplyContent.trim() || !session?.user?.id) return;

    // Build the content with URLs and file references
    let fullContent = modalReplyContent.trim();
    
    if (modalReplyUrl.trim()) {
      fullContent += `\n\n🔗 ${modalReplyUrl.trim()}`;
    }
    
    if (modalReplyFiles.length > 0) {
      fullContent += "\n\n📎 Attached files: " + modalReplyFiles.map(f => f.name).join(", ");
    }

    const { error } = await supabase.from("forum_posts").insert({
      user_id: session.user.id,
      content: fullContent,
      word_slug: null,
      parent_id: selectedThread.id,
      category: selectedThread.category || "general"
    });

    if (!error) {
      setModalReplyContent("");
      setModalReplyFiles([]);
      setModalReplyUrl("");
      setShowEmojiPicker(false);
      await fetchThreadDetails(selectedThread.id);
    }
  };

  const handleModalNestedReply = async (parentId) => {
    if (!modalNestedReplyContent.trim() || !session?.user?.id) return;

    const { error } = await supabase.from("forum_posts").insert({
      user_id: session.user.id,
      content: modalNestedReplyContent.trim(),
      word_slug: null,
      parent_id: parentId,
      category: selectedThread.category || "general"
    });

    if (!error) {
      setReplyingToModal(null);
      setModalNestedReplyContent("");
      await fetchThreadDetails(selectedThread.id);
    }
  };

  const handleDelete = async (postId) => {
    const { error } = await supabase.from("forum_posts").delete().eq("id", postId);
    if (!error) {
      if (selectedThread && postId === selectedThread.id) {
        closeModal();
      } else if (selectedThread) {
        await fetchThreadDetails(selectedThread.id);
      } else {
        fetchPosts();
      }
    }
  };

  const handleEdit = async (postId) => {
    if (!editingContent.trim()) return;

    const { error } = await supabase
      .from("forum_posts")
      .update({ content: editingContent.trim() })
      .eq("id", postId);

    if (!error) {
      setEditingPostId(null);
      setEditingContent("");
      if (selectedThread) {
        await fetchThreadDetails(selectedThread.id);
      } else {
        fetchPosts();
      }
    }
  };

  const handleVote = async (postId, type) => {
    if (!session?.user?.id) {
      alert("Please log in to vote.");
      return;
    }

    console.log("handleVote called:", { postId, type, isMainForum });

    const currentVote = userVotes[postId];
    const isRemoving = currentVote === type; // User clicking same vote = remove it
    const isChanging = currentVote && currentVote !== type; // User switching vote type
    
    // Calculate vote count changes for optimistic update
    const calculateChanges = (post) => {
      const changes = { ...post };
      
      if (isRemoving) {
        // User is removing their vote (clicked same button twice)
        if (type === 'upvote') {
          changes.upvotes = Math.max(0, (changes.upvotes || 0) - 1);
        } else {
          changes.downvotes = Math.max(0, (changes.downvotes || 0) - 1);
        }
      } else if (isChanging) {
        // User is changing from one vote type to another
        if (currentVote === 'upvote') {
          // Was upvote, now downvote
          changes.upvotes = Math.max(0, (changes.upvotes || 0) - 1);
          changes.downvotes = (changes.downvotes || 0) + 1;
        } else {
          // Was downvote, now upvote
          changes.downvotes = Math.max(0, (changes.downvotes || 0) - 1);
          changes.upvotes = (changes.upvotes || 0) + 1;
        }
      } else {
        // New vote (user hasn't voted on this post before)
        if (type === 'upvote') {
          changes.upvotes = (changes.upvotes || 0) + 1;
        } else {
          changes.downvotes = (changes.downvotes || 0) + 1;
        }
      }
      
      return changes;
    };

    const optimisticUpdate = (post) => {
      if (post.id !== postId) return post;
      return calculateChanges(post);
    };

    setUserVotes(prev => ({
      ...prev,
      [postId]: isRemoving ? null : type
    }));

    if (selectedThread) {
      if (selectedThread.id === postId) {
        setSelectedThread(prev => optimisticUpdate(prev));
      } else {
        setThreadReplies(prev => prev.map(optimisticUpdate));
      }
    } else {
      setPosts(prev => {
        const updated = prev.map(post => {
          if (post.id === postId) {
            return optimisticUpdate(post);
          }
          if (post.replies) {
            return {
              ...post,
              replies: post.replies.map(reply => optimisticUpdate(reply))
            };
          }
          return post;
        });
        
        // Keep chronological order (most recent first)
        return updated;
      });
    }

    try {
      const voteValue = isRemoving ? 0 : (type === "upvote" ? 1 : -1);
      
      const { data, error } = await supabase.rpc("safe_single_vote", {
        p_post_id: postId,
        p_user_id: session.user.id,
        p_vote: voteValue,
      });

      if (error) {
        console.error("Vote error:", error);
        setUserVotes(prev => ({
          ...prev,
          [postId]: currentVote
        }));
        
        if (selectedThread) {
          await fetchThreadDetails(selectedThread.id);
        } else {
          await fetchPosts();
        }
        return;
      }

      if (data && typeof data === 'object' && (data.upvotes !== undefined || data.downvotes !== undefined)) {
        const updateWithRealData = (post) => {
          if (post.id !== postId) return post;
          return {
            ...post,
            upvotes: data.upvotes ?? post.upvotes,
            downvotes: data.downvotes ?? post.downvotes
          };
        };

        if (selectedThread) {
          if (selectedThread.id === postId) {
            setSelectedThread(prev => updateWithRealData(prev));
          } else {
            setThreadReplies(prev => prev.map(updateWithRealData));
          }
        } else {
          setPosts(prev => {
            const updated = prev.map(post => {
              if (post.id === postId) {
                return updateWithRealData(post);
              }
              if (post.replies) {
                return {
                  ...post,
                  replies: post.replies.map(reply => updateWithRealData(reply))
                };
              }
              return post;
            });
            
            // Keep chronological order (most recent first)
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("Vote error:", error);
      setUserVotes(prev => ({
        ...prev,
        [postId]: currentVote
      }));
      
      if (selectedThread) {
        await fetchThreadDetails(selectedThread.id);
      } else {
        await fetchPosts();
      }
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setModalReplyFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setModalReplyFiles(prev => prev.filter((_, i) => i !== index));
  };

  const addEmoji = (emoji) => {
    setModalReplyContent(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getUserTag = (id) => `Anon#${id.slice(0, 4)}`;

  const renderModalPost = (post, level = 0) => (
    <div key={post.id} className="mt-4" style={{ marginLeft: `${level * 2}rem` }}>
      <div className={`${level > 0 ? 'border-l-2 border-gray-200 pl-4' : ''}`}>
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-3">
            <div>
              {post.avatar_url ? (
                <img
                  src={post.avatar_url}
                  alt="avatar"
                  className="w-10 h-10 rounded-full shadow-sm object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg">
                  🤖
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <span className="font-bold text-gray-800">
                  {post.username || getUserTag(post.user_id || "anon")}
                </span>
                <span>•</span>
                <span>{formatDate(post.created_at)}</span>
                {level > 0 && (
                  <>
                    <span>•</span>
                    <span className="text-xs text-gray-500">Reply</span>
                  </>
                )}
              </div>
              {editingPostId === post.id ? (
                <div>
                  <textarea
                    rows={3}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingPostId(null);
                        setEditingContent("");
                      }}
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 text-sm rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
              )}
              <div className="flex items-center gap-4 mt-2 text-sm">
                <button
                  onClick={() => handleVote(post.id, "upvote")}
                  className={`font-bold cursor-pointer transition-transform hover:scale-110 ${
                    userVotes[post.id] === 'upvote' ? 'text-green-500' : 'hover:text-green-500'
                  }`}
                >
                  ▲
                </button>
                <span className="font-semibold">{post.upvotes - post.downvotes}</span>
                <button
                  onClick={() => handleVote(post.id, "downvote")}
                  className={`font-bold cursor-pointer transition-transform hover:scale-110 ${
                    userVotes[post.id] === 'downvote' ? 'text-red-500' : 'hover:text-red-500'
                  }`}
                >
                  ▼
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setReplyingToModal(post.id);
                  }}
                  className="hover:underline text-blue-500 ml-3 cursor-pointer text-sm font-medium hover:text-blue-700"
                >
                  Reply
                </button>
                {post.user_id === session?.user?.id && (
                  <>
                    <button
                      onClick={() => {
                        setEditingPostId(post.id);
                        setEditingContent(post.content);
                      }}
                      className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
              {replyingToModal === post.id && session?.user && (
                <div className="mt-3 bg-white p-3 rounded border border-gray-300">
                  <p className="text-xs text-gray-500 mb-2">Replying to {post.username || getUserTag(post.user_id || "anon")}</p>
                  <textarea
                    rows={3}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                    placeholder="Write your reply..."
                    value={modalNestedReplyContent}
                    onChange={(e) => setModalNestedReplyContent(e.target.value)}
                    autoFocus
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleModalNestedReply(post.id)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded cursor-pointer font-medium"
                      disabled={!modalNestedReplyContent.trim()}
                    >
                      Post Reply
                    </button>
                    <button
                      onClick={() => {
                        setReplyingToModal(null);
                        setModalNestedReplyContent("");
                      }}
                      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 text-sm rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {post.replies && post.replies.length > 0 && (
          <div className="ml-4 mt-3 border-l-2 border-gray-200">
            {post.replies.map((reply) => renderModalPost(reply, level + 1))}
          </div>
        )}
      </div>
    </div>
  );

  const renderPost = (post, level = 0) => {
    // Special rendering for main forum threads
    if (isMainForum && level === 0) {
      return (
        <div 
          key={post.id} 
          className="mt-6 cursor-pointer"
          onClick={() => handleThreadClick(post)}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
            {/* First row: Avatar, name, category, date, views */}
            <div className="flex items-center gap-3 text-base text-gray-600 mb-4">
              <div>
                {post.avatar_url ? (
                  <img
                    src={post.avatar_url}
                    alt="avatar"
                    className="w-12 h-12 rounded-full shadow-sm object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl">
                    🤖
                  </div>
                )}
              </div>
              <span className="font-semibold text-gray-800 text-lg">
                {post.username || getUserTag(post.user_id || "anon")}
              </span>
              <span>•</span>
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                {categories.find(c => c.id === post.category)?.emoji} {categories.find(c => c.id === post.category)?.label}
              </span>
              <span>•</span>
              <span className="text-base">{formatDate(post.created_at)}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-base">
                <span className="text-gray-400">👁</span> {post.view_count || 0} views
              </span>
            </div>

            {/* Second row: Large title */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
            </div>

            {/* Preview of content */}
            <p className="text-gray-700 line-clamp-2 mb-4 text-base">
              {post.content}
            </p>

            {/* Bottom row: Engagement metrics */}
            <div className="flex items-center gap-6 text-base text-gray-500 pt-4 border-t" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => handleVote(post.id, "upvote")}
                className={`flex items-center gap-2 cursor-pointer font-medium transition-colors duration-200 ${
                  userVotes[post.id] === 'upvote' 
                    ? 'text-green-600' 
                    : 'hover:text-green-600'
                }`}
              >
                {userVotes[post.id] === 'upvote' ? '👍' : '👍'} {post.upvotes > 0 ? post.upvotes : ''} {post.upvotes === 1 ? 'like' : post.upvotes > 1 ? 'likes' : 'Like'}
              </button>
              <span className="flex items-center gap-1">
                💬 {post.reply_count || 0} {post.reply_count === 1 ? 'reply' : 'replies'}
              </span>
              <span className={`text-sm font-bold ${
                ((post.upvotes || 0) - (post.downvotes || 0)) > 0 
                  ? 'text-green-600' 
                  : ((post.upvotes || 0) - (post.downvotes || 0)) < 0 
                    ? 'text-red-600' 
                    : 'text-gray-600'
              }`}>
                Score: {(post.upvotes || 0) - (post.downvotes || 0)}
              </span>
              <span className="ml-auto text-sm italic text-gray-400">
                Click to view thread
              </span>
            </div>
          </div>
        </div>
      );
    }

    // Original rendering for non-main forum posts and nested replies
    return (
      <div 
        key={post.id} 
        className="mt-6"
        style={{ marginLeft: `${level * 1.5}rem` }}
      >
        <div className="bg-white p-5 rounded shadow-sm border-2 border-gray-300 text-lg leading-relaxed hover:bg-gray-50 transition">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col flex-1 ml-1">
              <div className="flex items-center gap-4 text-lg text-gray-600 mb-3">
                <div className="pl-1">
                  {post.avatar_url ? (
                    <img
                      src={post.avatar_url}
                      alt="avatar"
                      className="w-16 h-16 rounded-full shadow-sm object-cover p-1"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                      🤖
                    </div>
                  )}
                </div>
                <span className="font-bold text-xl text-gray-800">
                  {post.username || getUserTag(post.user_id || "anon")}
                </span>
                <span>•</span>
                <span>{formatDate(post.created_at)}</span>
              </div>
              {editingPostId === post.id ? (
                <div>
                  <textarea
                    rows={4}
                    className="w-full p-3 border-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                  />
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingPostId(null);
                        setEditingContent("");
                      }}
                      className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-800 whitespace-pre-wrap text-lg">{post.content}</p>
              )}
            </div>
            {post.user_id === session?.user?.id && (
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => {
                    setEditingPostId(post.id);
                    setEditingContent(post.content);
                  }}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer text-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 mt-3 text-xl text-gray-500">
            <button
              onClick={() => handleVote(post.id, "upvote")}
              className={`font-bold cursor-pointer transition-transform transform hover:scale-125 ${
                userVotes[post.id] === 'upvote' ? 'text-green-500' : 'hover:text-green-500'
              }`}
            >
              ▲
            </button>
            <span>{post.upvotes - post.downvotes}</span>
            <button
              onClick={() => handleVote(post.id, "downvote")}
              className={`font-bold cursor-pointer transition-transform transform hover:scale-125 ${
                userVotes[post.id] === 'downvote' ? 'text-red-500' : 'hover:text-red-500'
              }`}
            >
              ▼
            </button>
            <button
              onClick={() => setReplyingTo(post.id)}
              className="hover:underline text-blue-500 ml-3 cursor-pointer text-lg"
            >
              Reply
            </button>
          </div>
          {replyingTo === post.id && (
            <div className="mt-3">
              <textarea
                rows={3}
                className="w-full p-3 border-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              />
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleReply(post.id)}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-lg rounded cursor-pointer"
                >
                  Post
                </button>
                <button
                  onClick={() => {
                    setReplyingTo(null);
                    setReplyContent("");
                  }}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-lg rounded cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        {post.replies && post.replies.map((reply) => renderPost(reply, level + 1))}
      </div>
    );
  };

  const renderThreadModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b p-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{selectedThread.title}</h2>
            <span className="text-sm text-gray-500">
              {categories.find(c => c.id === selectedThread.category)?.emoji} {selectedThread.category}
            </span>
          </div>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loadingThread ? (
            <div className="flex justify-center py-6">
              <ClipLoader size={40} color={"#4A90E2"} />
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    {selectedThread.avatar_url ? (
                      <img
                        src={selectedThread.avatar_url}
                        alt="avatar"
                        className="w-14 h-14 rounded-full shadow-sm object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                        🤖
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="mb-1">
                      <span className="font-bold text-xl text-gray-900">
                        {selectedThread.username || getUserTag(selectedThread.user_id || "anon")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-base text-gray-600">
                      <span>{formatDate(selectedThread.created_at)}</span>
                      <span>•</span>
                      <span className="font-semibold">
                        {categories.find(c => c.id === selectedThread.category)?.label || selectedThread.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedThread.title}
                </h3>
                
                <p className="text-gray-800 whitespace-pre-wrap text-lg leading-relaxed mb-6">
                  {selectedThread.content}
                </p>
                
                <div className="flex items-center gap-6 text-base text-gray-600 pt-4 border-t">
                  <button
                    onClick={() => handleVote(selectedThread.id, "upvote")}
                    className={`flex items-center gap-2 cursor-pointer font-medium ${
                      userVotes[selectedThread.id] === 'upvote' 
                        ? 'text-green-600' 
                        : 'hover:text-green-600'
                    }`}
                  >
                    👍 Like {selectedThread.upvotes > 0 && `${selectedThread.upvotes}`}
                  </button>
                  <span className="font-medium">
                    💬 {threadReplies.length} {threadReplies.length === 1 ? 'comment' : 'comments'}
                  </span>
                  <button
                    onClick={() => setReplyingToModal(selectedThread.id)}
                    className="hover:underline text-blue-600 cursor-pointer font-medium ml-auto"
                  >
                    Reply
                  </button>
                  {selectedThread.user_id === session?.user?.id && (
                    <>
                      <button
                        onClick={() => {
                          setEditingPostId(selectedThread.id);
                          setEditingContent(selectedThread.content);
                        }}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(selectedThread.id)}
                        className="text-gray-500 hover:text-red-600 cursor-pointer"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
                {replyingToModal === selectedThread.id && session?.user && (
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Replying to main post</p>
                    <textarea
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write your reply..."
                      value={modalNestedReplyContent}
                      onChange={(e) => setModalNestedReplyContent(e.target.value)}
                      autoFocus
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleModalNestedReply(selectedThread.id)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer font-medium"
                        disabled={!modalNestedReplyContent.trim()}
                      >
                        Post Reply
                      </button>
                      <button
                        onClick={() => {
                          setReplyingToModal(null);
                          setModalNestedReplyContent("");
                        }}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-4 border-b pb-2">
                  {threadReplies.length} {threadReplies.length === 1 ? 'Reply' : 'Replies'}
                </h3>
                {threadReplies.length === 0 ? (
                  <p className="text-gray-500 italic text-2xl">No replies yet. Be the first to reply!</p>
                ) : (
                  <div className="space-y-10">
                    {threadReplies.map(reply => {
                      const isNested = reply.parent_id !== selectedThread.id;
                      return (
                        <div key={reply.id} className={`${isNested ? 'ml-16' : ''}`}>
                          {renderModalPost(reply)}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {session?.user && (
                <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    rows={3}
                    placeholder="Write a reply to this thread..."
                    value={modalReplyContent}
                    onChange={(e) => setModalReplyContent(e.target.value)}
                  />
                  
                  {/* URL Input */}
                  <div className="mt-3">
                    <input
                      type="url"
                      placeholder="Add a link (optional)"
                      value={modalReplyUrl}
                      onChange={(e) => setModalReplyUrl(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="mt-3 flex items-center gap-4">
                    <label className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer text-sm">
                      <span>📎 Attach files</span>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                        accept="image/*,.pdf,.doc,.docx,.txt"
                      />
                    </label>
                    
                    {/* Emoji Picker Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
                    >
                      😊 Add emoji
                    </button>
                  </div>

                  {/* Show selected files */}
                  {modalReplyFiles.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {modalReplyFiles.map((file, index) => (
                        <div key={index} className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded text-sm">
                          <span>{file.name}</span>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 font-bold"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Emoji Picker */}
                  {showEmojiPicker && (
                    <div className="mt-3 p-3 bg-white border border-gray-300 rounded-lg">
                      <div className="grid grid-cols-10 gap-2">
                        {commonEmojis.map((emoji, index) => (
                          <button
                            key={index}
                            onClick={() => addEmoji(emoji)}
                            className="text-2xl hover:bg-gray-100 rounded p-1"
                            type="button"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleModalReply}
                    className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded cursor-pointer"
                    disabled={!modalReplyContent.trim()}
                  >
                    Reply to Thread
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-10 border-t-2 pt-8 text-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b-2 border-blue-300 pb-3">
        {isMainForum ? "🗨️ Community Forum" : "🦜 El Rincón del Cotorreo"}
      </h2>

      {isMainForum && (
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      )}

      {session?.user ? (
        <div className="mb-6">
          {isMainForum && (
            <>
              <input
                type="text"
                placeholder="Thread title..."
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                className="w-full p-4 mb-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-lg font-semibold"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 mb-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.filter(c => c.id !== "all").map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.emoji} {cat.label}
                  </option>
                ))}
              </select>
            </>
          )}
          <textarea
            className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            rows={3}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder={isMainForum ? "What's on your mind?" : "Share a tip, ask a question..."}
          />
          <button
            onClick={handlePost}
            className="mt-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow text-lg cursor-pointer"
            disabled={posting}
          >
            {posting ? "Posting..." : "Post"}
          </button>
        </div>
      ) : (
        <p className="text-lg text-gray-500">Please log in to post.</p>
      )}
      {loading ? (
        <div className="flex justify-center py-6">
          <ClipLoader size={40} color={"#4A90E2"} />
        </div>
      ) : posts.length === 0 ? (
        <p className="text-lg text-gray-500 italic">No posts yet.</p>
      ) : (
        posts.map((post) => renderPost(post))
      )}

      {selectedThread && isMainForum && renderThreadModal()}
    </div>
  );
}