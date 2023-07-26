import { ModalProps } from './index';
import { useSuperModalProps } from './interface/useModalProps';
export interface useModalProps extends useSuperModalProps, ModalProps {
}
interface ResultProps {
    open: (data: useModalProps | boolean) => void;
    close: () => void;
    refresh: (data: useModalProps) => void;
}
declare const _default: (id?: string | undefined) => ResultProps;
export default _default;
