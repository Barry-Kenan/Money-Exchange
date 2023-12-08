import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['cyrillic', 'latin'],
	display: 'swap'
});

// Create a theme instance.
export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#2a6478'
		},
		secondary: {
			main: '#fff'
		},
		error: {
			main: red.A400
		}
	},
	typography: {
		fontFamily: roboto.style.fontFamily
	}
});
