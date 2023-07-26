import { FormItemProps } from '../../FormItem';
export interface _FormProps {
    /**
     * @description       数据流
     * @default           []
     */
    item?: FormItemProps[];
    /**
     * @description       添加按钮文字
     * @default           添加一行
     */
    addText?: string;
    /**
     * @description       只读
     * @default           false
     */
    readOnly?: boolean;
}
declare const _default: (props: _FormProps) => void;
export default _default;
