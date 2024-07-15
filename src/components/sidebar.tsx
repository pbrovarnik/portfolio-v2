import NavItems from './nav-items';
import SidebarHeader from './sidebar-header';
import Socials from './socials';

export default function SideBar() {
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<div>
				<SidebarHeader />
				<NavItems />
			</div>
			<Socials />
		</header>
	);
}
