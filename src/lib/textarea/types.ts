type resize = 'resize' | 'x' | 'y' | 'resize-none' | string;

export interface TextareaProps {
	class?: string;
	placeholder?: string;
	resize?: resize;
}
