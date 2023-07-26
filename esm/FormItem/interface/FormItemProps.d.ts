import { ColProps } from 'rs-antd';
import { FormItemProps as AntFormItemProps, Rule } from 'rs-antd/es/form';
export interface _FormItemProps {
    /**
     * @description       数据类型
     * @default           input
     */
    dataType?: 'input' | 'select' | 'number' | 'boolean' | 'date' | 'datetime' | 'time' | 'tree' | 'checkbox' | 'textArea' | 'radio' | 'upload' | 'addressPicker' | 'text' | 'cascader';
    /**
     * @description       表单项禁用，true全部禁用
     * @default           false
     */
    disabled?: boolean;
    /**
     * @description       标题，与label相同，兼容性字段
     * @default           -
     */
    title?: string;
    /**
     * @description       字段值，与name相同，兼容性字段
     * @default           -
     */
    dataIndex?: string;
    /**
     * @description       tree cascader select需设置此字段
     * @default           []
     */
    dataSource?: CascaderProps[] | TreeProps[] | SelectProps[] | any[];
    /**
     * @description       不显示
     * @default           false
     */
    hideShow?: boolean;
    /**
     * @description       是否必填
     * @default           false
     */
    required?: boolean;
    /**
     * @description       标签占据空间，适合无标签时，达到对齐效果，有标签时无效
     * @default           false
     */
    labelSpace?: boolean;
    /**
     * @description       隐藏标题名
     * @default           false
     */
    hideLabel?: boolean;
    /**
     * @description       子容器撑满宽度
     * @default           false
     */
    support?: boolean;
    /**
     * @description       自定义规则校验
     * @default           []
     */
    rules?: Rule[];
    /**
     * @description       字段为日期时间格式时格式化规则，不填则使用默认值
     * @default           'YYYY-MM-DD HH:mm:ss'
     */
    dateFormat?: string;
    /**
     * @description       排序
     * @default           -
     */
    order?: number;
    /**
     * @description       跨列配置
     * @default           1
     */
    span?: number;
    /**
     * @description       标记
     * @default           -
     */
    key?: string | number;
    /**
     * @description       Col组件 props 参数见ant
     * @default           -
     */
    colProps?: ColProps;
    /**
     * @description       Form.Item props
     * @default           -
     */
    formItemProps?: AntFormItemProps;
    /**
     * @description       输入控件 props
     * @default           -
     */
    childrenProps?: any;
    /**
     * @description       只有上传类型时需要指定此字段
     * @default           file
     */
    onUpload?: (file: any) => Promise<any | void>;
}
declare const _default: (props: _FormItemProps) => void;
export default _default;
export interface TreeProps {
    value: string | number;
    title: string;
    children?: TreeProps[];
}
export interface SelectProps {
    value: string | number;
    label: string;
}
export interface CascaderProps {
    value: string | number;
    label: string;
    children?: CascaderProps[];
}
