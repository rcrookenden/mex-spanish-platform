import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";

export default function ChallengesSection() {
  const session = useSession();
  const supabase = useSupabaseClient();
  
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (!session?.user?.id) {
      setLoading(false);
      return;
    }

    fetchChallenges();
  }, [session]);

  const fetchChallenges = async () => {
    try {
      // First, get all challenges
      const { data: allChallenges, error: challengesError } = await supabase
        .from('challenges')
        .select('*')
        .eq('is_active', true)
        .order('difficulty', { ascending: true })
        .order('xp_reward', { ascending: true });

      if (challengesError) throw challengesError;

      // Then get user's progress for each challenge
      const { data: userProgress, error: progressError } = await supabase
        .from('user_challenges')
        .select('*')
        .eq('user_id', session.user.id);

      if (progressError) throw progressError;

      // Combine challenges with user progress
      const challengesWithProgress = allChallenges.map(challenge => {
        const progress = userProgress?.find(up => up.challenge_id === challenge.id);
        
        // Calculate progress percentage and text
        let progressText = "0/1";
        let progressPercentage = 0;
        
        if (progress?.progress) {
          switch (challenge.challenge_type) {
            case 'save_words':
              const wordsSaved = progress.progress.words_saved || 0;
              const wordsNeeded = challenge.requirements.words_to_save;
              progressText = `${wordsSaved}/${wordsNeeded}`;
              progressPercentage = Math.min(100, (wordsSaved / wordsNeeded) * 100);
              break;
            
            case 'reviews':
              const reviewsDone = progress.progress.reviews_completed || 0;
              const reviewsNeeded = challenge.requirements.reviews_needed;
              progressText = `${reviewsDone}/${reviewsNeeded}`;
              progressPercentage = Math.min(100, (reviewsDone / reviewsNeeded) * 100);
              break;
            
            case 'quiz':
              const correctAnswers = progress.progress.correct_answers || 0;
              const answersNeeded = challenge.requirements.correct_answers_needed;
              progressText = `${correctAnswers}/${answersNeeded}`;
              progressPercentage = Math.min(100, (correctAnswers / answersNeeded) * 100);
              break;
            
            case 'streak':
              const currentStreak = progress.progress.current_streak || 0;
              const daysRequired = challenge.requirements.days_required;
              progressText = `${currentStreak}/${daysRequired} days`;
              progressPercentage = Math.min(100, (currentStreak / daysRequired) * 100);
              break;
            
            case 'weekly_xp':
              const currentXP = progress.progress.current_xp || 0;
              const xpNeeded = challenge.requirements.xp_needed;
              progressText = `${currentXP}/${xpNeeded} XP`;
              progressPercentage = Math.min(100, (currentXP / xpNeeded) * 100);
              break;
          }
        }
        
        return {
          ...challenge,
          user_progress: progress || {},
          progress_text: progressText,
          progress_percentage: progressPercentage,
          is_completed: progress?.is_completed || false,
          completed_at: progress?.completed_at
        };
      });

      // Check and update weekly XP and streak challenges
      await updateWeeklyProgressChallenges();

      setChallenges(challengesWithProgress);
    } catch (error) {
      console.error('Error fetching challenges:', error);
      toast.error('Failed to load challenges');
    } finally {
      setLoading(false);
    }
  };

  const updateWeeklyProgressChallenges = async () => {
    try {
      // Get user's current weekly XP
      const { data: profile } = await supabase
        .from('profiles')
        .select('weekly_xp, streak_count')
        .eq('id', session.user.id)
        .single();

      if (profile) {
        // Update weekly XP challenges
        if (profile.weekly_xp > 0) {
          await supabase.rpc('update_challenge_progress', {
            p_user_id: session.user.id,
            p_challenge_type: 'weekly_xp',
            p_progress_data: { weekly_xp: profile.weekly_xp }
          });
        }

        // Update streak challenges
        if (profile.streak_count > 0) {
          await supabase.rpc('update_challenge_progress', {
            p_user_id: session.user.id,
            p_challenge_type: 'streak',
            p_progress_data: { streak_count: profile.streak_count }
          });
        }
      }
    } catch (error) {
      console.error('Error updating progress challenges:', error);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'hard': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getDifficultyEmoji = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '🌱';
      case 'medium': return '🔥';
      case 'hard': return '💎';
      default: return '⭐';
    }
  };

  const getTypeEmoji = (type) => {
    switch (type) {
      case 'save_words': return '💾';
      case 'reviews': return '📚';
      case 'quiz': return '🎯';
      case 'streak': return '🔥';
      case 'weekly_xp': return '⚡';
      case 'perfect_streak': return '✨';
      case 'perfect_session': return '💯';
      default: return '🎮';
    }
  };

  const filteredChallenges = challenges.filter(challenge => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return !challenge.is_completed;
    if (activeFilter === 'completed') return challenge.is_completed;
    return challenge.difficulty === activeFilter;
  });

  const completedCount = challenges.filter(c => c.is_completed).length;
  const totalXPEarned = challenges.filter(c => c.is_completed).reduce((sum, c) => sum + c.xp_reward, 0);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-3xl mb-2">💪</div>
        <p className="text-gray-600">Loading challenges...</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Sign in to see challenges!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 border-4 border-purple-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-green-700">💪 Weekly Challenges</h3>
          <p className="text-sm text-gray-600 mt-1">
            Complete challenges to earn bonus XP!
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-bold text-purple-600">{completedCount}/{challenges.length}</p>
          <p className="text-xs text-gray-500">{totalXPEarned} XP earned</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['all', 'active', 'completed', 'easy', 'medium', 'hard'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              activeFilter === filter
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
            {filter === 'all' && ` (${challenges.length})`}
            {filter === 'active' && ` (${challenges.filter(c => !c.is_completed).length})`}
            {filter === 'completed' && ` (${completedCount})`}
          </button>
        ))}
      </div>

      {/* Challenges Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredChallenges.map(challenge => (
          <div
            key={challenge.id}
            className={`relative border-2 rounded-xl p-4 transition-all ${
              challenge.is_completed 
                ? 'bg-gray-50 border-gray-300 opacity-75' 
                : getDifficultyColor(challenge.difficulty)
            }`}
          >
            {/* Completed Badge */}
            {challenge.is_completed && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2">
                ✓
              </div>
            )}

            {/* Challenge Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getTypeEmoji(challenge.challenge_type)}</span>
                <div>
                  <h4 className="font-bold text-green-700">{challenge.title}</h4>
                  <p className="text-xs text-gray-600">{challenge.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl">{getDifficultyEmoji(challenge.difficulty)}</span>
                <p className="text-sm font-bold">{challenge.xp_reward} XP</p>
              </div>
            </div>

            {/* Progress Bar */}
            {!challenge.is_completed && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold">{challenge.progress_text}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      challenge.progress_percentage === 100 
                        ? 'bg-green-500' 
                        : challenge.progress_percentage >= 50 
                        ? 'bg-yellow-500' 
                        : 'bg-blue-500'
                    }`}
                    style={{ width: `${challenge.progress_percentage}%` }}
                  />
                </div>
              </div>
            )}

            {/* Completion Time */}
            {challenge.is_completed && challenge.completed_at && (
              <p className="text-xs text-gray-500 mt-3">
                Completed {new Date(challenge.completed_at).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredChallenges.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-xl mb-2">No challenges found</p>
          <p className="text-sm">Try a different filter!</p>
        </div>
      )}

      {/* Motivational Message */}
      {completedCount === challenges.length && challenges.length > 0 && (
        <div className="mt-6 text-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl">
          <p className="text-xl font-bold">🎉 ¡Increíble! All challenges completed!</p>
          <p className="text-sm mt-1">You earned {totalXPEarned} bonus XP this week!</p>
        </div>
      )}
    </div>
  );
}