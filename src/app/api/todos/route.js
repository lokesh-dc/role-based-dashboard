import {
	BadRequestStatusType,
	sendAPIResponse,
	SuccessStatusType,
} from "@/constants/apis";
import connectToDatabase from "@/lib/mongodb";
import Tasks from "@/models/todos";
import { verifyJWT } from "@/utils/token";

export async function GET(req) {
	const token = req.cookies.get("auth_token")?.value;

	try {
		const { id: userId } = await verifyJWT(token);
		await connectToDatabase();
		const tasks = await Tasks.find({ userId }, { user: 0, __v: 0 });
		return sendAPIResponse({
			status: SuccessStatusType,
			message: "Success",
			data: tasks,
		});
	} catch (err) {
		console.log(err);
		return sendAPIResponse({
			status: BadRequestStatusType,
			message: "Something went wrong",
		});
	}

	return;
}
