/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Raleway']
			},
			colors: {
				'custom-blue': '#007EA7',
				'custom-dark': '#201A23',
			}
		},
	},
	plugins: [],
}

