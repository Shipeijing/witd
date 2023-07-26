import React, { ReactNode } from 'react';
interface Props {
    open: boolean;
    height?: string | number;
    children: ReactNode;
}
declare const _default: ({ open, ...e }: Props) => React.JSX.Element;
export default _default;
