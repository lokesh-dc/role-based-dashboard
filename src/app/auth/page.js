import AuthForm from "@/components/forms/auth";
import NextImageCompo from "@/components/images";
import Link from "next/link";

export default function AuthPage() {
	return (
		<>
			<div className="md:p-8 h-[100vh] flex flex-col-reverse md:flex-row md:items-center">
				<div className="w-full bg-white md:bg-transparent shadow-2xl md:shadow-none md:w-1/2 h-[60%] short:h-[70%] md:h-full">
					<Link className="hidden md:flex" href={"/"}>
						Formify
					</Link>
					<div className="h-full flex md:items-center md:justify-center">
						<AuthForm />
					</div>
				</div>
				<div className="p-4 circle-green-gradient w-full md:w-1/2 rounded-none md:rounded-xl flex flex-col justify-between md:justify-center md:items-center h-[40%] short:h-[30%] md:h-full md:shadow-2xl">
					<Link className="flex md:hidden" href={"/"}>
						Formify
					</Link>
					<NextImageCompo
						classes="short:hidden"
						height={500}
						width={900}
						src="/demo-login.png"
					/>
					<p className="text-white text-md md:text-2xl">
						<span className="font-semibold">Formify</span> helps you build and
						share forms in seconds. Sign in to start creating.
					</p>
				</div>
			</div>
		</>
	);
}
