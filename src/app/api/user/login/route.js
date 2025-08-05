import { cookies } from "next/headers";

import {
	BadRequestStatusType,
	sendAPIResponse,
	SuccessStatusType,
	UnAuthorisedStatusType,
} from "@/constants/apis";
import { loginFormConfig } from "@/constants/forms/users";
import Users from "@/models/users";
import { sanitizeUser } from "@/utils/mongoose";
import generateToken from "@/utils/token";
import connectToDatabase from "@/lib/mongodb";
export async function POST(req) {
	try {
		var request = await req.json();
		let requirements = loginFormConfig?.fields?.map((field) => {
			return { id: field.id, unique: field.unique || false };
		});

		let userData = {};
		requirements.forEach(({ id }) => (userData[id] = request[id] || null));
		await connectToDatabase();

		let user = await Users.findOne(userData);
		if (user) {
			user = sanitizeUser(user);
			const token = await generateToken(user);
			(await cookies()).set({
				name: "auth_token",
				value: token,
				httpOnly: true,
				path: "/",
				secure: true,
				maxAge: 60 * 60 * 24 * 7,
			});
			(await cookies()).set({
				name: "user-details",
				value: JSON.stringify(user),
				httpOnly: true,
				path: "/",
				secure: true,
				maxAge: 60 * 60 * 24 * 7,
			});
			return sendAPIResponse({
				status: SuccessStatusType,
				message: "Successfully logged in.",
				data: { token },
			});
		} else {
			return sendAPIResponse({
				status: UnAuthorisedStatusType,
				message: "Invalid Credentials",
			});
		}
	} catch (err) {
		console.log(err);
		return sendAPIResponse({
			status: BadRequestStatusType,
			message: "Something went wrong",
		});
	}
}
