export type SocialProps = {
	Icon: () => JSX.Element;
	href: string;
	name: string;
};

export default function Social({ Icon, href, name }: SocialProps) {
	return (
		<li className="shrink-0 text-xs">
			<a className="group" href={href} aria-label={`${name} (opens in a new tab)`}>
				<div className="rounded-full p-[10px] group-hover:bg-foreground/5 dark:group-hover:bg-foreground/10">
					<Icon />
				</div>
			</a>
		</li>
	);
}
