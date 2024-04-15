import clsx, { type ClassValue } from 'clsx';
import { twMerge as twMergeStyle } from 'tailwind-merge';

export const twMerge = (...args: ClassValue[]) => {
	return twMergeStyle(clsx(args));
};

export const goBack = () => {
	history.back();
};

export const handleOverlayAction = (node: HTMLElement) => {
	const clickOutside = (event: Event) => {
		event.stopPropagation();
		if (node && !node.contains(this) && !event.defaultPrevented) {
			node.dispatchEvent(new Event('overlayClick'));
		}
	};

	node.addEventListener('click', clickOutside, true);

	return {
		destroy() {
			node.removeEventListener('click', clickOutside, true);
		}
	};
};
