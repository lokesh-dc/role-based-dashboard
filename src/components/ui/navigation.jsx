"use client";
import React, { useState } from "react";
import FormFieldWrapper from "../helpers/form/fields";
import InputField from "../helpers/form/fields/input";
import NextImageCompo from "../images";
import ProfileModal from "../modals/profile";
import APIrequest from "@/utils/requests";

export default function NavigationBar({ userDetails, taskStats = {} }) {
	const [isProfileSectionOpen, toggleProfileSection] = useState(false);
	const [isProfileDropDownOpen, toggleProfileDropDown] = useState(false);

	return (
		<>
			<div className="p-5 flex gap-2 items-center border-b-2 border-secondary-alfa justify-between w-full">
				<div className="flex gap-2 items-center">
					<NextImageCompo src="/gg-logo.png" height={20} width={150} />
					<FormFieldWrapper>
						<div className="flex gap-1 items-center px-3 rounded bg-[#FAFAFA] focus:outline-none">
							<NextImageCompo src="/icons/search.svg" height={18} width={18} />
							<InputField isNoBorderVariant={true} />
						</div>
					</FormFieldWrapper>
				</div>
				<div className="flex gap-4">
					<NextImageCompo
						height={24}
						width={24}
						src="/icons/notification.svg"
					/>
					<div className="relative">
						<div
							onClick={() => toggleProfileDropDown(!isProfileDropDownOpen)}
							className="flex items-center gap-1 p-2 border border-secondary-alfa rounded-md"
						>
							<div className="flex justify-center items-center h-[24px] w-[24px] rounded-full bg-primary">
								{userDetails?.fullname[0]}
							</div>
							<NextImageCompo
								classes="h-[15px] w-[20px] object-contain"
								src="/icons/down-arrow.png"
								height={20}
								width={20}
							/>
						</div>
						{isProfileDropDownOpen ? (
							<div className="absolute overflow-hidden top-full right-0 w-[200px] rounded-3xl bg-white shadow-2xl flex flex-col border border-secondary-alfa">
								{[
									{
										title: "Profile",
										icon: "/icons/profile.svg",
										clickEvent: () => toggleProfileSection(true),
									},
									{
										title: "Logout",
										icon: "/icons/logout.svg",
										clickEvent: async () => {
											await APIrequest({ api: "/api/user/logout" });
											window.location.reload();
										},
									},
								].map(({ title, icon, clickEvent }, idx) => (
									<React.Fragment key={idx}>
										<div
											onClick={() => {
												clickEvent();
												toggleProfileDropDown(!isProfileDropDownOpen);
											}}
											className={`p-4 cursor-pointer text-secondary flex items-center gap-1 justify-start hover:bg-secondary-alfa`}
										>
											<NextImageCompo
												style={{ height: "20px", width: "20px" }}
												src={icon}
												height={20}
												width={20}
											/>
											{title}
										</div>
										{idx == 0 ? <hr className="border-secondary-alfa" /> : null}
									</React.Fragment>
								))}
							</div>
						) : null}
					</div>
				</div>
			</div>
			{isProfileSectionOpen ? (
				<ProfileModal
					closeModalEvent={() => toggleProfileSection(!isProfileSectionOpen)}
					userDetails={userDetails}
					taskStats={taskStats}
				/>
			) : null}
		</>
	);
}
