import { useEffect, useState } from "react";
import Head from "next/head";
import words from "../data/words";
import confetti from "canvas-confetti";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const slugs = words.map((w) => w.slug.toLowerCase());
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShake(true), 10000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-6">
      <Head>
        <title>Mex Spanish Dict 💀</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .aztec {
            font-family: 'Tilt Warp', cursive;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
          }
          .animate-shake {
            animation: shake 0.5s ease-in-out infinite;
          }
        `}</style>
      </Head>

      {/* HEADER */}
      <header className="relative flex flex-col items-center justify-center text-center my-10">
        {/* LOGIN/LOGOUT BOX */}
        <div className="relative w-full flex justify-center 2xl:justify-end 2xl:absolute 2xl:top-0 2xl:right-0 pt-2 pb-6 2xl:pt-0 2xl:pb-0 z-30 pointer-events-none">
          <div className="relative bg-white rounded-xl shadow-xl border-4 border-[#ce1126] border-b-green-600 border-r-green-600 px-6 py-4 transform 2xl:rotate-[-1.5deg] w-full max-w-sm pointer-events-auto">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full shadow-md"
              style={{ top: "-7.5px" }}
            />
            <div className="flex flex-col items-center gap-4 z-10 relative text-center">
              {session?.user ? (
                <>
                  <img
                    src="/images/default-avatar-male.png"
                    alt="Avatar"
                    className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-green-600 transition-transform duration-200 hover:scale-105"
                  />
                  <span className="font-semibold text-lg truncate max-w-[150px]">
                    {(session.user.user_metadata?.full_name?.split(" ")[0]) ||
                      session.user.email.split("@")[0]}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm cursor-pointer w-full 2xl:w-auto"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSignIn}
                    className="bg-[#ce1126] text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-red-800 transition cursor-pointer shadow w-full 2xl:w-auto"
                  >
                    Log in
                  </button>
                  <button
                    onClick={handleSignIn}
                    className="bg-green-700 text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-green-800 transition cursor-pointer shadow w-full 2xl:w-auto"
                  >
                    Get started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <h1 className="aztec text-5xl xl:text-7xl text-green-700 mt-10 md:mt-14">
          Mex Spanish Dict 💀
        </h1>
      </header>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-8 z-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const query = e.target.elements.query.value.trim().toLowerCase();
            if (slugs.includes(query)) {
              window.location.href = `/word/${encodeURIComponent(query)}`;
            } else {
              window.location.href = `/not-found`;
            }
          }}
          className="flex w-full max-w-xl"
        >
          <input
            name="query"
            type="text"
            placeholder="Heard a mexicanism? Whack it in here..."
            className="flex-grow p-4 rounded-l-full border border-gray-300 focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 rounded-r-full text-lg"
          >
            Search
          </button>
        </form>
      </div>

      {/* FEELING LUCKY */}
      <div className="flex flex-col items-center mb-12">
        <button
          onClick={() => {
            const randomSlug =
              words[Math.floor(Math.random() * words.length)].slug;
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            setTimeout(() => {
              window.location.href = `/word/${encodeURIComponent(randomSlug)}`;
            }, 300);
          }}
          className={`cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl shadow-md transition transform ${
            shake ? "animate-shake" : ""
          }`}
        >
          🎲 Are you feeling lucky?
        </button>
      </div>

      {/* FEATURED WORDS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">🔥 Featured Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["chela", "chido", "mande", "güey"].map((slug) => {
            const word = words.find((w) => w.slug === slug);
            return (
              <a
                key={slug}
                href={`/word/${encodeURIComponent(slug)}`}
                className="bg-green-50 p-8 rounded-2xl shadow-2xl text-center hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-transform duration-300 transform flex flex-col justify-between items-center h-[420px] overflow-hidden"
              >
                <div className="h-[300px] w-full flex items-center justify-center mb-4">
                  <img
                    src={`/images/${
                      slug === "chela" ? "caguama" : slug === "güey" ? "wey" : slug
                    }.png`}
                    alt={`${slug} cartoon`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-5xl font-extrabold text-green-700">
                  {slug}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* FEATURED CHUNKS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">⚡ Featured Chunks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { slug: "se-me-hace-tarde", text: "Se me hace tarde" },
            { slug: "por-eso", text: "Por eso" },
            { slug: "que-tengas-buen-dia", text: "Que tengas buen día" },
            { slug: "ya-me-voy", text: "Ya me voy" },
          ].map(({ slug, text }) => (
            <a
              key={slug}
              href={`/chunk/${slug}`}
              className="bg-green-50 p-8 rounded-2xl shadow-2xl text-center hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-transform duration-300 transform flex items-center justify-center h-[420px] overflow-hidden"
            >
              <span className="text-3xl font-extrabold text-green-700">{text}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-600 pb-6">
        Made with ❤️ in CDMX
      </footer>
    </div>
  );
}
