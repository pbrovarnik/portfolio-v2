import { useEffect, useRef } from 'react';
import { getBrowser } from '../utils/utils';
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
				setScaleOnHeroText(textContainer, scale);
			} else {
				setTranslateXOnHeroText(scrollingElement, textContainer);
				setOpacityOnHeroText(headerTitleElement, textContainer);
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
		<div ref={scrollingElementRef} className="relative h-[calc(130vh_-_6rem)] hidden lg:block lg:py-24">
			<div className="fixed inset-0 flex items-center justify-center">
				<div
					ref={textContainerRef}
					className="scale-[2.0]"
					style={{
						transition: 'transform 0.3s ease-out, scale 0.1s ease-out',
					}}>
					<HeaderTitle showThemeToggle={false} />
				</div>
			</div>
		</div>
	);
}

function setScaleOnHeroText(textContainer: HTMLDivElement, scale: number) {
	textContainer.style.transform = `scale(${scale})`;
}

function setTranslateXOnHeroText(scrollingElement: HTMLDivElement, textContainer: HTMLDivElement) {
	const scrollingElementWidth = scrollingElement.offsetWidth;
	const containerWidth = textContainer.offsetWidth;

	const maxTranslateX = (scrollingElementWidth - containerWidth) / 2;
	textContainer.style.transform = `translateX(-${maxTranslateX}px)`;
}

function setOpacityOnHeroText(headerTitleElement: HTMLDivElement, textContainer: HTMLDivElement) {
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
