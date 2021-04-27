"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = navigate;
exports.goBack = goBack;
exports.setParams = setParams;
exports.reset = reset;
exports.replace = replace;
exports.push = push;
exports.pop = pop;
exports.popToTop = popToTop;
exports.dismiss = dismiss;
exports.jumpTo = jumpTo;
exports.openDrawer = openDrawer;
exports.closeDrawer = closeDrawer;
exports.toggleDrawer = toggleDrawer;

var NavigationActions = _interopRequireWildcard(require("./NavigationActions"));

var StackActions = _interopRequireWildcard(require("./StackActions"));

var SwitchActions = _interopRequireWildcard(require("./SwitchActions"));

var DrawerActions = _interopRequireWildcard(require("./DrawerActions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line no-redeclare
function navigate(options, params, action) {
  if (typeof options === 'string') {
    return NavigationActions.navigate({
      routeName: options,
      params,
      action
    });
  }

  return NavigationActions.navigate(options);
}

function goBack(fromKey) {
  return NavigationActions.back({
    key: fromKey
  });
}

function setParams(params) {
  return NavigationActions.setParams({
    params
  });
}

function reset() {
  return StackActions.reset();
}

function replace(routeName, params, action) {
  return StackActions.replace({
    routeName,
    params,
    action
  });
}

function push(routeName, params, action) {
  return StackActions.push({
    routeName,
    params,
    action
  });
}

function pop(n = 1) {
  return StackActions.pop(typeof n === 'number' ? {
    n
  } : n);
}

function popToTop() {
  return StackActions.popToTop();
}

function dismiss() {
  return StackActions.dismiss();
}

function jumpTo(routeName) {
  return SwitchActions.jumpTo({
    routeName
  });
}

function openDrawer() {
  return DrawerActions.openDrawer();
}

function closeDrawer() {
  return DrawerActions.closeDrawer();
}

function toggleDrawer() {
  return DrawerActions.toggleDrawer();
}
//# sourceMappingURL=helpers.js.map