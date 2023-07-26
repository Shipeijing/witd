import React, { JSXElementConstructor, ReactElement, SyntheticEvent } from 'react';
import './styles.less';
interface Props {
    modalKey: string;
    mNumber: number;
    _close: any;
    maskStyle?: React.CSSProperties;
    maskProps?: React.HTMLAttributes<HTMLDivElement>;
    left: string | number;
    top: string | number;
    visible: boolean;
    getContainer?: ReactElement<any, string | JSXElementConstructor<any>>[] | any;
    destroyOnClose?: boolean;
    setVisible: Function;
    loading?: boolean;
    center?: boolean;
    width: string | number;
    height: string | number;
    onCancel: (e: SyntheticEvent<Element, Event>) => any;
}
declare const _default: ({ maskStyle, maskProps, visible, setVisible, ...e }: Props) => React.JSX.Element;
export default _default;
