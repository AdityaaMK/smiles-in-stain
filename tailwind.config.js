const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#FDF0E7",
				primary: "#B95C33",
				secondary: "#333333",
			},
			fontFamily: {
				heading: ["Merriweather", ...fontFamily.serif],
				body: ['"Nunito Sans"', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
