import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function clickOutside(node: HTMLElement, options?: { enabled: boolean }) {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	function addListener() {
		document.addEventListener('click', handleClick, true);
	}

	function removeListener() {
		document.removeEventListener('click', handleClick, true);
	}

	if (options?.enabled !== false) {
		addListener();
	}

	return {
		update(newOptions: { enabled: boolean }) {
			if (newOptions?.enabled) {
				addListener();
			} else {
				removeListener();
			}
		},
		destroy() {
			removeListener();
		}
	};
}
