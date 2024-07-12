import { PropsWithChildren } from 'react';
import ExternalLinkIcon from './external-link-icon';

type Props = {
	href: string;
	showIcon?: boolean;
} & PropsWithChildren;

export default function LinkButton({ children, href, showIcon = true }: Props) {
	return (
		<>
			<a target="_blank" rel="noreferrer noopener" aria-label={`${children} (opens in a new tab)`} href={href} className="group/link flex items-center w-fit font-medium leading-tight">
				<p className="underline-effect group-hover/link:before:opacity-100 text-foreground">{children}</p>
				{showIcon && (
					<div>
						<ExternalLinkIcon />
					</div>
				)}
			</a>
		</>
	);
}
