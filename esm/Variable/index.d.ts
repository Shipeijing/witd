import React, { JSXElementConstructor, ReactElement } from 'react';
import './styles.less';
interface Props {
    /**
     * @description       值
     * @default           []
     */
    value?: (string | undefined)[];
    /**
     * @description       容器组件
     * @default           -
     */
    children: ReactElement<any, string | JSXElementConstructor<any>>;
    /**
     * @description       添加按钮文字
     * @default           -
     */
    addText?: string;
    /**
     * @description       删除按钮执行前回调
     * @default           -
     */
    onBeforeDelete?: (item: any, i: number) => void | boolean;
    /**
     * @description       添加按钮执行前回调
     * @default           -
     */
    onBeforeAdd?: () => void | boolean;
    /**
     * @description       值改变回调
     * @default           -
     */
    onChange?: (value: (string | undefined)[]) => void;
}
declare const _default: ({ value, children, onChange, ...e }: Props) => React.JSX.Element;
export default _default;
