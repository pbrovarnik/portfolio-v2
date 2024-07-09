import MainContent from '@components/main-content';
import SideBar from '@components/sidebar';
import Hero from '@components/hero';
import { useEffect } from 'react';

export default function App() {
	useEffect(() => {
		if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
	}, []);

	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
			<Hero />
			<div className="lg:flex lg:justify-between lg:gap-4">
				<SideBar />
				<MainContent />
			</div>
		</div>
	);
}
