import Head from "next/head";
import words from "../data/words";
import confetti from "canvas-confetti";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const slugs = words.map((w) => w.slug.toLowerCase());
  const { data: session, status } = useSession();

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
        `}</style>
      </Head>

      {/* HEADER */}
      <header className="relative flex flex-col items-center justify-center text-center my-10">
        {/* LOGIN/LOGOUT BOX */}
        <div className="absolute top-0 right-0 p-6">
          <div className="relative bg-white rounded-xl shadow-xl border-4 border-[#ce1126] border-b-green-600 border-r-green-600 px-6 py-4 transform rotate-[-1.5deg]">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full shadow-md" />
            <div className="flex items-center gap-4 z-10 relative">
              {status === "authenticated" ? (
                <>
                  <img
                    src="/images/default-avatar-male.png"
                    alt="Avatar"
                    className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-green-600"
                  />
                  <span className="font-semibold">{session.user.name}</span>
                  <button
                    onClick={() => signOut()}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm cursor-pointer"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => signIn()}
                    className="bg-[#ce1126] text-white text-sm md:text-base font-bold px-5 py-2 rounded-md hover:bg-red-800 transition cursor-pointer shadow"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => signIn()}
                    className="bg-green-700 text-white text-sm md:text-base font-bold px-5 py-2 rounded-md hover:bg-green-800 transition cursor-pointer shadow"
                  >
                    Get started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <h1 className="aztec text-5xl md:text-7xl text-green-700">
          Mex Spanish Dict 💀
        </h1>
      </header>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-8">
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
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl shadow-md transition"
        >
          🎲 Are you feeling lucky?
        </button>
      </div>

      {/* FEATURED WORDS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          🔥 Featured Words
        </h2>
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
        <h2 className="text-3xl font-bold text-center mb-12">
          ⚡ Featured Chunks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            ¡Qué onda!
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            No manches
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            Ya valió
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            Me cayó el veinte
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-600 pb-6">
        Made with ❤️ in CDMX
      </footer>
    </div>
  );
}
