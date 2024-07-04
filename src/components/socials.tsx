import Social, { SocialProps } from './social';
import GithubIcon from './github-icon';
import LinkedInIcon from './linked-in-icon';

const socialsList: SocialProps[] = [
	{ href: 'https://github.com/pbrovarnik', name: 'Github', Icon: GithubIcon },
	{ href: 'https://linkedin.com/in/pasha-brovarnik', name: 'LinkedIn', Icon: LinkedInIcon },
];
export default function Socials() {
	return (
		<ul className="mt-4 flex items-center gap-1" aria-label="Social media">
			{socialsList.map((item, idx) => (
				<Social key={idx} {...item} />
			))}
		</ul>
	);
}
