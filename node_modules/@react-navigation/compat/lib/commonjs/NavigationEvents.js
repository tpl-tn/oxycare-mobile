"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavigationEvents;

var React = _interopRequireWildcard(require("react"));

var _native = require("@react-navigation/native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function NavigationEvents(props) {
  const navigation = (0, _native.useNavigation)();
  const propsRef = React.useRef(props);
  React.useEffect(() => {
    propsRef.current = props;
  });
  React.useEffect(() => {
    const unsubFocus = navigation.addListener('focus', () => {
      var _propsRef$current$onW, _propsRef$current;

      (_propsRef$current$onW = (_propsRef$current = propsRef.current).onWillFocus) === null || _propsRef$current$onW === void 0 ? void 0 : _propsRef$current$onW.call(_propsRef$current);
    });
    const unsubBlur = navigation.addListener('blur', () => {
      var _propsRef$current$onW2, _propsRef$current2;

      (_propsRef$current$onW2 = (_propsRef$current2 = propsRef.current).onWillBlur) === null || _propsRef$current$onW2 === void 0 ? void 0 : _propsRef$current$onW2.call(_propsRef$current2);
    }); // @ts-expect-error: transitionEnd may not exist on this navigator

    const unsubTransitionEnd = navigation.addListener('transitionEnd', () => {
      if (navigation.isFocused()) {
        var _propsRef$current$onD, _propsRef$current3;

        (_propsRef$current$onD = (_propsRef$current3 = propsRef.current).onDidFocus) === null || _propsRef$current$onD === void 0 ? void 0 : _propsRef$current$onD.call(_propsRef$current3);
      } else {
        var _propsRef$current$onD2, _propsRef$current4;

        (_propsRef$current$onD2 = (_propsRef$current4 = propsRef.current).onDidBlur) === null || _propsRef$current$onD2 === void 0 ? void 0 : _propsRef$current$onD2.call(_propsRef$current4);
      }
    });
    return () => {
      unsubFocus();
      unsubBlur();
      unsubTransitionEnd();
    };
  }, [navigation]);
  return null;
}
//# sourceMappingURL=NavigationEvents.js.map