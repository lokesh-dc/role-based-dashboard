export function formatDate(date) {
	let formatted = new Date(date).toLocaleString("en-IN", {
		timeZone: "Asia/Kolkata",
		hour12: false,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	});

	formatted = formatted?.split(",").join("");
	return formatted;
}
