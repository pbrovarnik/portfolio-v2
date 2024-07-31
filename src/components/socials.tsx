import Social from './social';
import { socialsList } from '@constants/index';

export default function Socials() {
	return (
		<ul className="mt-4 flex items-center gap-1" aria-label="Social media">
			{socialsList.map((item, idx) => (
				<Social key={idx} {...item} />
			))}
		</ul>
	);
}
