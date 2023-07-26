import React from 'react';
interface Props {
    /**
     * @description       插槽类型
     * @default           -
     */
    type: 'active' | 'edit' | 'form' | 'search' | 'searchButton' | 'modalFooter' | 'detail' | 'detailButton';
    /**
     * @description       排序
     * @default           -
     */
    order?: number;
    /**
     * @description       内容
     * @default           -
     */
    children: React.ReactNode | ((data: any, index: number) => React.ReactNode | React.ReactNode[]);
}
declare const _default: ({ children }: Props) => null;
export default _default;
