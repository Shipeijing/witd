import React from 'react';
import './styles.less';
interface Props {
    /**
     * @description       内容
     * @default           -
     */
    children: React.ReactNode;
    /**
     * @description       是否换行
     * @default           nowrap
     */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * @description       布局方向
     * @default           row
     */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /**
     * @description       横向布局
     * @default           center
     */
    justifyContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    /**
     * @description       纵向布局
     * @default           center
     */
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    /**
     * @description       多行布局
     * @default           center
     */
    alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch';
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
}
declare const _default: ({ children, justifyContent, ...e }: Props) => React.JSX.Element;
export default _default;
