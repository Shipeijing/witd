export interface useIdProps {
    type?: 'uuid' | 'id';
    length?: 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32;
    hideLine?: boolean;
}
export default function useId(props?: useIdProps): any;
