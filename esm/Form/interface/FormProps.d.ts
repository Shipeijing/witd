import { RowProps } from 'rs-antd';
import { FormItemProps } from '../../FormItem';
export interface _FormProps {
    /**
     * @description       数据流
     * @default           []
     */
    item?: FormItemProps[];
    /**
     * @description       表单列数，跨列在columns里面设置
     * @default           1
     */
    column?: number;
    /**
     * @description       标题宽度大小，分别对应：4字、6字、8字
     * @default           middle
     */
    labelSize?: 'small' | 'middle' | 'large';
    /**
     * @description       Row组件 props 参数见ant
     * @default           -
     */
    rowProps?: RowProps;
}
declare const _default: (props: _FormProps) => void;
export default _default;
