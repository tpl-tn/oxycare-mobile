"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = reset;
exports.replace = replace;
exports.push = push;
exports.pop = pop;
exports.popToTop = popToTop;
exports.dismiss = dismiss;

var _native = require("@react-navigation/native");

function reset() {
  throw new Error('The legacy `reset` action is not supported. Use the new reset API by accessing the original navigation object at `navigation.original`.');
}

function replace({
  routeName,
  params,
  key,
  newKey,
  action
}) {
  if (action !== undefined) {
    throw new Error('Sub-actions are not supported for `replace`. Remove the `action` key from the options.');
  }

  return {
    type: 'REPLACE',
    payload: {
      name: routeName,
      key: newKey,
      params
    },
    ...(key !== undefined ? {
      source: key
    } : null)
  };
}

function push({
  routeName,
  params,
  action
}) {
  if (action !== undefined) {
    throw new Error('Sub-actions are not supported for `push`. Remove the `action` key from the options.');
  }

  return _native.StackActions.push(routeName, params);
}

function pop({
  n = 1
}) {
  return _native.StackActions.pop(n);
}

function popToTop() {
  return _native.StackActions.popToTop();
}

function dismiss() {
  throw new Error('The legacy `dismiss` action is not supported.');
}
//# sourceMappingURL=StackActions.js.map