import clsx, { type ClassValue } from 'clsx';
import { twMerge as twMergeStyle } from 'tailwind-merge';

export const twMerge = (...args: ClassValue[]) => {
	return twMergeStyle(clsx(args));
};

export const goBack = () => {
	history.back();
};
