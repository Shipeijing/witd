/// <reference types="react" />
import { EditModalProps } from '.';
export interface slotProps {
    /**
     * @description       搜索栏按钮插槽
     * @default           -
     */
    searchButtonSlot?: () => React.ReactElement[] | JSX.Element;
    /**
     * @description       搜索栏表单插槽
     * @default           -
     */
    searchFormSlot?: () => React.ReactElement[];
    /**
     * @description       控制栏插槽
     * @default           无
     */
    activeSlot?: () => JSX.Element[] | JSX.Element;
    /**
     * @description       操作栏插槽
     * @default           无
     */
    editSlot?: (data: any, index: number) => JSX.Element[] | JSX.Element;
    /**
     * @description       表单插槽
     * @default           无
     */
    formSlot?: (data: EditModalProps) => JSX.Element[] | JSX.Element;
    /**
     * @description       弹窗底部插槽
     * @default           无
     */
    modalFooterSlot?: (data: EditModalProps) => JSX.Element[] | JSX.Element;
}
declare const _default: (props: slotProps) => void;
export default _default;
