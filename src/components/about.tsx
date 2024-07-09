import { MouseEventHandler, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function About() {
	const captureDivRef = useRef<HTMLDivElement>(null);
	const overlayDivRef = useRef<HTMLDivElement>(null);

	const { theme } = useTheme();

	useEffect(() => {
		if (!captureDivRef.current || !overlayDivRef.current) return;

		// Clone child element
		const clonedChild = captureDivRef.current.children[0].cloneNode(true);

		// Append cloned child to overlay
		overlayDivRef.current.appendChild(clonedChild);
	}, []);

	const handleMouseMove: MouseEventHandler<HTMLDivElement> = ({ pageX, pageY }) => {
		if (!captureDivRef.current || !overlayDivRef.current) return;

		const x = pageX - captureDivRef.current?.offsetLeft;
		const y = pageY - captureDivRef.current?.offsetTop;

		overlayDivRef.current.style.setProperty('--glow-x', `${x}px`);
		overlayDivRef.current.style.setProperty('--glow-y', `${y}px`);
		overlayDivRef.current.style.setProperty('--glow-opacity', theme === 'dark' ? '.7' : '.9');
	};

	const handleMouseOut: MouseEventHandler<HTMLDivElement> = () => {
		if (!captureDivRef.current || !overlayDivRef.current) return;

		overlayDivRef.current.style.setProperty('--glow-opacity', '0');
	};

	return (
		<div ref={captureDivRef} className="glow-capture relative" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
			<div className="glow group font-medium flex flex-col flex-wrap items-center justify-center gap-6 rounded-md glow:text-glow md:flex-row md:items-start md:justify-between">
				<p>
					It all began in 2010 when I ventured into the world of tech to create processes for optimizing software quality. I quickly found myself diving headfirst into building automated solutions,
					aiming to bring fast and reliable development cycles to e-commerce corporations and analytics platforms. This journey has taken me from designing tools that ensure product reliability to now
					developing cutting-edge software products, always driven by a passion for innovation and problem-solving.
				</p>

				<p>
					Fast-forward to today, I've been privileged to be a founding engineer multiple times over, collaborating with talented teams to build foundational technology for early-stage start-ups. My
					recent roles have involved playing a pivotal role in the evolution of a vertical CRM and spearheading front-end architecture for a clinical trials platform.
				</p>

				<p>
					Currently, I'm focused on creating scalable and maintainable systems using a suite of modern frameworks. My expertise lies in bridging the gap between elegant design and robust engineering,
					ensuring that every product I build is both visually appealing and technically sound.
				</p>

				<p>Outside of coding, you can find me experimenting with new recipes, climbing at my local crag, or collecting stamps in my passport.</p>
			</div>
			<div ref={overlayDivRef} className="glow-overlay" />
		</div>
	);
}
