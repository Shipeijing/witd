import { CSSProperties, ReactNode } from 'react';
import { DescriptionsProps as AntDescriptionsProps, FormProps } from 'rs-antd';
import { ItemProps } from './ItemProps';
export interface DescriptionsProps {
    /**
     * @description       数据源
     * @default           {}
     */
    dataSource?: Object;
    /**
     * @description       配置项
     * @default           []
     */
    item?: ItemProps[];
    /**
     * @description       是否展示边框
     * @default           false
     */
    bordered?: boolean;
    /**
     * @description       状态初始值
     * @default           false
     */
    defaultEdit?: boolean;
    /**
     * @description       一行的 DescriptionItems 数量
     * @default           3
     */
    column?: number;
    /**
     * @description       配置 Descriptions.Item 的 colon 的默认值
     * @default           true
     */
    colon?: boolean;
    /**
     * @description       FormProps
     * @default           -
     */
    formProps?: FormProps;
    /**
     * @description       DescriptionsProps
     * @default           -
     */
    descriptionsProps?: AntDescriptionsProps;
    /**
     * @description       只读模式
     * @default           false
     */
    readOnly?: boolean;
    /**
     * @description       隐藏默认编辑按钮
     * @default           false
     */
    hideDefaultButton?: boolean;
    /**
     * @description       描述列表的操作区域，显示在右上方
     * @default           -
     */
    extra?: string | ReactNode;
    /**
     * @description       描述布局
     * @default           horizontal
     */
    layout?: 'horizontal' | 'vertical';
    /**
     * @description       设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）
     * @default           default
     */
    size?: 'default' | 'middle' | 'small';
    /**
     * @description       标题
     * @default           -
     */
    title?: string;
    /**
     * @description       自定义标签样式
     * @default           -
     */
    labelStyle?: CSSProperties;
    /**
     * @description       自定义标签样式
     * @default           -
     */
    labelWidth?: number;
    /**
     * @description       自定义内容样式
     * @default           -
     */
    contentStyle?: CSSProperties;
    /**
     * @description       触发保存调用方法
     * @default           -
     */
    onFinish?: (data: any) => Promise<boolean | void> | void | boolean;
}
