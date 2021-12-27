module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			jose: ['"Josefin Sans"', 'sans-serif'],
			lora:['"Lora"', 'serif'],
			vare:['"Varela"', 'sans-serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
