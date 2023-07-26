import React from 'react';
interface Props {
    /**
     * @description       容器宽度
     * @default           100
     */
    width?: number;
    /**
     * @description       容器高度
     * @default           32
     */
    height?: number;
    /**
     * @description       验证码长度
     * @default           4
     */
    codeLength?: number;
    /**
     * @description       简约显示
     * @default           false
     */
    simple?: boolean;
    /**
     * @description       线数量
     * @default           4
     */
    lineNumber?: number;
    /**
     * @description       点数量
     * @default           50
     */
    dotNumber?: number;
    /**
     * @description       隐藏线
     * @default           false
     */
    hideLine?: boolean;
    /**
     * @description       隐藏点
     * @default           false
     */
    hideDot?: boolean;
    /**
     * @description       验证码文字类型
     * @default           all
     */
    type?: 'number' | 'uppercase' | 'lowercase' | 'alphabet' | 'all';
    /**
     * @description       获取验证码回调，返回值可指定code
     * @default           -
     */
    onChange?: (code: string) => void | string;
}
declare const _default: ({ onChange, type, hideDot, simple, hideLine, ...e }: Props) => React.JSX.Element;
export default _default;
