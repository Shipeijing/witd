import React, { ReactNode } from 'react';
import './styles.less';
interface Props {
    /**
     * @description       是否开启
     * @default           false
     */
    loading: boolean;
    /**
     * @description       加载指示符
     * @default           -
     */
    indicator?: 'a' | 'b' | 'c' | 'd';
    /**
     * @description       当作为包裹元素时，可以自定义描述文案
     * @default           0.3
     */
    tip?: ReactNode | string;
    /**
     * @description       透明度，0-1
     * @default           0.3
     */
    opacity?: number;
    /**
     * @description       主题
     * @default           dark
     */
    mode?: 'dark' | 'light';
    /**
     * @description       有子内容局部遮罩，无子内容全屏遮罩
     * @default           无
     */
    children?: ReactNode;
    /**
     * @description       自定义加载指示符
     * @default           -
     */
    IndicatorRender?: ReactNode;
}
declare const _default: ({ loading, children, mode, opacity, ...e }: Props) => React.JSX.Element;
export default _default;
