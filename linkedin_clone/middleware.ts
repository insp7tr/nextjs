import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  if (pathname === "/") {
    const session = await getToken({
      req: request,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    if (!session) return NextResponse.redirect(`${origin}/home`);
  }
}
