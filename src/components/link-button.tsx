import { PropsWithChildren } from 'react';
import ExternalLinkIcon from './external-link-icon';

type Props = {
	href: string;
	showIcon?: boolean;
} & PropsWithChildren;

export default function LinkButton({ children, href, showIcon = true }: Props) {
	return (
		<a
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`${children} (opens in a new tab)`}
			href={href}
			className="group/link flex items-center w-fit font-medium leading-tight text-foreground hover:underline underline-offset-4 decoration-purple-700 dark:decoration-purple-500 decoration-2">
			{children}
			{showIcon && (
				<div>
					<ExternalLinkIcon />
				</div>
			)}
		</a>
	);
}
