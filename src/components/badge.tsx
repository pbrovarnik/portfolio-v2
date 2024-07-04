import { PropsWithChildren } from 'react';

export default function Badge({ children }: PropsWithChildren) {
	return (
		<div className="inline-flex items-center rounded-full border-none bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-purple-500">
			{children}
		</div>
	);
}
