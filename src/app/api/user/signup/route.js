import { cookies } from "next/headers";

import {
	BadRequestStatusType,
	ConflictStatusType,
	sendAPIResponse,
	SuccessStatusType,
} from "@/constants/apis";
import { signupFormConfig } from "@/constants/forms/users";
import connectToDatabase from "@/lib/mongodb";
import Users from "@/models/users";
import { sanitizeUser } from "@/utils/mongoose";
import generateToken from "@/utils/token";
export async function POST(req) {
	try {
		var request = await req.json();
		let requirements = signupFormConfig?.fields?.map((field) => {
			return { id: field.id, unique: field.unique || false };
		});

		let userCreationData = {};
		requirements.forEach(
			({ id }) => (userCreationData[id] = request[id] || null)
		);

		let uniqueFields = requirements
			?.filter(({ unique }) => unique == true)
			.map(({ id }) => ({ [id]: userCreationData[id] }));
		await connectToDatabase();
		if (uniqueFields?.length) {
			const users = await Users.findOne({ $or: uniqueFields });
			if (users) {
				return sendAPIResponse({
					status: ConflictStatusType,
					message:
						"Seems like you are already registerd with us. Please Sign in.",
				});
			}
		}
		let user = await Users.create(userCreationData);
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

		return sendAPIResponse({
			status: SuccessStatusType,
			message: "Signed up scuccessfully.",
			data: { token },
		});
	} catch (err) {
		console.log(err);
		return sendAPIResponse({
			status: BadRequestStatusType,
			message: "Something went wrong",
		});
	}
}
