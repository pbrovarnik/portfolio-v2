import { navItemsList } from '../constants';
import NavItem from './nav-item';

export default function NavItems() {
	return (
		<nav id="nav-items" className="nav hidden lg:block pointer-events-none" aria-label="Jump links">
			<ul className="mt-16 w-max">
				{navItemsList.map((item, idx) => (
					<NavItem key={idx} {...item} />
				))}
			</ul>
		</nav>
	);
}
