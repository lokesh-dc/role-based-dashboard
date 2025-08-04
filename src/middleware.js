import { NextResponse } from "next/server";
export const config = {
	matcher: ["/dashboard/:path*", "/users/:path*", "/auth/:path*", "/auth"],
};
export function middleware(request) {
	const AUTH_ROUTES = ["/auth"];
	const PRIVATE_ROUTES = ["/dashboard", "/users"];
	const isLoggedIn = request.cookies.get("auth_token");
	const pathname = request.nextUrl.pathname;

	if (
		!isLoggedIn &&
		PRIVATE_ROUTES.some((route) => pathname.startsWith(route))
	) {
		const loginUrl = new URL("/auth", request.url);
		return NextResponse.redirect(loginUrl);
	}

	if (isLoggedIn && AUTH_ROUTES.some((route) => pathname.startsWith(route))) {
		const dashboardUrl = new URL("/dashboard", request.url);
		return NextResponse.redirect(dashboardUrl);
	}

	return NextResponse.next();
}
