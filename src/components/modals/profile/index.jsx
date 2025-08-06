import Modal from "..";
import { formatDate } from "@/utils/dates";
import ConfigBasedForm from "@/components/forms/dynamic";
import { UpdateFormConfigType } from "@/constants/forms/users";
import TodoStats from "@/components/ui/stats";
export default function ProfileModal({
	closeModalEvent,
	userDetails,
	taskStats = {},
}) {
	console.log({ userDetails });
	return (
		<>
			<Modal title={"Profile"} closeModal={closeModalEvent}>
				<div className="flex flex-col gap-4 rounded-xl bg-[#FDFDFD] border border-gray-300 p-6 ">
					<div className="flex items-center gap-4">
						<div className="bg-primary/50 h-[55px] w-[55px] flex justify-center items-center rounded-full">
							L
						</div>
						<div className="flex flex-col gap-1">
							<div className="bg-[#FFD02326] w-fit text-xs px-2 py-1 text-[#C09802] rounded-xl">
								{userDetails?.role == "superuser"
									? "Super Admin"
									: userDetails?.role}
							</div>
							<div className="text-[#848D9A] text-xs">
								Joined on : {formatDate(userDetails?.createdAt)}
							</div>
						</div>
					</div>

					<ConfigBasedForm
						currentformType={UpdateFormConfigType}
						formPreFillData={{
							fullname: userDetails?.fullname,
							email: userDetails?.email,
						}}
					/>

					<TodoStats {...taskStats} />
				</div>
			</Modal>
		</>
	);
}
