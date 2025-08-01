import { NextResponse } from "next/server";

export const config = {
	matcher: ["/dashboard/:path*"],
};
export function middleware(request) {
	const isLoggedIn = request.cookies.get("auth_token");
	const url = request.nextUrl.clone();

	if (!isLoggedIn) {
		url.pathname = "/auth";

		return NextResponse.redirect(url);
	}
	return NextResponse.next();
}
