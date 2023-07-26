import { FormItemProps, Rule } from 'rs-antd/lib/form';
import { ColProps } from 'rs-antd';
export interface columnProps {
    /**
     * @description       开启搜索项
     * @default           false
     */
    search?: boolean;
    /**
     * @description       是否在详情页面显示
     * @default           false
     */
    detail?: boolean;
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
     * @description       是否单行显示
     * @default           false
     */
    ellipsis?: boolean;
    /**
     * @description       自定义规则校验
     * @default           []
     */
    rules?: Rule[];
    /**
     * @description       只读,表单项隐藏，可选择添加/编辑时只读，true全部只读
     * @default           false
     */
    readOnly?: boolean | 'add' | 'update';
    /**
     * @description       表单项禁用，可选择添加/编辑时禁用，true全部禁用
     * @default           -
     */
    disabled?: boolean | 'add' | 'update';
    /**
     * @description       编辑框props
     * @default           无
     */
    antProps?: any;
    /**
     * @description       表单项props
     * @default           无
     */
    formProps?: FormItemProps;
    /**
     * @description       数据类型
     * @default           input
     */
    dataType?: 'input' | 'select' | 'number' | 'boolean' | 'date' | 'datetime' | 'time' | 'tree' | 'checkbox' | 'textArea' | 'radio' | 'upload' | 'addressPicker' | 'cascader';
    /**
     * @description       tree cascader select需设置此字段
     * @default           []
     */
    dataSource?: CascaderProps[] | TreeProps[] | SelectProps[] | any[];
    /**
     * @description       字段值
     * @default           无
     */
    dataIndex?: string;
    /**
     * @description       字段为日期时间格式时格式化规则，不填则使用默认值
     * @default           'YYYY-MM-DD HH:mm:ss'
     */
    dateFormat?: string;
    /**
     * @description       表单排序
     * @default           -
     */
    formOrder?: number;
    /**
     * @description       搜索栏排序
     * @default           -
     */
    searchOrder?: number;
    /**
     * @description       跨列配置
     * @default           1
     */
    span?: number;
    /**
     * @description       Col组件 props 参数见ant
     * @default           -
     */
    colProps?: ColProps;
    /**
     * @description       只有上传类型时需要指定此字段
     * @default           file
     */
    onUpload?: (file: any) => Promise<any | void>;
}
declare const _default: (props: columnProps) => void;
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
