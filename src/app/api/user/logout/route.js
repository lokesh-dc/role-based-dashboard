import { cookies } from "next/headers";

import { sendAPIResponse, SuccessStatusType } from "@/constants/apis";

export async function GET(request) {
	(await cookies()).set({
		name: "auth_token",
		value: null,
	});
	(await cookies()).set({
		name: "user-details",
		value: null,
	});

	return sendAPIResponse({
		status: SuccessStatusType,
		message: "Success",
	});
}
