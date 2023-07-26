import * as React from 'react';
import './styles.less';
export declare type MaskProps = {
    /**
     * @description       控制蒙版显示
     * @default           false
     */
    visible: boolean;
    /**
     * @description       motionName，用法见rc-motion
     * @default           -
     */
    motionName?: string;
    /**
     * @description       蒙版样式
     * @default           -
     */
    style?: React.CSSProperties;
    /**
     * @description       蒙版标签props
     * @default           -
     */
    maskProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * @description       类名头部，通过该字段可复写样式
     * @default           super
     */
    prefixCls?: string;
};
export default function Mask(props: MaskProps): React.JSX.Element;
