import chessPartyThumbnail from '@assets/chess-party-thumbnail.png';
import clothingShopThumbnail from '@assets/clothing-shop-thumbnail.png';
import moviePreviewThumbnail from '@assets/movie-preview-thumbnail.png';
import devDoodlesThumbnail from '@assets/dev-doodles-thumbnail.png';
import GithubIcon from '@components/github-icon';
import LinkedInIcon from '@components/linked-in-icon';
import { CardType } from '@components/card';
import { SocialProps } from '@components/social';

export const experienceData: CardType[] = [
	{
		badges: ['TypeScript', 'Node.js', 'Redwood.js', 'React', 'Prisma', 'Apollo', 'GraphQL', 'PostGres', 'Material-UI'],
		description: 'Led the charge in creating a vertical CRM product from scratch. From defining system architecture to integrating third-party services like Intuit, Monday.com, and Nylas.',
		href: 'https://www.getinkworks.com/',
		svgTextPrefix: '- InkWorks',
		title: 'Founding Engineer',
		workedDates: 'Sep 22 — Feb 24',
	},
	{
		badges: ['TypeScript', 'React', 'DevExpress', 'Playwright', 'REST', 'C#'],
		description: 'Crafted a comprehensive front-end architecture, established a reusable UI library, and built a robust automation framework with Playwright.',
		href: 'https://www.atreo.io/',
		svgTextPrefix: '- Atreo.io',
		title: 'Software Engineer',
		workedDates: 'Sep 21 — Sep 22',
	},
	{
		badges: ['TypeScript', 'SASS', 'Next.js', 'IoT', 'MQTT', 'Firebase'],
		description: 'Developed an e-commerce product that communicated with IoT devices via MQTT. From translating UX designs into interactive features to managing DevOps.',
		href: '',
		svgTextPrefix: '- Nanobar',
		title: 'Founding Engineer',
		workedDates: 'Mar21 — Sep 21',
	},
	{
		badges: ['TypeScript', 'Puppeteer', 'CI/CD', 'Three.js'],
		description: 'Implemented a serverless end-to-end framework, decreasing API dependency and lowering failure rates. Additionally, I designed a snapshot visual testing our Three.js system.',
		href: 'https://dronedeploy.com/',
		svgTextPrefix: '- DroneDeploy',
		title: 'Software Engineer in Test',
		workedDates: 'Apr 18 — Jan 20',
	},
];

export const navItemsList = [
	{ href: 'about', name: 'About' },
	{ href: 'experience', name: 'Experience' },
	{ href: 'projects', name: 'Projects' },
];

const BASE_URL = 'https://pbrovarnik.github.io';

export const projectData: CardType[] = [
	{
		badges: ['React', 'CSS', 'Socket.io', 'Node', 'WebRTC'],
		description:
			'Let’s play a game of chess! Chess party is a full-stack real-time online multiplayer game that gives players additional features like video chat and messaging to really immerse themselves  and get competitive with their opponent.',
		href: `${BASE_URL}/chess-party/`,
		imgAlt: 'chess party',
		imgSrc: chessPartyThumbnail,
		repoHref: 'https://github.com/pbrovarnik/chess-party',
		title: 'Chess Party',
	},
	{
		badges: ['React', 'Easy-peasy', 'SASS', 'TheMovieDB', 'OpenMovieDB', 'YouTube API'],
		description: 'Find your favorite movie trailers! Search for any movie, get a plot overview, watch the trailer, and see ratings from companies like Rotten Tomatoes and IMDB.',
		href: `${BASE_URL}/movie-preview/`,
		imgAlt: 'movie preview',
		imgSrc: moviePreviewThumbnail,
		repoHref: 'https://github.com/pbrovarnik/movie-preview',
		title: 'Movie Preview',
	},
	{
		badges: ['React', 'Redux', 'SASS', 'Firebase', 'Stripe API'],
		description: 'A example of a massive full-stack e-commerce application, similar to Shopify, that gives users an authentic online shopping experience.',
		href: `${BASE_URL}/clothing-shop/`,
		imgAlt: 'clothing shop',
		imgSrc: clothingShopThumbnail,
		repoHref: 'https://github.com/pbrovarnik/clothing-shop',
		title: 'Clothing Shop',
	},
	{
		badges: ['TypeScript', 'React', 'Hooks', 'Games', 'AI Player', 'Recursion', "Browser API's", 'MiniMax Algorithm', 'Trie Search'],
		description: 'Step into the world of Dev Doodles! A playful mix of mini projects.',
		href: `${BASE_URL}/dev-doodles/`,
		imgAlt: 'devDoodles page',
		imgSrc: devDoodlesThumbnail,
		repoHref: 'https://github.com/pbrovarnik/dev-doodles',
		title: 'DevDoodles',
	},
];

export const socialsList: SocialProps[] = [
	{ href: 'https://github.com/pbrovarnik', name: 'Github', Icon: GithubIcon },
	{ href: 'https://linkedin.com/in/pasha-brovarnik', name: 'LinkedIn', Icon: LinkedInIcon },
];
