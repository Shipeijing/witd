export interface searchBarProps {
    /**
     * @description       搜索栏展开默认值
     * @default           false
     */
    defaultExpand?: boolean;
    /**
     * @description       搜索栏搜索按钮文字
     * @default           搜索
     */
    searchText?: string;
    /**
     * @description       搜索栏重置按钮文字
     * @default           重置
     */
    resetText?: string;
    /**
     * @description       隐藏按钮文字
     * @default           false
     */
    hideButtonText?: boolean;
}
declare const _default: (props: searchBarProps) => void;
export default _default;
