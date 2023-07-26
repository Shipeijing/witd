export interface activeProps {
    /**
     * @description       表格标题
     * @default           无
     */
    title?: string;
    /**
     * @description       操作栏开关
     * @default           false
     */
    edit?: boolean;
    /**
     * @description       操作栏宽度
     * @default           180
     */
    width?: number | string;
    /**
     * @description       添加功能开关
     * @default           false
     */
    add?: boolean;
    /**
     * @description       编辑功能开关
     * @default           false
     */
    update?: boolean;
    /**
     * @description       删除功能开关
     * @default           false
     */
    delete?: boolean;
    /**
     * @description       批量删除开关
     * @default           false
     */
    deleteSelect?: boolean;
    /**
     * @description       删除功能无二次确认弹窗
     * @default           false
     */
    deleteNoConfirm?: boolean;
    /**
     * @description       添加按钮文字
     * @default           添加
     */
    addText?: string;
    /**
     * @description       编辑按钮文字
     * @default           编辑
     */
    editText?: string;
    /**
     * @description       删除按钮文字
     * @default           删除
     */
    deleteText?: string;
    /**
     * @description       隐藏控制栏
     * @default           无
     */
    hideHandle?: boolean;
    /**
     * @description       隐藏下载按钮
     * @default           false
     */
    hideDownload?: boolean;
    /**
     * @description       隐藏选中提示栏
     * @default           无
     */
    hideAlert?: boolean;
    /**
     * @description       隐藏模式切换按钮
     * @default           false
     */
    hideMode?: boolean;
    /**
     * @description       隐藏操作栏
     * @default           false
     */
    hide?: boolean;
    /**
     * @description       操作列改成图标显示
     * @default           false
     */
    showIcon?: boolean;
    /**
     * @description       删除弹窗配置
     * @default           {title:'',content:''}
     */
    deleteProps?: DeleteProps;
}
interface DeleteProps {
    title?: string;
    content?: string;
    type?: 'success' | 'info' | 'warning' | 'error' | 'question' | 'none';
}
declare const _default: (props: activeProps) => void;
export default _default;
