import React from 'react';
import { FormItemProps as AntFormItemProps } from 'rs-antd';
import { _FormItemProps } from './interface/FormItemProps';
export interface FormItemProps extends _FormItemProps, AntFormItemProps {
}
declare const _default: ({ key, labelSpace, hideLabel, rules, formItemProps, support, ...item }: FormItemProps) => React.JSX.Element;
export default _default;
