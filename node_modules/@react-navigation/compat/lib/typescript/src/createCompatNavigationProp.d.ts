import type { NavigationState, PartialState, ParamListBase, NavigationProp, RouteProp } from '@react-navigation/native';
import type { CompatNavigationProp } from './types';
export default function createCompatNavigationProp<NavigationPropType extends NavigationProp<ParamListBase>, ParamList extends ParamListBase = NavigationPropType extends NavigationProp<infer P, any, any, any, any> ? P : ParamListBase>(navigation: NavigationPropType, state: (RouteProp<ParamList, keyof ParamList> & {
    state?: NavigationState | PartialState<NavigationState>;
}) | NavigationState | PartialState<NavigationState>, context: Record<string, any>, isFirstRouteInParent?: boolean): CompatNavigationProp<NavigationPropType>;
