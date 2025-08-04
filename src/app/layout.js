import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600"],
	subsets: ["latin"],
	display: "swap", // Ensures text visibility during font loading
	variable: "--font-poppins", // Optional: for use with CSS variables
});

export const metadata = {
	title: "Greedygame | Home",
	description: "A organizer app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased ${poppins.className}`}>{children}</body>
		</html>
	);
}
