import * as React from 'react';
import ScreenPropsContext from './ScreenPropsContext';
import useCompatNavigation from './useCompatNavigation';

function CompatScreen({
  getComponent
}) {
  const navigation = useCompatNavigation();
  const screenProps = React.useContext(ScreenPropsContext);
  const ScreenComponent = getComponent();
  return /*#__PURE__*/React.createElement(ScreenComponent, {
    navigation: navigation,
    screenProps: screenProps
  });
}

export default /*#__PURE__*/React.memo(CompatScreen);
//# sourceMappingURL=CompatScreen.js.map