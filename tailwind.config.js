const colors = require("./tailwind.colors.js");

module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}", // for layout.tsx, page.tsx, components inside /app
		"./src/components/**/*.{js,ts,jsx,tsx}", // for any shared UI components
	],
	theme: {
		extend: {
			colors,
		},
	},
	plugins: [
		function ({ addBase }) {
			const cssVars = Object.entries(colors).reduce((acc, [key, val]) => {
				acc[`--${key}`] = val;
				return acc;
			}, {});
			addBase({
				":root": cssVars,
			});
		},
	],
};
