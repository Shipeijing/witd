import React from 'react';
interface Props extends AddressProps {
    /**
     * @description       控制弹窗显示
     * @default           false
     */
    visible: boolean;
    /**
     * @description       取消回调
     * @default           无
     */
    onCancel: () => void;
}
export interface AddressProps {
    /**
     * @description       值
     * @default           无
     */
    value?: any[];
    /**
     * @description       严格模式，严格模式下district必须选到乡镇级别
     * @default           false
     */
    strict?: boolean;
    /**
     * @description       改变时回调
     * @default           无
     */
    onChange?: (data: []) => void;
    /**
     * @description       控制选择的等级
     * @default           district
     */
    level?: 'city' | 'district';
}
declare const _default: (props: Props) => React.JSX.Element;
export default _default;
