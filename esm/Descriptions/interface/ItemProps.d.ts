import { FormItemProps } from 'rs-antd';
import { Rule } from 'rs-antd/es/form';
import { CSSProperties, ReactNode } from 'react';
import { CascaderProps, SelectProps, TreeProps } from '../../Table/interface/columnProps';
export interface ItemProps {
    /**
     * @description       标题
     * @default           -
     */
    title: string | ReactNode;
    /**
     * @description       字段值
     * @default           -
     */
    dataIndex: string;
    /**
     * @description       包含列的数量
     * @default           1
     */
    span?: number;
    /**
     * @description       是否单行显示
     * @default           false
     */
    ellipsis?: boolean;
    /**
     * @description       是否必填
     * @default           false
     */
    required?: boolean;
    /**
     * @description       自定义规则校验
     * @default           []
     */
    rules?: Rule[];
    /**
     * @description       只读
     * @default           false
     */
    readOnly?: boolean;
    /**
     * @description       数据类型
     * @default           input
     */
    dataType?: 'input' | 'select' | 'number' | 'boolean' | 'date' | 'datetime' | 'time' | 'tree' | 'checkbox' | 'textArea' | 'radio' | 'upload' | 'addressPicker' | 'cascader';
    /**
     * @description       表单项props
     * @default           无
     */
    formItemProps?: FormItemProps;
    /**
     * @description       输入控件props
     * @default           无
     */
    formChildrenProps?: any;
    /**
     * @description       DescriptionsItemProps
     * @default           无
     */
    descriptionsProps?: DescriptionsItemProps;
    /**
     * @description       tree cascader select需设置此字段
     * @default           []
     */
    dataSource?: CascaderProps[] | TreeProps[] | SelectProps[] | any[];
    /**
     * @description       自定义标签样式
     * @default           -
     */
    labelStyle?: CSSProperties;
    /**
     * @description       自定义内容样式
     * @default           -
     */
    contentStyle?: CSSProperties;
    /**
     * @description       自定义展示值
     * @default           -
     */
    render?: (data: any) => string | ReactNode;
}
declare const _default: (props: ItemProps) => void;
export default _default;
export interface DescriptionsItemProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
    labelStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    span?: number;
}
