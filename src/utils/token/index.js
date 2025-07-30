var jwt = require("jsonwebtoken");

export default async function generateToken(data) {
	try {
		var token = jwt.sign(data, process.env.NEXT_PUBLIC_API_JWT_PASSWORD);
		return token;
	} catch (err) {
		console.log("Token Signing Error : ", err);
	}
}
