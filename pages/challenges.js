import { useSession } from "next-auth/react";
import ChallengesSection from "../components/ChallengesSection";

export default function ChallengesPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (!session) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <p className="text-xl font-bold">
          Please log in to see your challenges 🔒
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ChallengesSection userEmail={session.user.email} />
    </div>
  );
}
