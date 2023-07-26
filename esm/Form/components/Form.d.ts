import React from 'react';
import { FormInstance, FormProps as AntFormProps, RowProps } from 'rs-antd';
import 'dayjs/locale/zh-cn';
import { FormItemProps } from '../../FormItem';
export interface Props {
    form: FormInstance<any>;
    formProps: AntFormProps;
    item?: FormItemProps[];
    childrenDOM?: any;
    column?: number;
    rowProps?: RowProps;
    labelSize: any;
}
declare const _default: ({ childrenDOM, column, rowProps, ...props }: Props) => React.JSX.Element;
export default _default;
