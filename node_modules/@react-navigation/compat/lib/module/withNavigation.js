function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import useCompatNavigation from './useCompatNavigation';
export default function withNavigation(Comp) {
  const WrappedComponent = ({
    onRef,
    ...rest
  }) => {
    const navigation = useCompatNavigation(); // @ts-expect-error: type checking HOC is hard

    return /*#__PURE__*/React.createElement(Comp, _extends({
      ref: onRef,
      navigation: navigation
    }, rest));
  };

  WrappedComponent.displayName = "withNavigation(".concat(Comp.displayName || Comp.name, ")");
  return WrappedComponent;
}
//# sourceMappingURL=withNavigation.js.map