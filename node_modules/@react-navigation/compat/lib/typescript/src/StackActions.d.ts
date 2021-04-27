import { CommonActions, StackActionType } from '@react-navigation/native';
export declare function reset(): CommonActions.Action;
export declare function replace({ routeName, params, key, newKey, action, }: {
    routeName: string;
    params?: object;
    key?: string;
    newKey?: string;
    action?: never;
}): StackActionType;
export declare function push({ routeName, params, action, }: {
    routeName: string;
    params?: object;
    action?: never;
}): StackActionType;
export declare function pop({ n }: {
    n: number;
}): StackActionType;
export declare function popToTop(): StackActionType;
export declare function dismiss(): CommonActions.Action;
