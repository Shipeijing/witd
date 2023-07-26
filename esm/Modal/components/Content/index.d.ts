import React from 'react';
import '../../styles.less';
import { ModalProps } from '../../interface/ModalProps';
interface Props extends ModalProps {
    _close: Function;
    loading?: boolean;
}
declare const _default: ({ title, _close, onOk, data, onCancel, children, ...e }: Props) => React.JSX.Element;
export default _default;
