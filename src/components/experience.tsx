import { CardType } from './card';
import CardList from './card-list';

const EXPERIENCE_DATA: CardType[] = [
	{
		badges: ['TypeScript', 'Node.js', 'Redwood.js', 'React', 'Prisma', 'Apollo', 'GraphQL', 'PostGres', 'Material-UI'],
		description: 'Led the charge in creating a vertical CRM product from scratch. From defining system architecture to integrating third-party services like Nylas and Intuit.',
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

export default function Experience() {
	return <CardList cardData={EXPERIENCE_DATA} />;
}
