import {
	BadRequestStatusType,
	sendAPIResponse,
	SuccessStatusType,
} from "@/constants/apis";
import connectToDatabase from "@/lib/mongodb";
import Tasks from "@/models/todos";
import { verifyJWT } from "@/utils/token";

export async function POST(req) {
	const token = req.cookies.get("auth_token")?.value;
	var request = await req.json();
	try {
		const { _id: user } = await verifyJWT(token);
		const { title = "", description = "", due } = request;
		await connectToDatabase();
		const tasks = await Tasks.create({ title, description, user, due });
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
