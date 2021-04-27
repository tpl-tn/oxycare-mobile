/// <reference types="react" />
import { DefaultNavigatorOptions, TabRouterOptions } from '@react-navigation/native';
declare type Props = DefaultNavigatorOptions<{}> & TabRouterOptions;
declare const _default: <NavigationPropType extends import("@react-navigation/native").NavigationProp<any, any, any, any, any>, ParamList extends Record<string, object | undefined> = NavigationPropType extends import("@react-navigation/native").NavigationProp<infer P, any, any, any, any> ? P : Record<string, object | undefined>, ScreenOptions extends {} = NavigationPropType extends import("@react-navigation/native").NavigationProp<any, any, any, infer O, {}> ? O : {}, NavigationConfig extends {} = (Pick<Props, "backBehavior"> & import("@react-navigation/native").DefaultRouterOptions<string> & {
    children: import("react").ReactNode;
    screenOptions?: {} | ((props: {
        route: import("@react-navigation/native").Route<string, object | undefined>;
        navigation: any;
    }) => {}) | undefined;
}) | import("react").PropsWithChildren<Pick<Props, "backBehavior"> & import("@react-navigation/native").DefaultRouterOptions<string> & {
    children: import("react").ReactNode;
    screenOptions?: {} | ((props: {
        route: import("@react-navigation/native").Route<string, object | undefined>;
        navigation: any;
    }) => {}) | undefined;
}>>(routeConfig: import("./types").CompatRouteConfig<NavigationPropType, NavigationPropType extends import("@react-navigation/native").NavigationProp<infer P_1, any, any, any, any> ? P_1 : Record<string, object | undefined>>, navigationConfig?: Partial<Pick<NavigationConfig, Exclude<keyof NavigationConfig, "screenOptions">>> & {
    order?: Extract<keyof ParamList, string>[] | undefined;
    defaultNavigationOptions?: ScreenOptions | undefined;
    navigationOptions?: Record<string, any> | undefined;
}) => {
    ({ screenProps }: {
        screenProps?: unknown;
    }): JSX.Element;
    navigationOptions: Record<string, any> | undefined;
};
export default _default;
