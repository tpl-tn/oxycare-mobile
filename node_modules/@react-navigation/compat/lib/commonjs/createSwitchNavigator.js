"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _native = require("@react-navigation/native");

var _createCompatNavigatorFactory = _interopRequireDefault(require("./createCompatNavigatorFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SwitchNavigator(props) {
  const {
    state,
    descriptors
  } = (0, _native.useNavigationBuilder)(_native.TabRouter, props);
  return descriptors[state.routes[state.index].key].render();
}

var _default = (0, _createCompatNavigatorFactory.default)((0, _native.createNavigatorFactory)(SwitchNavigator));

exports.default = _default;
//# sourceMappingURL=createSwitchNavigator.js.map