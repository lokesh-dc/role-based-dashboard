import { NextResponse } from "next/server";

export const config = {
	matcher: ["/dashboard/:path*", "/users/:path*", "/auth/:path*", "/auth"],
};

const AUTH_ROUTES = ["/auth"];
const PRIVATE_ROUTES = ["/dashboard", "/users"];

export async function middleware(request) {
	const token = request.cookies.get("auth_token")?.value;
	const pathname = request.nextUrl.pathname;
	if (!token && PRIVATE_ROUTES.some((route) => pathname.startsWith(route))) {
		const loginUrl = new URL("/auth", request.url);
		return NextResponse.redirect(loginUrl);
	}

	if (token && AUTH_ROUTES.some((route) => pathname.startsWith(route))) {
		const dashboardUrl = new URL("/dashboard", request.url);
		return NextResponse.redirect(dashboardUrl);
	}

	return NextResponse.next();
}
