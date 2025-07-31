import { Schema, models, model } from "mongoose";
const UsersSchema = new Schema(
	{
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

UsersSchema.set("toJSON", {
	transform: function (doc, ret) {
		delete ret.password;
		return ret;
	},
});
const Users = models.Users || model("Users", UsersSchema);
export default Users;
