import ConfigBasedForm from "@/components/forms/dynamic";
import Modal from "..";

import { UpdateTaskFormConfigType } from "@/constants/forms/tasks";

export default function EditTaskModal({ isOpen, task, closeModalEvent }) {
	return isOpen ? (
		<Modal title={"Edit Task something"} closeModal={closeModalEvent}>
			<div className="flex flex-col gap-2 items-center">
				<div className="w-full flex flex-col gap-4 rounded-xl bg-[#FDFDFD] border border-gray-300 p-6 ">
					<ConfigBasedForm currentformType={UpdateTaskFormConfigType} />
				</div>
			</div>
		</Modal>
	) : null;
}
