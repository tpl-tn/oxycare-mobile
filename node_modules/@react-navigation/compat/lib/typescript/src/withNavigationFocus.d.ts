import * as React from 'react';
declare type InjectedProps = {
    isFocused: boolean;
};
export default function withNavigationFocus<P extends InjectedProps, C extends React.ComponentType<P>>(Comp: C): {
    ({ onRef, ...rest }: Exclude<P, InjectedProps> & {
        onRef?: (C extends React.ComponentClass<any, any> ? React.Ref<InstanceType<C>> : never) | undefined;
    }): React.ReactElement;
    displayName: string;
};
export {};
