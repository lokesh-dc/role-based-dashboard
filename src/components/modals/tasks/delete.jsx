import { formatDate } from "@/utils/dates";
import Modal from "..";
import PrimaryButton from "@/components/buttons/primaryButton";

export default function DeleteTaskModal({
	isOpen,
	closeModalEvent,
	currentValue = {},
}) {
	return isOpen ? (
		<Modal
			isCenterVersion={true}
			title={"Delete Task"}
			closeModal={closeModalEvent}
		>
			<div className="flex flex-col gap-2 items-center">
				<div className="w-full flex flex-col gap-4">
					<div className="flex flex-col gap-1 border border-secondary-alfa p-3 rounded-md w-full">
						<p className="font-bold">{currentValue?.title}</p>
						<p className="text-secondary">{currentValue?.description}</p>
						{/* <p>{formatDate(currentValue?.due)}</p> */}
					</div>
					<div className="flex gap-3 justify-end">
						<PrimaryButton
							buttonType="secondary"
							title="Cancel"
							clickEvent={closeModalEvent}
						/>
						<PrimaryButton isDangerVersion={true} title="Yes" />
					</div>
				</div>
			</div>
		</Modal>
	) : null;
}
