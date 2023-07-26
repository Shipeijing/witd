import React from 'react';
import { NavigationProps } from '..';
import '../styles.less';
interface Props extends NavigationProps {
    selectRoute: any;
    setSelecRoute: any;
}
declare const _default: ({ routes, selectRoute, setSelecRoute }: Props) => React.JSX.Element;
export default _default;
