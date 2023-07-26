import { FormInstance, FormProps as AntFormProps } from 'rs-antd';
import React from 'react';
import './styles.less';
import { _FormProps } from './interface/FormProps';
export interface FormProps extends _FormProps, AntFormProps {
}
export interface FormRefProps extends FormInstance<any> {
}
declare const _default: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<FormInstance<any> | undefined>>;
export default _default;
