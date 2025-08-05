"use client";
import { useState } from "react";
import FormFieldWrapper from "../helpers/form/fields";
import InputField from "../helpers/form/fields/input";
import NextImageCompo from "../images";
import ProfileModal from "../modals/profile";

export default function NavigationBar({ userDetails }) {
	const [isProfileSectionOpen, toggleProfileSection] = useState(false);
	const [userDetailsData, setUserDetailsData] = useState(userDetails);

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
					<div
						onClick={() => toggleProfileSection(!isProfileSectionOpen)}
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
				</div>
			</div>
			{isProfileSectionOpen ? (
				<ProfileModal
					closeModalEvent={() => toggleProfileSection(!isProfileSectionOpen)}
					userDetails={userDetailsData}
				/>
			) : null}
		</>
	);
}
