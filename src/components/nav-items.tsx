import NavItem from './nav-item';

const navItemsList = [
	{ href: 'about', name: 'About' },
	{ href: 'experience', name: 'Experience' },
	{ href: 'projects', name: 'Projects' },
];

export default function NavItems() {
	return (
		<nav className="nav hidden lg:block" aria-label="Jump links">
			<ul className="mt-16 w-max">
				{navItemsList.map((item, idx) => (
					<NavItem key={idx} {...item} />
				))}
			</ul>
		</nav>
	);
}
