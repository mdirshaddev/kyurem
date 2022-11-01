function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
	return fn as (arg: T) => R;
}

const WelcomeText = asyncComponent(async () => {
	return (
		<div className="w-full h-screen bg-white dark:bg-black">
			<div className="flex flex-col items-center justify-center h-full">
				<div className="w-64 h-auto p-4 rounded-md ring-2 ring-green-500">
					<div className="text-black dark:text-white font-extrabold underline text-center cursor-pointer">
						Kyurem
					</div>
					<div className="text-center text-black dark:text-white font-bold">
						Google Drive clone build with Next.js and AWS Cloud Services
					</div>
				</div>
			</div>
		</div>
	);
});

export default WelcomeText;
