import * as NavigationActions from './NavigationActions';
import * as StackActions from './StackActions';
import * as SwitchActions from './SwitchActions';
import * as DrawerActions from './DrawerActions';
// eslint-disable-next-line no-redeclare
export function navigate(options, params, action) {
  if (typeof options === 'string') {
    return NavigationActions.navigate({
      routeName: options,
      params,
      action
    });
  }

  return NavigationActions.navigate(options);
}
export function goBack(fromKey) {
  return NavigationActions.back({
    key: fromKey
  });
}
export function setParams(params) {
  return NavigationActions.setParams({
    params
  });
}
export function reset() {
  return StackActions.reset();
}
export function replace(routeName, params, action) {
  return StackActions.replace({
    routeName,
    params,
    action
  });
}
export function push(routeName, params, action) {
  return StackActions.push({
    routeName,
    params,
    action
  });
}
export function pop(n = 1) {
  return StackActions.pop(typeof n === 'number' ? {
    n
  } : n);
}
export function popToTop() {
  return StackActions.popToTop();
}
export function dismiss() {
  return StackActions.dismiss();
}
export function jumpTo(routeName) {
  return SwitchActions.jumpTo({
    routeName
  });
}
export function openDrawer() {
  return DrawerActions.openDrawer();
}
export function closeDrawer() {
  return DrawerActions.closeDrawer();
}
export function toggleDrawer() {
  return DrawerActions.toggleDrawer();
}
//# sourceMappingURL=helpers.js.map