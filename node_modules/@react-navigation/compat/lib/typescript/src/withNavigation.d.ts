import * as React from 'react';
import type { NavigationProp, ParamListBase } from '@react-navigation/native';
import type { CompatNavigationProp } from './types';
declare type InjectedProps<T extends NavigationProp<ParamListBase>> = {
    navigation: CompatNavigationProp<T>;
};
export default function withNavigation<T extends NavigationProp<ParamListBase>, P extends InjectedProps<T>, C extends React.ComponentType<P>>(Comp: C): {
    ({ onRef, ...rest }: Exclude<P, InjectedProps<T>> & {
        onRef?: (C extends React.ComponentClass<any, any> ? React.Ref<InstanceType<C>> : never) | undefined;
    }): React.ReactElement;
    displayName: string;
};
export {};
