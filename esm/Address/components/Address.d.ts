import React from 'react';
import '../styles.css';
interface Props {
    /**
     * @description       值
     * @default           无
     */
    value: any[];
    /**
     * @description       控制选择的等级
     * @default           district
     */
    level: 'city' | 'district';
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
