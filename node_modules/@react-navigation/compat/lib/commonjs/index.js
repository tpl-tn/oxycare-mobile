"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  NavigationActions: true,
  StackActions: true,
  DrawerActions: true,
  SwitchActions: true,
  createCompatNavigatorFactory: true,
  createCompatNavigationProp: true,
  createSwitchNavigator: true,
  withNavigation: true,
  withNavigationFocus: true,
  NavigationEvents: true
};
Object.defineProperty(exports, "createCompatNavigatorFactory", {
  enumerable: true,
  get: function () {
    return _createCompatNavigatorFactory.default;
  }
});
Object.defineProperty(exports, "createCompatNavigationProp", {
  enumerable: true,
  get: function () {
    return _createCompatNavigationProp.default;
  }
});
Object.defineProperty(exports, "createSwitchNavigator", {
  enumerable: true,
  get: function () {
    return _createSwitchNavigator.default;
  }
});
Object.defineProperty(exports, "withNavigation", {
  enumerable: true,
  get: function () {
    return _withNavigation.default;
  }
});
Object.defineProperty(exports, "withNavigationFocus", {
  enumerable: true,
  get: function () {
    return _withNavigationFocus.default;
  }
});
Object.defineProperty(exports, "NavigationEvents", {
  enumerable: true,
  get: function () {
    return _NavigationEvents.default;
  }
});
exports.SwitchActions = exports.DrawerActions = exports.StackActions = exports.NavigationActions = void 0;

var NavigationActions = _interopRequireWildcard(require("./NavigationActions"));

exports.NavigationActions = NavigationActions;

var StackActions = _interopRequireWildcard(require("./StackActions"));

exports.StackActions = StackActions;

var DrawerActions = _interopRequireWildcard(require("./DrawerActions"));

exports.DrawerActions = DrawerActions;

var SwitchActions = _interopRequireWildcard(require("./SwitchActions"));

exports.SwitchActions = SwitchActions;

var _createCompatNavigatorFactory = _interopRequireDefault(require("./createCompatNavigatorFactory"));

var _createCompatNavigationProp = _interopRequireDefault(require("./createCompatNavigationProp"));

var _createSwitchNavigator = _interopRequireDefault(require("./createSwitchNavigator"));

var _withNavigation = _interopRequireDefault(require("./withNavigation"));

var _withNavigationFocus = _interopRequireDefault(require("./withNavigationFocus"));

var _NavigationEvents = _interopRequireDefault(require("./NavigationEvents"));

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map