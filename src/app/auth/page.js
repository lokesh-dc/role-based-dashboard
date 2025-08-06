import AuthForm from "@/components/forms/dynamic";
import NextImageCompo from "@/components/images";

export default function AuthPage() {
	return (
		<>
			<div className="h-[100vh] flex ">
				<div className="h-full w-1/2">
					<NextImageCompo
						classes="h-full object-cover"
						height={500}
						width={900}
						src="/auth-image.png"
					/>
				</div>
				<div className="h-full w-1/2 flex justify-center items-center">
					<div className="flex w-2/3 flex-col text-center">
						<div className="w-full flex justify-center">
							<NextImageCompo height={100} width={200} src="/gg-logo.png" />
						</div>
						<AuthForm />
					</div>
				</div>
			</div>
		</>
	);
}
