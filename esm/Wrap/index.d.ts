import { TooltipProps } from 'rs-antd';
import React from 'react';
import './styles.less';
interface Props {
    /**
     * @description       内容
     * @default           -
     */
    children: string;
    /**
     * @description       行数
     * @default           1
     */
    row?: number;
    /**
     * @description       弹窗宽度
     * @default           250
     */
    tipWidth?: number | string;
    /**
     * @description       自定义表格样式类名
     * @default           无
     */
    className?: string;
    /**
     * @description       自定义表格样式
     * @default           无
     */
    style?: React.CSSProperties;
    /**
     * @description       弹窗属性
     * @default           -
     */
    tooltipProps?: TooltipProps;
}
declare const _default: ({ children, row, ...e }: Props) => React.JSX.Element;
export default _default;
