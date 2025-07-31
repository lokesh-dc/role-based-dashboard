import Link from "next/link";

export default function PrimaryButton({
	clickEvent = () => {},
	isLink = false,
	title = "",
	linkTarget = "",
	type = "button",
	disabled = false,
}) {
	const Tag = isLink ? Link : "button";
	const props = isLink ? { href: linkTarget } : { onClick: clickEvent, type };

	return (
		<Tag
			className={`bg-primary py-2 px-7 rounded-lg primary-button ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
			{...props}
		>
			{title}
		</Tag>
	);
}
