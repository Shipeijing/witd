import { InputProps } from 'rs-antd';
import { AddressProps } from '../Address/useAddress';
export interface InputAddressProps {
    /**
     * @description       值
     * @default           []
     */
    value?: [];
    /**
     * @description       修改回调
     * @default           无
     */
    onChange?: (data: any) => void;
    /**
     * @description       ant input属性
     * @default           无
     */
    inputProps?: InputProps;
    /**
     * @description       address属性
     * @default           无
     */
    addressProps?: AddressProps;
}
