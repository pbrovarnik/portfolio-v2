import ReactDOM from 'react-dom/client';
import App from './App-1.tsx';
import { ThemeProvider } from '@context/theme-provider.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme="dark">
		<App />
	</ThemeProvider>
);
