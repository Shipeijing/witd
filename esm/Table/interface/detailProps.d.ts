import { ReactNode } from 'react';
import { DescriptionsProps } from '../../Descriptions/interface/DescriptionsProps';
export interface DetailProps {
    /**
     * @description       详情标题
     * @default           -
     */
    title?: string;
    /**
     * @description       容器高度
     * @default           auto
     */
    height?: number | string;
    /**
     * @description       只读模式
     * @default           false
     */
    readOnly?: boolean;
    /**
     * @description       是否展示边框
     * @default           false
     */
    bordered?: boolean;
    /**
     * @description       一行的 DescriptionItems 数量
     * @default           3
     */
    column?: number;
    /**
     * @description       描述列表props，参考见组件页面
     * @default           {}
     */
    descriptionsProps?: DescriptionsProps;
    /**
     * @description       自定义渲染内容
     * @default           -
     */
    render?: (record: any, colums: any[]) => ReactNode;
}
declare const _default: (props: DetailProps) => void;
export default _default;
