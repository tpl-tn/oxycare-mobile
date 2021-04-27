"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = navigate;
exports.back = back;
exports.setParams = setParams;

var _native = require("@react-navigation/native");

function navigate({
  routeName,
  params,
  key,
  action
}) {
  if (action !== undefined) {
    throw new Error('Sub-actions are not supported for `navigate`. Remove the `action` key from the options.');
  }

  return _native.CommonActions.navigate({
    name: routeName,
    key: key,
    params: params
  });
}

function back(options) {
  return (options === null || options === void 0 ? void 0 : options.key) != null ? state => ({ ..._native.CommonActions.goBack(),
    source: options.key,
    target: state.key
  }) : _native.CommonActions.goBack();
}

function setParams({
  params,
  key
}) {
  return { ..._native.CommonActions.setParams(params),
    ...(key !== undefined ? {
      source: key
    } : null)
  };
}
//# sourceMappingURL=NavigationActions.js.map