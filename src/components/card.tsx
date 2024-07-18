import Badge from '@components/badge';
import ExternalLinkIcon from './external-link-icon';
import GitIcon from './git-icon';
import LinkButton from './link-button';

export type CardType = {
	badges: string[];
	description: string;
	href: string;
	imgAlt?: string;
	imgSrc?: string;
	repoHref?: string;
	svgTextPrefix?: string;
	title: string;
	workedDates?: string;
};

export default function Card({ badges, description, href, imgAlt, imgSrc, repoHref, svgTextPrefix, title, workedDates }: CardType) {
	return (
		<div className="max-w-xl group relative grid pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
			<div className="absolute -inset-x-6 sm:-inset-x-4 -inset-y-4 z-0 sm:rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:hidden lg:group-hover:block lg:group-hover:bg-slate-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(107,92,71,0.1)] dark:lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-slate-800/50 bg-slate-800/5 dark:bg-slate-800/50 drop-shadow-lg shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
			{workedDates && (
				<div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={workedDates}>
					{workedDates}
				</div>
			)}
			{imgAlt && imgSrc && (
				<div className="col-span-3 relative mb-4 rounded-md max-w-[200px]">
					<div className="bg-gray-700 p-1 rounded-t-md">
						<div className="flex gap-1">
							<div className="w-1 h-1 rounded-full bg-red-500"></div>
							<div className="w-1 h-1 rounded-full bg-yellow-500"></div>
							<div className="w-1 h-1 rounded-full bg-green-500"></div>
						</div>
					</div>
					<img alt={imgAlt} loading="lazy" width="200" height="48" decoding="async" src={imgSrc} className="rounded-b-md" />
				</div>
			)}
			<div className="z-10 sm:col-span-6">
				<h3 className="font-medium leading-snug">
					<div>
						<a href={href} className="card-title group/link" target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in a new tab)`}>
							{/* needed to trigger the hover on the title from anywhere on the card */}
							<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
							<span>{title}</span>
							<span>
								{svgTextPrefix && <span className="ml-1">{svgTextPrefix}</span>}
								<ExternalLinkIcon />
							</span>
						</a>
					</div>
				</h3>
				<p className="mt-2 text-sm leading-normal">{description}</p>
				{repoHref && (
					<div className="relative text-sm mt-2 flex items-center gap-2">
						<GitIcon />
						<LinkButton href={repoHref} showIcon={false}>
							github/{repoHref.split('/').pop()}
						</LinkButton>
					</div>
				)}
				<ul className="mt-4 flex flex-wrap gap-1" aria-label="Technologies used">
					{badges.map((badge, idx) => (
						<Badge key={idx}>{badge}</Badge>
					))}
				</ul>
			</div>
		</div>
	);
}
