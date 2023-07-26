import React from 'react';
import './styles.less';
interface Props {
    /**
     * @description       图标名称
     * @default           -
     */
    name: string;
    /**
     * @description       大小
     * @default           16
     */
    size?: number;
    /**
     * @description       颜色
     * @default           #3b3b3b
     */
    color?: string;
    /**
     * @description       异步加载
     * @default           true
     */
    lazy?: boolean;
}
declare const _default: (props: Props) => React.JSX.Element;
export default _default;
