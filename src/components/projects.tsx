import { CardType } from './card';
import chessPartyThumbnail from '@assets/chess-party-thumbnail.png';
import clothingShopThumbnail from '@assets/clothing-shop-thumbnail.png';
import moviePreviewThumbnail from '@assets/movie-preview-thumbnail.png';
import devDoodlesThumbnail from '@assets/dev-doodles-thumbnail.png';
import CardList from './card-list';

const BASE_URL = 'https://pbrovarnik.github.io';

const PROJECT_DATA: CardType[] = [
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
		description: 'Find your favorite movies! Search for any movie, get a plot overview, watch the trailer, and see ratings from companies like Rotten Tomatoes and IMDB.',
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

export default function Projects() {
	return <CardList cardData={PROJECT_DATA} />;
}
