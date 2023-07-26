import React from 'react';
import { NoteProps } from './useNote';
interface Props extends NoteProps {
    /**
     * @description       控制弹窗显示
     * @default           false
     */
    visible: boolean;
}
export default function Modal(props: Props): React.JSX.Element;
export {};
