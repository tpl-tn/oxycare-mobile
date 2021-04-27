"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openDrawer = openDrawer;
exports.closeDrawer = closeDrawer;
exports.toggleDrawer = toggleDrawer;

var _native = require("@react-navigation/native");

function openDrawer() {
  return _native.DrawerActions.openDrawer();
}

function closeDrawer() {
  return _native.DrawerActions.closeDrawer();
}

function toggleDrawer() {
  return _native.DrawerActions.toggleDrawer();
}
//# sourceMappingURL=DrawerActions.js.map