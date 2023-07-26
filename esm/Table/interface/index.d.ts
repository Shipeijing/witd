/// <reference types="react" />
import { TableProps } from 'rs-antd';
import { ColumnType, ExpandableConfig, TablePaginationConfig, TableRowSelection } from 'rs-antd/lib/table/interface';
import { activeProps } from './activeProps';
import { columnProps } from './columnProps';
import { containerStyleProps } from './containerStyleProps';
import { DetailProps } from './detailProps';
import { formProps } from './formProps';
import { searchBarProps } from './searchBarProps';
import { slotProps } from './slotProps';
import { tableRefProps } from './tableRefProps';
export { tableRefProps, slotProps, searchBarProps, formProps, activeProps };
declare type disabledEnum = 'add' | 'update';
export interface SuperTableProps {
    /**
     * @description       ant api 优先级最高 可覆盖其它自定义属性
     * @default           无
     */
    antProps?: TableProps<any>;
    /**
     * @description       自定义表格样式类名
     * @default           无
     */
    className?: string;
    /**
     * @description       自定义表格样式
     * @default           无
     */
    style?: React.CSSProperties;
    /**
     * @description       容器样式配置
     * @default           -
     */
    containerStyle?: containerStyleProps;
    /**
     * @description       表格数据
     * @default           []
     */
    dataSource?: any[];
    /**
     * @description       表格选择开关
     * @default           false
     */
    selection?: boolean;
    /**
     * @description       行依赖值
     * @default           id
     */
    rowKey?: string;
    /**
     * @description       排序开关，数据依赖key值，确保key是唯一值
     * @default           false
     */
    sortable?: boolean;
    /**
     * @description       表格勾选配置
     * @default           无
     */
    rowSelection?: TableRowSelection<any>;
    /**
     * @description       表格只读
     * @default           false
     */
    readOnly?: boolean;
    /**
     * @description       表格插槽内容
     * @default           -
     */
    children?: JSX.Element[] | JSX.Element;
    /**
     * @description       表格分页配置
     * @default           -
     */
    pagination?: TablePaginationConfig | boolean;
    /**
     * @description       嵌套配置，注意：嵌套展开项内部维护，通过ref获取
     * @default           -
     */
    expandable?: ExpandableConfig<any>;
    /**
     * @description       隐藏序号
     * @default           false
     */
    hideSort?: boolean;
    /**
     * @description       展示模式，pure纯表格，simple去除间隔和阴影、背景
     * @default           default
     */
    mode?: 'default' | 'pure' | 'simple';
    /**
     * @description       表格表单配置项
     * @default           无
     */
    form?: formProps;
    /**
     * @description       操作区配置项
     * @default           无
     */
    active?: activeProps;
    /**
     * @description       列字段配置项
     * @default           []
     */
    columns: columnsProps[];
    /**
     * @description       列字段配置项
     * @default           []
     */
    dataDetail?: DetailProps;
    /**
     * @description       过滤器
     * @default           -
     */
    segmented?: segmentedProps;
    /**
     * @description       搜索栏配置项
     * @default           -
     */
    searchBar?: searchBarProps;
    /**
     * @description       表格插槽集合，所有插槽请查看slotProps
     * @default           -
     */
    slot?: slotProps;
    /**
     * @description       排序回调
     * @default           无
     */
    onSortChange?: (newData: number, oldData: number) => void;
    /**
     * @description       发送请求回调，搜索栏查询/分页都会触发
     * @default           无
     */
    onRequest?: (data: any) => void;
    /**
     * @description       添加之前回调，一般用于向表单填充数据使用，return true终止操作
     * @default           无
     */
    onBeforeAdd?: () => any | void | boolean;
    /**
     * @description       添加回调，返回表单数据，return true终止操作
     * @default           无
     */
    onAdd?: (data: any) => Promise<boolean | void> | boolean | void;
    /**
     * @description       编辑之前回调，一般用于编辑前数据处理，return true终止操作
     * @default           无
     */
    onBeforeUpDate?: (oldData: any) => any | void | boolean;
    /**
     * @description       编辑回调，返回编辑后数据，return true终止操作
     * @default           无
     */
    onUpDate?: (data: any, oldData: any, newData: any) => Promise<boolean | void> | boolean | void;
    /**
     * @description       删除回调，返回[id]，return true终止操作
     * @default           无
     */
    onDelete?: (ids: any[], type: 'single' | 'multiple') => Promise<boolean | void> | boolean | void;
    /**
     * @description       详情操作回调，返回数据将替代行数据，return true终止操作
     * @default           无
     */
    onBeforeDetail?: (data: any) => Promise<boolean | void> | boolean | void;
    /**
     * @description       详情页面关闭时回调，return true阻止关闭
     * @default           无
     */
    onDetailClose?: () => Promise<boolean | void> | boolean | void;
    /**
     * @description       下载回调，常用于下载前对表格数据处理，返回导出数据
     * @default           无
     */
    onDownload?: (dataSource: any[] | undefined) => Promise<any[] | void> | any[] | void;
    /**
     * @description       编辑弹窗关闭时回调，返回表单数据，return true阻止弹窗关闭
     * @default           -
     */
    onModalClose?: (data: any) => Promise<boolean | void> | void | boolean;
    /**
     * @description       编辑弹窗销毁时回调，返回表单数据
     * @default           -
     */
    onModalAfterClose?: () => void;
    /**
     * @description       优化项，动态表格时设置不同key，达到重绘组件能力
     * @default           -
     */
    key?: string;
}
export interface columnsProps extends columnProps, ColumnType<any> {
    dataIndex?: string;
}
export interface segmentedProps {
    show?: boolean;
    listTitle?: string;
    selectTitle?: string;
}
export interface SearchBar {
    handleProps: HandleProps;
    form: any;
    data: columnsProps[];
    onSearchBarFinish?: Function;
    resetPagination: Function;
    searchFormSlot?: () => React.ReactElement[];
    searchButtonSlot?: () => React.ReactElement[] | JSX.Element;
    searchText: string;
    containerStyle: defaultContainerStyleProps;
    resetText: string;
    slotData: any[];
    defaultExpand?: boolean;
    hideButtonText?: boolean;
}
export interface defaultContainerStyleProps {
    boxPadding: number;
    background: string | 'none';
    boxShadow: boolean;
    /**
     * @description       表头是否有背景色
     * @default           false
     */
    headerBackground?: boolean;
    /**
     * @description       奇偶行不同色
     * @default           false
     */
    multistory?: boolean;
}
export interface EditModalProps {
    title?: string;
    width?: string | number;
    height?: string | number;
    formData?: any;
    type: disabledEnum;
}
export interface FormTypeProps {
    data: columnsProps;
    type?: string;
    disabled?: boolean;
}
export interface ProTableProps extends SuperTableProps {
    onFinish: (data: any, oldData: any, type: 'add' | 'update') => Promise<boolean | void> | boolean;
    rowKey: string;
    containerStyle: defaultContainerStyleProps;
    rowSelection?: TableRowSelection<any>;
    pagination: any;
    columnsEdit: any[];
    columnsDetail: columnsProps[];
    searchForm: any;
    onSearchBarFinish: any;
    resetPagination: any;
    slotData: any[];
    searchBarData: any;
    openEditModal?: Function;
}
export interface paginationProps {
    current: number;
    pageSize: number;
    total: number;
}
export interface HandleProps {
    active: any;
    selectedRows: any;
    downloadTable: any;
    checkedList: any;
    setSize: any;
    size: any;
    CheckboxData: any;
    onCheckAllChange: any;
    onChange: any;
    readOnly: any;
    setReadOnly: any;
}
