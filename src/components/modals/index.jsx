export default function Modal({
	closeModal = () => {},
	children,
	title = "",
	isCenterVersion = false,
}) {
	const isCenterVersionStyles = {
		container: isCenterVersion ? "justify-center items-center" : "justify-end",
		dialog: isCenterVersion
			? "h-fit rounded-lg w-1/3 slide-in-top"
			: "h-full w-1/3 slide-in",
	};

	return (
		<div
			className={`fixed flex ${isCenterVersionStyles?.container} gap-3 h-[100vh] top-0 right-0 min-w-[100vw] bg-[rgba(0,0,0,0.5)]`}
		>
			<div
				className={`bg-white flex flex-col gap-5 shadow-xl ${isCenterVersionStyles?.dialog} p-5`}
			>
				<div className="flex justify-between">
					<h1 className="text-2xl text-bold">{title}</h1>
					<span
						onClick={closeModal}
						className="text-secondary text-2xl cursor-pointer"
					>
						&#10005;
					</span>
				</div>
				{children}
			</div>
		</div>
	);
}
