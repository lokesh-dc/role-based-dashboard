import Link from "next/link";
import NextImageCompo from "../images";

export default function PrimaryButton({
	clickEvent = () => {},
	isLink = false,
	title = "",
	linkTarget = "",
	type = "button",
	disabled = false,
	buttonType = "primary",
	icons = {},
	classes = "",
	padding = "px-7 py-2",
}) {
	const Tag = isLink ? Link : "button";
	const props = isLink ? { href: linkTarget } : { onClick: clickEvent, type };

	const buttonClasses =
		buttonType == "primary" ? "bg-primary" : "bg-[#E7F7EF] text-[#097C44]";

	return (
		<Tag
			className={`${buttonClasses} ${padding} rounded-lg ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			} ${classes}`}
			{...props}
		>
			{icons?.leftIcon ? <NextImageCompo {...icons?.leftIcon} /> : null}
			{title}
		</Tag>
	);
}
