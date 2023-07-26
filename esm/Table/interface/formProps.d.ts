import { FormProps, RowProps } from 'rs-antd';
export interface formProps {
    /**
     * @description       表单模式 row行内编辑 modal弹窗编辑
     * @default           modal
     */
    mode?: 'modal' | 'row';
    /**
     * @description       弹窗宽度
     * @default           800
     */
    width?: number | string;
    /**
     * @description       弹窗高度
     * @default           -
     */
    height?: number | string;
    /**
     * @description       添加表单标题
     * @default           -
     */
    addTitle?: string;
    /**
     * @description       编辑表单标题
     * @default           -
     */
    updateTitle?: string;
    /**
     * @description       表单列数，跨列在columns里面设置
     * @default           1
     */
    column?: number;
    /**
     * @description       Form组件 props 参数见ant
     * @default           -
     */
    formProps?: FormProps;
    /**
     * @description       Row组件 props 参数见ant
     * @default           -
     */
    rowProps?: RowProps;
}
declare const _default: (props: formProps) => void;
export default _default;
