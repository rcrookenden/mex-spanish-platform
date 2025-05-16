import "../styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar"; // ✅ fixed relative import

export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createPagesBrowserClient());
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      {!isHome && <NavBar />} {/* ✅ Only show if not home */}
      <Component {...pageProps} />
      <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
    </SessionContextProvider>
  );
}
