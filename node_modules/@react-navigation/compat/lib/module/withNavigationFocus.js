function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
export default function withNavigationFocus(Comp) {
  const WrappedComponent = ({
    onRef,
    ...rest
  }) => {
    const isFocused = useIsFocused(); // @ts-expect-error: type checking HOC is hard

    return /*#__PURE__*/React.createElement(Comp, _extends({
      ref: onRef,
      isFocused: isFocused
    }, rest));
  };

  WrappedComponent.displayName = "withNavigationFocus(".concat(Comp.displayName || Comp.name, ")");
  return WrappedComponent;
}
//# sourceMappingURL=withNavigationFocus.js.map