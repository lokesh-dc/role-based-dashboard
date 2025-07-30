export const ConflictStatusType = "ConflictStatusType";
export const SuccessStatusType = "SuccessStatusType";
export const BadRequestStatusType = "BadRequestStatusType";
export const UnAuthorisedStatusType = "UnAuthorisedStatusType";

export const getStatusCodes = {
	[ConflictStatusType]: 409,
	[SuccessStatusType]: 200,
	[BadRequestStatusType]: 400,
	[UnAuthorisedStatusType]: 401,
};
import { NextResponse } from "next/server";

export const sendAPIResponse = ({
	data = null,
	message = "Success",
	status = SuccessStatusType,
	error = null,
}) => {
	let statusCode = getStatusCodes[status] || 400;

	return NextResponse.json(
		{
			success: statusCode >= 200 && statusCode < 300,
			message,
			data,
			error,
		},
		{ status: statusCode }
	);
};
