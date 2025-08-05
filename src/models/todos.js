import mongoose, { Schema, models, model } from "mongoose";
const TaskSchema = new Schema(
	{
		title: { type: String },
		description: { type: String },
		due: { type: Date },
		completed: { type: Boolean, default: false },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const Tasks = models.Tasks || model("Tasks", TaskSchema);
export default Tasks;
