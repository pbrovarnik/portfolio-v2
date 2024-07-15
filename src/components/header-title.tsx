import ThemeToggle from './theme-toggle';

type Props = {
	onTitleClick?: () => void;
	showThemeToggle: boolean;
};
export default function HeaderTitle({ onTitleClick, showThemeToggle }: Props) {
	return (
		<>
			<div className={`flex items-center gap-2 cursor-text ${onTitleClick ? 'lg:cursor-pointer' : ''}`.trimEnd()}>
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl pointer-events-none lg:pointer-events-auto" onClick={onTitleClick}>
					Pasha Brovarnik
				</h1>
				{showThemeToggle && <ThemeToggle />}
			</div>
			<h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Full-stack Engineer</h2>
			<p className="mt-4 max-w-xs leading-normal">I build seamless digital experiences from design to deployment.</p>
		</>
	);
}
