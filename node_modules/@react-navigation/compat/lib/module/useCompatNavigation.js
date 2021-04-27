import * as React from 'react';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
import createCompatNavigationProp from './createCompatNavigationProp';
export default function useCompatNavigation() {
  const navigation = useNavigation();
  const route = useRoute();
  const isFirstRouteInParent = useNavigationState(state => state.routes[0].key === route.key);
  const context = React.useRef({});
  return React.useMemo(() => createCompatNavigationProp(navigation, route, context.current, isFirstRouteInParent), [isFirstRouteInParent, navigation, route]);
}
//# sourceMappingURL=useCompatNavigation.js.map