import Modal from "..";

export default function ProfileModal({ closeModalEvent, userDetails }) {
	console.log({ userDetails });
	return (
		<>
			<Modal title={"Profile"} closeModal={closeModalEvent}>
				<div className="rounded-xl bg-secondary-alfa"></div>
			</Modal>
		</>
	);
}
