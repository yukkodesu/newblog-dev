/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'text-pink':'#f34e6c99',
				'bg-pink':'#FBA0B022',
			}
		},
	},
	plugins: [],
}
