"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jumpTo = jumpTo;

var _native = require("@react-navigation/native");

function jumpTo({
  routeName,
  key
}) {
  if (key === undefined) {
    return _native.TabActions.jumpTo(routeName);
  } else {
    return { ..._native.TabActions.jumpTo(routeName),
      target: key
    };
  }
}
//# sourceMappingURL=SwitchActions.js.map