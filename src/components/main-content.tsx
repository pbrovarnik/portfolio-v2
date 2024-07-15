import Footer from './footer';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import { RefObject, useEffect, useMemo, useRef } from 'react';
import LinkButton from './link-button';

type SectionType = {
	buttonHref?: string;
	buttonText?: string;
	Component: () => JSX.Element;
	id: string;
	name: string;
	ref: RefObject<HTMLElement>;
};

export default function MainContent() {
	const aboutRef = useRef<HTMLElement>(null);
	const experienceRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLElement>(null);

	const sections: SectionType[] = useMemo(
		() => [
			{ Component: About, id: 'about', name: 'About', ref: aboutRef },
			{
				buttonHref: 'https://drive.google.com/file/d/1yfkB5fom0jgZE-uNcv0C4oOxF2qp78H9/view',
				buttonText: 'View resume',
				Component: Experience,
				id: 'experience',
				name: 'Experience',
				ref: experienceRef,
			},
			{
				// buttonHref: '',
				// buttonText: 'View more projects',
				Component: Projects,
				id: 'projects',
				name: 'Projects',
				ref: projectsRef,
			},
		],
		[]
	);

	useEffect(() => {
		if (!aboutRef.current || !experienceRef.current || !projectsRef.current) return;

		const observerOptions: IntersectionObserverInit = {
			rootMargin: '-50% 0% -50% 0%',
		};
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				const navElement = document.querySelector(`a[href="#${entry.target.id}"]`);
				if (!navElement) break;

				if (entry.isIntersecting && !navElement.classList.contains('active')) {
					document.querySelectorAll('.nav-item').forEach((item) => {
						if (item.classList.contains('active')) item.classList.remove('active');
					});

					navElement.classList.add('active');
				}
			}
		}, observerOptions);

		[aboutRef.current, experienceRef.current, projectsRef.current].forEach((element) => observer.observe(element));

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
			{sections.map(({ buttonHref, buttonText, Component, id, name, ref }, idx) => (
				<section key={idx} ref={ref} id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
					<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
						<h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">{name}</h2>
					</div>
					<Component />
					{buttonHref && buttonText && (
						<div className="mt-12">
							<LinkButton href={buttonHref}>{buttonText}</LinkButton>
						</div>
					)}
				</section>
			))}
			<Footer />
		</main>
	);
}
