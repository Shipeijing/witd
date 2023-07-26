import { ReactNode } from 'react';
declare const _default: (props: SuperTreeProps) => void;
export default _default;
export interface SuperTreeProps {
    /**
     * @description       标题
     * @default           新增
     */
    title?: string;
    /**
     * @description       标题logo
     * @default           -
     */
    titleIcon?: ReactNode;
    /**
     * @description       组件css类
     * @default           无
     */
    className?: string;
    /**
     * @description       组件样式
     * @default           无
     */
    style?: React.CSSProperties;
    /**
     * @description       添加按钮文案
     * @default           添加数据
     */
    addText?: string;
    /**
     * @description       隐藏搜索
     * @default           false
     */
    hideSearch?: boolean;
    /**
     * @description       顶层id
     * @default           0
     */
    parentId?: string | number;
    /**
     * @description       隐藏头部
     * @default           false
     */
    hideHeader?: boolean;
    /**
     * @description       自动收起
     * @default           false
     */
    autoStow?: boolean;
    /**
     * @description       图标集，展示在每列前侧
     * @default           -
     */
    renderIcons?: () => JSX.Element[];
    /**
     * @description       添加回调
     * @default           无
     */
    onAdd?: (data?: any, parentData?: any) => void;
    /**
     * @description       修改回调
     * @default           无
     */
    onUpdate?: (newData: any, oldData?: any, parent?: any) => void;
    /**
     * @description       删除回调
     * @default           无
     */
    onDelete?: (t: any) => void;
    /**
     * @description       编辑功能表单内容
     * @default           无
     */
    formRender?: (form: any, props: any) => ReactNode;
}
