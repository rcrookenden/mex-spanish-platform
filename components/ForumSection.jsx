import { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { FiTrash2 } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";

export default function ForumSection({ wordSlug = null }) {
  const supabase = useSupabaseClient();
  const session = useSession();

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const buildNestedReplies = (posts, parentId = null) =>
    posts
      .filter((p) => p.parent_id === parentId)
      .map((p) => ({
        ...p,
        replies: buildNestedReplies(posts, p.id),
      }));

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("forum_posts_with_profiles")
      .select("*")
      .eq("word_slug", wordSlug?.toLowerCase());

    if (error) {
      console.error("❌ Error fetching posts:", error);
    } else {
      const nested = buildNestedReplies(data || []);
      const sorted = nested.sort(
        (a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
      );
      setPosts(sorted);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (wordSlug) fetchPosts();
  }, [wordSlug]);

  const handlePost = async () => {
    if (!newPost.trim()) return;
    if (!session?.user?.id) return alert("Please log in to post.");

    setPosting(true);
    const { error } = await supabase.from("forum_posts").insert({
      user_id: session.user.id,
      content: newPost.trim(),
      word_slug: wordSlug.toLowerCase(),
    });

    if (error) {
      console.error("❌ Insert failed:", error);
      alert("❌ Post failed: " + error.message);
    } else {
      setNewPost("");
      fetchPosts();
    }
    setPosting(false);
  };

  const handleReply = async (parentId) => {
    if (!replyContent.trim()) return;
    if (!session?.user?.id) return alert("Please log in to reply.");

    const { error } = await supabase.from("forum_posts").insert({
      user_id: session.user.id,
      content: replyContent.trim(),
      word_slug: wordSlug.toLowerCase(),
      parent_id: parentId,
    });

    if (error) {
      console.error("❌ Reply failed:", error);
      alert("❌ Could not post reply: " + error.message);
    } else {
      setReplyingTo(null);
      setReplyContent("");
      fetchPosts();
    }
  };

  const handleDelete = async (postId) => {
    const { error } = await supabase.from("forum_posts").delete().eq("id", postId);
    if (error) {
      console.error("❌ Delete failed:", error);
      alert("Could not delete post.");
    } else {
      fetchPosts();
    }
  };

  const handleEdit = async (postId) => {
    if (!editingContent.trim()) return;

    const { error } = await supabase
      .from("forum_posts")
      .update({ content: editingContent.trim() })
      .eq("id", postId);

    if (error) {
      console.error("❌ Edit failed:", error);
      alert("❌ Could not edit post: " + error.message);
    } else {
      setEditingPostId(null);
      setEditingContent("");
      fetchPosts();
    }
  };

  const handleVote = async (postId, type) => {
    if (!session?.user?.id) {
      alert("Please log in to vote.");
      return;
    }

    const { error } = await supabase.rpc("safe_single_vote", {
      p_post_id: postId,
      p_user_id: session.user.id,
      p_vote: type === "upvote" ? 1 : -1,
    });

    if (error) {
      console.error("❌ Vote error:", error);
      alert("❌ Could not vote: " + error.message);
    } else {
      const { data: updatedPost, error: fetchError } = await supabase
        .from("forum_posts")
        .select("id, upvotes, downvotes")
        .eq("id", postId)
        .single();

      if (fetchError) {
        console.error("❌ Fetch updated votes error:", fetchError);
      } else {
        setPosts((currentPosts) =>
          updateVotesFromServer(currentPosts, updatedPost)
        );
      }
    }
  };

  const updateVotesFromServer = (posts, updatedPost) =>
    posts.map((post) => {
      if (post.id === updatedPost.id) {
        return {
          ...post,
          upvotes: updatedPost.upvotes,
          downvotes: updatedPost.downvotes,
        };
      } else if (post.replies) {
        return {
          ...post,
          replies: updateVotesFromServer(post.replies, updatedPost),
        };
      }
      return post;
    });

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

  const renderPost = (post, level = 0) => (
    <div
      key={post.id}
      className="relative mt-6 pl-6"
      style={{ marginLeft: `${level * 1.5}rem` }}
    >
      {level > 0 && (
        <div
          className="absolute top-0 left-0 h-full w-4 flex items-center justify-center"
          style={{ transform: "translateX(-50%)" }}
        >
          <div className="h-full w-px bg-gray-300 rounded"></div>
        </div>
      )}
      <div className="bg-white p-6 rounded shadow-sm border border-gray-200 text-lg leading-relaxed">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-3 text-base text-gray-600 mb-2">
              {post.avatar_url ? (
                <img
                  src={post.avatar_url}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg">
                  🤖
                </div>
              )}
              <span className="font-bold text-lg text-gray-800">
                {post.username || getUserTag(post.user_id || "anon")}
              </span>
              <span>•</span>
              <span>{formatDate(post.created_at)}</span>
            </div>
            {editingPostId === post.id ? (
              <div className="mt-2">
                <textarea
                  rows={3}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(post.id)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-base rounded cursor-pointer"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setEditingPostId(null);
                      setEditingContent("");
                    }}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-base rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-900 whitespace-pre-wrap">{post.content}</p>
            )}
          </div>
          {post.user_id === session?.user?.id && (
            <div className="flex gap-2 mt-1">
              <button
                onClick={() => {
                  setEditingPostId(post.id);
                  setEditingContent(post.content);
                }}
                className="text-blue-500 hover:text-blue-700 cursor-pointer text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <FiTrash2 className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 mt-3 text-xl text-gray-700">
          <button
            onClick={() => handleVote(post.id, "upvote")}
            className="hover:text-green-500 font-bold cursor-pointer transition-transform transform hover:scale-125"
          >
            ▲
          </button>
          <span className="transition-colors duration-300">
            {post.upvotes - post.downvotes}
          </span>
          <button
            onClick={() => handleVote(post.id, "downvote")}
            className="hover:text-red-500 font-bold cursor-pointer transition-transform transform hover:scale-125"
          >
            ▼
          </button>
          <button
            onClick={() => setReplyingTo(post.id)}
            className="hover:underline text-base text-blue-600 ml-4 cursor-pointer transition-transform transform hover:scale-105"
          >
            Reply
          </button>
        </div>
        {replyingTo === post.id && (
          <div className="mt-3">
            <textarea
              rows={3}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
              placeholder="Write your reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleReply(post.id)}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-base rounded cursor-pointer"
              >
                Post Reply
              </button>
              <button
                onClick={() => {
                  setReplyingTo(null);
                  setReplyContent("");
                }}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-base rounded cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {post.replies && post.replies.map((reply) => renderPost(reply, level + 1))}
      </div>
    </div>
  );

  return (
    <div className="mt-10 border-t pt-8 text-lg leading-relaxed">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-800">🦜 El Rincón del Cotorreo</h2>
      {session && session.user ? (
        <div className="mb-8">
          <textarea
            className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            rows={3}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share a tip, ask a question..."
          />
          <button
            onClick={handlePost}
            className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-md text-lg cursor-pointer"
            disabled={posting}
          >
            {posting ? "Posting..." : "Post"}
          </button>
        </div>
      ) : (
        <p className="text-lg text-gray-600">Please log in to post.</p>
      )}
      {loading ? (
        <div className="flex justify-center py-6">
          <ClipLoader size={40} color={"#4A90E2"} />
        </div>
      ) : posts.length === 0 ? (
        <p className="text-lg text-gray-500 italic">No posts yet.</p>
      ) : (
        <div>{posts.map((post) => renderPost(post))}</div>
      )}
    </div>
  );
}
