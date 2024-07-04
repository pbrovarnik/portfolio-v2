type Props = {
	href: string;
	name: string;
};

export default function NavItem({ href, name }: Props) {
	return (
		<li>
			<a href={`#${href}`} className="nav-item group">
				<span className="nav-text text-xs font-bold uppercase tracking-widest">{name}</span>
			</a>
		</li>
	);
}
