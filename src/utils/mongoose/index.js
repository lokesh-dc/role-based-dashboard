export function sanitizeUser(user) {
	if (!user) return null;
	const userObj = typeof user.toObject === "function" ? user.toObject() : user;
	const { password, resetToken, createdAt, updatedAt, ...safeUser } = userObj;

	return safeUser;
}
