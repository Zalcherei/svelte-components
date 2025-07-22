type mask = 'heart' | 'triangle' | string;

export interface MaskProps {
	class?: string;
	mask?: mask;
	alt?: string;
	src?: string;
}
