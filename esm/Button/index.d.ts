import { ButtonProps } from 'rs-antd';
import React from 'react';
import './styles.less';
interface Props extends ButtonProps {
    theme?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'dark';
}
declare const _default: ({ theme, className, ...e }: Props) => React.JSX.Element;
export default _default;
