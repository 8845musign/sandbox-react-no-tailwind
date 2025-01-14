import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<NuqsAdapter>{children}</NuqsAdapter>
			</body>
		</html>
	);
}
