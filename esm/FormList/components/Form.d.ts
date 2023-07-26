import React from 'react';
import { FormInstance, FormProps as AntFormProps } from 'rs-antd';
import 'dayjs/locale/zh-cn';
import { FormItemProps } from '../../FormItem';
export interface Props {
    form: FormInstance<any>;
    formProps: AntFormProps;
    item?: FormItemProps[];
    childrenDOM?: any;
    dataList: any;
    setDataList: any;
}
declare const _default: ({ childrenDOM, dataList, setDataList, ...props }: Props) => React.JSX.Element;
export default _default;
