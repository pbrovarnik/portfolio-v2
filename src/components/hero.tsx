import { useEffect, useRef } from 'react';
import { getBrowser, setOpacityOnHeroText, setPointerEventsOnHeaderTitleText, setTranslateXOnHeroText } from '../utils/utils';
import HeaderTitle from './header-title';

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
				setTranslateXOnHeroText(scrollingElement, textContainer);
				setOpacityOnHeroText(headerTitleElement, textContainer);
			}
		};

		const observerOptions = { threshold: 0 };
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					setPointerEventsOnHeaderTitleText(headerTitleElement);

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
		<div ref={scrollingElementRef} className="relative h-[calc(130vh_-_6rem)] hidden lg:block lg:py-24">
			<div className="fixed inset-0 flex items-center justify-center">
				<div ref={textContainerRef} className="scale-[2.0] transition-[transform] duration-500 ease-out">
					<HeaderTitle showThemeToggle={false} />
				</div>
			</div>
		</div>
	);
}
