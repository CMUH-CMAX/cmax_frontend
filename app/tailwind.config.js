/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'noto-sans': ['Noto Sans TC']
			},
			keyframes: {
				'moving-left-right': {
					'0%': { transform: 'translateX(-105%)' },
					'100%': { transform: 'translateX(105%)' }
				}
			},
			animation: {
				floating: 'moving-left-right 30s ease-in-out infinite'
			},
			fontSize: {
				'2.5xs': '9px',
				'2xs': '10px',
				xs: '12px',
				sm: '14px',
				regular: '18px',
				lg: '20px'
			},
			gradientColorStops: {
				'main-light': '#388E8E',
				'main-strong': '#1A5B5B'
			},
			gridTemplateRows: {
				'main-header-layout': '2fr 1fr'
			},
			gridTemplateColumns: {
				'main-header-layout': '4fr 4fr 1fr'
			},
			backgroundColor: {
				'white-f': '#FFFFFF',
				'notification-badge': 'rgb(234,179,8)',
				warning: 'var(--notification-warning)',
				info: 'var(--notification-info)'
			},
			textColor: {
				'blue-3': '#67BEBE',
				'white-f': '#FFFFFF',
				strong: '#1A5B5B'
			},
			width: {
				button: '10rem'
			}
		}
	},
	plugins: []
};
