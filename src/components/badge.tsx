import { PropsWithChildren } from 'react';

export default function Badge({ children }: PropsWithChildren) {
	return (
		<div className="grid select-none items-center whitespace-nowrap rounded-md bg-purple-500/15 py-1 px-2 text-xs font-semibold text-purple-700 border-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-purple-500">
			<span>{children}</span>
		</div>
	);
}
