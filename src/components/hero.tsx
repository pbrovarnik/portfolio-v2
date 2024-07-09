import { useEffect, useRef } from 'react';
import { getBrowser } from '../utils/utils';

export default function Hero() {
	const scrollingElementRef = useRef<HTMLDivElement>(null);
	const textContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const headerTitleElement = document.querySelector('#header-title') as HTMLDivElement;
		const navListElement = document.querySelector('#nav-items') as HTMLDivElement;

		if (!scrollingElementRef.current || !textContainerRef.current || !headerTitleElement) return;
		const scrollingElement = scrollingElementRef.current;
		const textContainer = textContainerRef.current;

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const scale = 2 - (scrollY / window.innerHeight) * 4;

			if (scale > 1) {
				textContainer.style.transform = `scale(${scale})`;
			} else {
				const scrollingElementWidth = scrollingElement.offsetWidth;
				const containerWidth = textContainer.offsetWidth;

				const maxTranslateX = (scrollingElementWidth - containerWidth) / 2;
				textContainer.style.transform = `translateX(-${maxTranslateX}px)`;

				const headerRect = headerTitleElement.getBoundingClientRect();
				const textContainerRect = textContainer.getBoundingClientRect();

				if (headerRect.top <= textContainerRect.top && headerRect.bottom >= textContainerRect.top) {
					textContainer.style.opacity = '0';
					headerTitleElement.style.opacity = '1';
				}

				// currently not working because in the intersection observer display is set to none
				if (headerRect.top > textContainerRect.top && headerRect.top < textContainerRect.bottom) {
					textContainer.style.opacity = '1';
					headerTitleElement.style.opacity = '0';
				}
			}
		};
		const observerOptions = { threshold: 0 };
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					scrollingElement.style.display = 'none';
					navListElement.style.pointerEvents = 'auto';
					document.querySelectorAll('.nav-item').forEach((item) => item.classList.add('clickable'));

					if (getBrowser() === 'Safari') window.scrollTo(0, 0);
					document.documentElement.style.scrollBehavior = 'smooth';

					window.removeEventListener('scroll', handleScroll);
					window.removeEventListener('resize', handleScroll);
				}
			});
		}, observerOptions);

		observer.observe(scrollingElement);

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);

			window.history.scrollRestoration = 'manual';

			if (scrollingElement) observer.unobserve(scrollingElement);
		};
	}, []);

	return (
		<div ref={scrollingElementRef} className="relative h-[calc(130vh_-_6rem)] lg:block lg:py-24">
			<div className="fixed inset-0 flex items-center justify-center">
				<div
					ref={textContainerRef}
					className="scale-[2.0]"
					style={{
						transition: 'transform 0.3s ease-out, scale 0.1s ease-out',
					}}>
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pasha Brovarnik</h1>
					<h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Full-stack Engineer</h2>
					<p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>
				</div>
			</div>
		</div>
	);
}
