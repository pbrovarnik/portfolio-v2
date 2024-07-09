import { useEffect, useRef } from 'react';
import ThemeToggle from './theme-toggle';

export default function HeaderTitle() {
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
		<div ref={headerTitleRef} id="header-title" className="lg:opacity-0">
			<div className="flex items-center gap-2">
				<h1 className="text-4xl font-bold cursor-pointer tracking-tight sm:text-5xl" onClick={handleTitleClick}>
					Pasha Brovarnik
				</h1>
				<ThemeToggle />
			</div>
			<h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Full-stack Engineer</h2>
			<p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>
		</div>
	);
}
