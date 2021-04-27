import { TabActions } from '@react-navigation/native';
export function jumpTo({
  routeName,
  key
}) {
  if (key === undefined) {
    return TabActions.jumpTo(routeName);
  } else {
    return { ...TabActions.jumpTo(routeName),
      target: key
    };
  }
}
//# sourceMappingURL=SwitchActions.js.map