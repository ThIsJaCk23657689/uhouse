/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: '#f7e92b', // 主題黃
					200: '#4ca8de', // 主題藍
					300: '#595757', // 主題灰
				}
			}
		},
	},
	plugins: [],
}

