export default function NotFound() {
    return (
      <div className="min-h-screen bg-[#f7f7f7] text-gray-800 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! That word doesn’t exist 💀</h1>
        <p className="text-xl mb-10">
          But we’re adding new ones all the time — try another Mexicanism!
        </p>
        <a
          href="/"
          className="inline-block bg-green-700 hover:bg-green-800 text-white py-5 px-12 rounded-full text-2xl font-bold tracking-wide"
        >
        BACK TO HOMEPAGE
        </a>
      </div>
    );
  }
  