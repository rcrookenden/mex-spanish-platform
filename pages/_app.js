import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [supabase] = useState(() => createPagesBrowserClient());
  const router = useRouter();
  const isHome = router.pathname === "/";

  // Redirect from /?code=... to profile setup
  useEffect(() => {
    if (router.pathname === "/" && router.query.code) {
      router.replace("/profile-setup");
    }
  }, [router]);

  return (
    // ⭐ NextAuth provider FIRST
    <SessionProvider session={session}>
      {/* ⭐ Supabase context only for DB queries, NOT authentication */}
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        {!isHome && <NavBar />}
        <Component {...pageProps} />
        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
      </SessionContextProvider>
    </SessionProvider>
  );
}
