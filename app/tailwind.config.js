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
				'main-light': 'var(--blue-4)',
				'main-strong': 'var(--blue-5)'
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
				info: 'var(--notification-info)',
				'bulletin-info': 'var(--blue-4)',
				'bulletin-warning': 'var(--red-4)',
				bulletin: 'var(--gray-4)',
				tap: 'var(--blue-1)',
				checked: 'var(--blue-2)',
				'img-alt': 'var(--gray-2)',
				'75p-white': 'var(--white-75p)',
				'50p-white': 'var(--white-50p)',
				'25p-white': 'var(--white-25p)'
			},
			textColor: {
				'blue-3': 'var(--blue-3)',
				'blue-4': 'var(--blue-4)',
				'white-f': 'var(--white-f)',
				strong: 'var(--blue-5)',
				silent: 'var(--gray-4)',
				main: 'var(--black-0)',
				'navigation-inactive': 'var(--gray-3)',
				'navigation-active': 'var(--blue-5)'
			},
			width: {
				button: '10rem'
			},
			boxShadow: {
				'card-shadow': '0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: []
};
