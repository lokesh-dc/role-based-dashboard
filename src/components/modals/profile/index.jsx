import Modal from "..";
import { formatDate } from "@/utils/dates";
import ConfigBasedForm from "@/components/forms/dynamic";
import { UpdateFormConfigType } from "@/constants/forms/users";
import TodoStats from "@/components/ui/stats";
import React from "react";
import NextImageCompo from "@/components/images";
import APIrequest from "@/utils/requests";
export default function ProfileModal({
	closeModalEvent,
	userDetails,
	taskStats = {},
}) {
	console.log({ userDetails });
	return (
		<>
			<Modal title={"Profile"} closeModal={closeModalEvent}>
				<div className="flex flex-col gap-2 items-center">
					<div className="w-full flex flex-col gap-4 rounded-xl bg-[#FDFDFD] border border-gray-300 p-6 ">
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

						<hr className="border border-secondary-alfa" />
						<TodoStats {...taskStats} />
					</div>
					{[
						{
							title: "Logout",
							icon: "/icons/logout.svg",
							clickEvent: async () => {
								await APIrequest({ api: "/api/user/logout" });
								window.location.reload();
							},
						},
					].map(({ title, icon, clickEvent }, idx) => (
						<div
							key={idx}
							onClick={() => {
								clickEvent();
							}}
							className={`rounded-xl w-full cursor-pointer p-4 text-secondary flex  items-center gap-1 justify-center hover:bg-secondary-alfa`}
						>
							<NextImageCompo
								style={{ height: "20px", width: "20px" }}
								src={icon}
								height={20}
								width={20}
							/>
							{title}
						</div>
					))}
				</div>
			</Modal>
		</>
	);
}
