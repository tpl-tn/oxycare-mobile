import { useNavigationBuilder, createNavigatorFactory, TabRouter } from '@react-navigation/native';
import createCompatNavigatorFactory from './createCompatNavigatorFactory';

function SwitchNavigator(props) {
  const {
    state,
    descriptors
  } = useNavigationBuilder(TabRouter, props);
  return descriptors[state.routes[state.index].key].render();
}

export default createCompatNavigatorFactory(createNavigatorFactory(SwitchNavigator));
//# sourceMappingURL=createSwitchNavigator.js.map