import { useEffect } from 'react';
import MainContent from '@components/main-content';
import SideBar from '@components/sidebar';
import Hero from '@components/hero';
import { isTouchDevice } from './utils/utils';

export default function App() {
	useEffect(() => {
		const resetUrlHashOnRefresh = () => {
			if (!window.performance) return;

			const navigationType = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
			if (navigationType.type === 'reload') {
				window.scrollTo(0, 0);
				window.history.replaceState(null, 'Pasha Brovarnik', '/');
			}
		};

		resetUrlHashOnRefresh();
	}, []);

	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
			{!isTouchDevice() && <Hero />}
			<div className="lg:flex lg:justify-between lg:gap-4">
				<SideBar />
				<MainContent />
			</div>
		</div>
	);
}
