import React from 'react';
import { DetailProps } from '../interface/detailProps';
import '../styles.less';
interface Props extends DetailProps {
    data: any;
    item: any;
    setDataDetails: any;
    slotData: any;
    onFinish: any;
    onDetailClose?: () => any;
}
declare const _default: ({ data, item, title, setDataDetails, slotData, onFinish, ...e }: Props) => React.JSX.Element;
export default _default;
