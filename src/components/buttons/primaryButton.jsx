import Link from "next/link";

export default function PrimaryButton({
	clickEvent = () => {},
	isLink = false,
	title = "",
	linkTarget = "",
	type = "button",
	disabled = false,
	buttonType = "primary",
}) {
	const Tag = isLink ? Link : "button";
	const props = isLink ? { href: linkTarget } : { onClick: clickEvent, type };

	const buttonClasses =
		buttonType == "primary" ? "bg-primary" : "bg-[#E7F7EF] text-[#097C44]";

	return (
		<Tag
			className={`${buttonClasses} py-2 px-7 rounded-lg ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
			{...props}
		>
			{title}
		</Tag>
	);
}
