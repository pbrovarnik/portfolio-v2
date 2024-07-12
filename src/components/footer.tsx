import me from '@assets/profile-photo.jpg';
import Socials from './socials';

export default function Footer() {
	return (
		<footer className="max-w-md pb-16 text-sm sm:pb-0 grid grid-rows-2 lg:grid-rows-1 grid-cols-[max-content_1fr] gap-x-3">
			<div className="w-16 h-16 overflow-hidden rounded-full flex items-center justify-center col-span-1 row-span-1">
				<img alt="image of me" loading="lazy" width="100%" height="100%" decoding="async" src={me} className="w-full h-full object-cover object-top" />
			</div>
			<p className="group">
				Thanks for making it to the bottom! If you like what you see, let's{' '}
				<a
					rel="noreferrer noopener"
					aria-label="opens email client"
					className="underline-effect group-hover:before:opacity-100 font-medium text-foreground focus-visible:text-foreground group-hover:text-purple-700 dark:group-hover:text-purple-500 uppercase transition-colors"
					href="mailto:pasha.brovarnik@gmail.com">
					connect
				</a>{' '}
				and create something amazing together!
			</p>
			<div className="col-start-1 col-span-2 lg:hidden">
				<Socials />
			</div>
		</footer>
	);
}