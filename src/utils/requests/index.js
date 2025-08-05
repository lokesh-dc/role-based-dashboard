import axios from "axios";

export default async function APIrequest({
	method = "get",
	api,
	data = {},
	headers = {},
	params = {},
}) {
	try {
		const response = await axios({
			method,
			url: api,
			data,
			headers,
			params,
		});

		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error;
	}
}
