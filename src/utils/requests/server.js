import { cookies } from "next/headers";
import APIrequest from ".";

export default async function ServerAPIrequest(props) {
	const token = (await cookies()).get("auth_token")?.value;

	try {
		const response = await APIrequest({
			...props,
			headers: {
				...(props?.headers || {}),
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		console.error("API Error:", error);
		throw error;
	}
}
