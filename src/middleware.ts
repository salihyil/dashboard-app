import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("token")?.value;
  const url = request.nextUrl;

  if (!currentUser && url.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (currentUser && url.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
