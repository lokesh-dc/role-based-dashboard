import PageLayout from "@/components/layouts";
import ServerAPIrequest from "@/utils/requests/server";
export default async function DashboardPage() {
	const props = await getPageDetails();
	return <PageLayout {...props} />;
}

async function getPageDetails() {
	try {
		const response = await ServerAPIrequest({
			api: `${process.env.NEXT_PUBLIC_API_PUBLIC_URL}/api/todos`,
		});
		if (response?.success) {
			return {
				data: response?.data,
			};
		}

		return {
			data: [],
		};
	} catch (err) {
		return {
			data: [],
		};
	}
}
