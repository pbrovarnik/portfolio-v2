export type SocialProps = {
	Icon: () => JSX.Element;
	href: string;
	name: string;
};

export default function Social({ Icon, href, name }: SocialProps) {
	return (
		<li className="shrink-0 text-xs">
			<a className="group" href={href} target="_blank" rel="noreferrer noopener" aria-label={`${name} (opens in a new tab)`}>
				<div className="pulse rounded-full p-[10px] group-hover:bg-foreground/5 dark:group-hover:bg-foreground/15">
					<Icon />
				</div>
			</a>
		</li>
	);
}
