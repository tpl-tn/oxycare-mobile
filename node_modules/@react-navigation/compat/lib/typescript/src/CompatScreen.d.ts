import * as React from 'react';
declare type Props = {
    getComponent: () => React.ComponentType<any>;
};
declare function CompatScreen({ getComponent }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof CompatScreen>;
export default _default;
