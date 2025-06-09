export default function LoginPage() {
  const handleGoogleSignIn = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Sign in with Google
      </button>
    </div>
  );
}
