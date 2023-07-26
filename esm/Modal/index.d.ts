import React from 'react';
import { ModalProps as AntModalProps } from 'rs-antd';
import './styles.less';
import { SuperModalProps } from './interface/ModalProps';
export interface ModalProps extends SuperModalProps, AntModalProps {
}
declare const _default: ({ children, showGuide, noDestroyClose, className, footer, ...props }: ModalProps) => React.JSX.Element;
export default _default;
