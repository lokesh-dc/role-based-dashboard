import { SignJWT } from "jose";
import { jwtVerify } from "jose";

export default async function generateToken(data) {
	try {
		const secret = new TextEncoder().encode(
			process.env.NEXT_PUBLIC_API_JWT_PASSWORD
		);
		return await new SignJWT({ ...data, _id: data?._id.toString() })
			.setProtectedHeader({ alg: "HS256" })
			.setIssuedAt()
			.setExpirationTime("7d")
			.sign(secret);
	} catch (err) {
		console.log("Token Signing Error : ", err);
		return null;
	}
}

export async function verifyJWT(token) {
	try {
		const secret = new TextEncoder().encode(
			process.env.NEXT_PUBLIC_API_JWT_PASSWORD
		);
		const { payload } = await jwtVerify(token, secret, {
			algorithms: ["HS256"],
		});
		return payload;
	} catch (err) {
		console.log({ err });
		return {};
	}
}
