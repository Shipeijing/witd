import { FormInstance } from 'rs-antd';
import { paginationProps } from '.';
export interface tableRefProps {
    /**
     * @description       获取分页数据
     * @default           -
     */
    pagination: paginationProps;
    /**
     * @description       表单数据
     * @default           -
     */
    form: FormInstance<any>;
    /**
     * @description       搜索栏表单数据
     * @default           -
     */
    searchForm: FormInstance<any>;
    /**
     * @description       打开添加弹窗
     * @default           -
     */
    openAdd: () => void;
    /**
     * @description       打开编辑弹窗
     * @default           -
     */
    openUpdate: (data: any) => void;
    /**
     * @description       调起删除弹窗
     * @default           -
     */
    openDelete: (data: string | number) => void;
    /**
     * @description       获取选中行的数据key值
     * @default           []
     */
    getSelectedRowKeys: () => string[];
    /**
     * @description       获取展开的子项
     * @default           -
     */
    getExpandedRowKeys: () => any;
    /**
     * @description       获取选中行的数据
     * @default           []
     */
    getSelectedData: () => any[];
    /**
     * @description       写入默认选中数据
     * @default           []
     */
    setSelectedRows: (data: any[]) => void;
    /**
     * @description       写入详情数据
     * @default           -
     */
    setDataDetails: (data: object | null) => void;
    /**
     * @description       写入展开子项
     * @default           -
     */
    setExpandedRowKeys: (data: any[]) => void;
    /**
     * @description       获取详情数据
     * @default           -
     */
    getDataDetails: () => object | null;
    /**
     * @description       获取当前编辑行的key
     * @default           -
     */
    getEditingKey: () => string[];
    /**
     * @description       手动触发搜索，传true时重置页码到第一页
     * @default           -
     */
    onRequest: (data?: boolean) => void;
    /**
     * @description       获取搜索栏表单数据
     * @default           -
     */
    getSearchBarFormData: () => string[];
    /**
     * @description       设置分页器数据
     * @default           -
     */
    setPagination: (data: paginationProps) => void;
    /**
     * @description       重置页码，入参true全部重置
     * @default           -
     */
    resetPagination: (data?: boolean) => void;
}
declare const _default: (props: tableRefProps) => void;
export default _default;
