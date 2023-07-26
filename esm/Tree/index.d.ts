import { TreeProps } from 'rs-antd';
import React from 'react';
import { SuperTreeProps } from './interface/TreeProps';
interface FormProps {
    /**
     * @description       新增开关
     * @default           false
     */
    add?: boolean;
    /**
     * @description       编辑开关
     * @default           false
     */
    update?: boolean;
    /**
     * @description       删除开关
     * @default           false
     */
    delete?: boolean;
    /**
     * @description       新增弹窗标题
     * @default           新增
     */
    addTitle?: string;
    /**
     * @description       编辑弹窗标题
     * @default           编辑
     */
    updateTitle?: string;
    /**
     * @description       隐藏图标按钮
     * @default           false
     */
    hideIconButton?: boolean;
}
export interface Props extends SuperTreeProps, TreeProps {
    form?: FormProps;
}
declare const _default: ({ formRender, treeData, onAdd, onUpdate, onDelete, ...e }: Props) => React.JSX.Element;
export default _default;
