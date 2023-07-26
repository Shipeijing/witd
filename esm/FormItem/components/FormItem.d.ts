import React from 'react';
import { _FormItemProps } from '../interface/FormItemProps';
export interface FormTypeProps {
    data: _FormItemProps;
    rows?: boolean;
    disabled?: boolean;
}
declare const _default: ({ data, rows, disabled }: FormTypeProps) => React.JSX.Element;
export default _default;
