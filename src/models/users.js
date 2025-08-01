import { Schema, models, model } from "mongoose";
const UsersSchema = new Schema(
	{
		fullname: { type: String },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: {
			type: String,
			enum: ["user", "superuser"],
			default: "user",
		},
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
