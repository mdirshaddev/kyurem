import 'src/styles/globals.css';

import { IChildProps } from 'src/types/react';

export default async function RootLayout({ children }: IChildProps) {
	return (
		<html lang="en">
			<head>
				<title>Kyurem</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
				<meta
					name="description"
					content="Google Drive clone build with Next.js and AWS Cloud Services"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
