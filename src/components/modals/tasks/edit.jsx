import ConfigBasedForm from "@/components/forms/dynamic";
import Modal from "..";

import { UpdateTaskFormConfigType } from "@/constants/forms/tasks";

export default function EditTaskModal({
	isOpen,
	closeModalEvent,
	currentValue = {},
}) {
	return isOpen ? (
		<Modal title={"Edit Task"} closeModal={closeModalEvent}>
			<div className="flex flex-col gap-2 items-center">
				<div className="w-full flex flex-col gap-4">
					<ConfigBasedForm
						isModalVersion={true}
						currentformType={UpdateTaskFormConfigType}
						formPreFillData={currentValue}
					/>
				</div>
			</div>
		</Modal>
	) : null;
}
