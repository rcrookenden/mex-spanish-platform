import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Check if we're on the homepage with ?code=... in the URL
  if (url.pathname === "/" && url.searchParams.has("code")) {
    url.pathname = "/profile-setup"; // Redirect to profile-setup
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
