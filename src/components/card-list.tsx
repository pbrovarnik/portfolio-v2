import Card, { CardType } from './card';

type Props = {
	cardData: CardType[];
};

export default function CardList({ cardData }: Props) {
	return (
		<ol className="group/list">
			{cardData.map((item, idx) => (
				<li key={idx} className="mb-10 sm:mb-12">
					<Card {...item} />
				</li>
			))}
		</ol>
	);
}
