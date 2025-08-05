var jwt = require("jsonwebtoken");
export default async function generateToken(data) {
	try {
		return jwt.sign(data, process.env.NEXT_PUBLIC_API_JWT_PASSWORD);
	} catch (err) {
		console.log("Token Signing Error : ", err);
		return null;
	}
}

export async function verifyJWT(token) {
	try {
		const payload = jwt.verify(token, process.env.NEXT_PUBLIC_API_JWT_PASSWORD);
		return payload;
	} catch (err) {
		console.log("Token Verifying Error : ", err);
		return {};
	}
}
