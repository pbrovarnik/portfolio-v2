import { useEffect, useRef } from 'react';
import { isTouchDevice } from '../utils/utils';
import HeaderTitle from './header-title';

export default function SidebarHeader() {
	const headerTitleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (!headerTitleRef.current) return;

			const headerTitleElement = headerTitleRef.current;

			const observerOptions: IntersectionObserverInit = {
				threshold: 0,
				rootMargin: '0px 0px -50% 0px',
			};
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && window.getComputedStyle(headerTitleElement).opacity === '0') {
						headerTitleElement.style.opacity = '1';
						observer.unobserve(headerTitleElement);
					}
				});
			}, observerOptions);

			observer.observe(headerTitleElement);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleTitleClick = () => {
		window.history.replaceState(null, 'Pasha Brovarnik', '/');
		window.scrollTo(0, 0);
	};

	return (
		<div ref={headerTitleRef} id="header-title" className={`${isTouchDevice() ? '' : 'lg:opacity-0'}`}>
			<HeaderTitle onTitleClick={handleTitleClick} showThemeToggle />
		</div>
	);
}
