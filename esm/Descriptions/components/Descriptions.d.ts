import React from 'react';
import { DescriptionsProps } from '../interface/DescriptionsProps';
import 'dayjs/locale/zh-cn';
interface Props extends DescriptionsProps {
    isEdit: boolean;
    form: any;
    setIsEdit: any;
}
declare const _default: ({ item, isEdit, dataSource, ...e }: Props) => React.JSX.Element;
export default _default;
