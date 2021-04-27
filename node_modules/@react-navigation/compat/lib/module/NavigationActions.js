import { CommonActions } from '@react-navigation/native';
export function navigate({
  routeName,
  params,
  key,
  action
}) {
  if (action !== undefined) {
    throw new Error('Sub-actions are not supported for `navigate`. Remove the `action` key from the options.');
  }

  return CommonActions.navigate({
    name: routeName,
    key: key,
    params: params
  });
}
export function back(options) {
  return (options === null || options === void 0 ? void 0 : options.key) != null ? state => ({ ...CommonActions.goBack(),
    source: options.key,
    target: state.key
  }) : CommonActions.goBack();
}
export function setParams({
  params,
  key
}) {
  return { ...CommonActions.setParams(params),
    ...(key !== undefined ? {
      source: key
    } : null)
  };
}
//# sourceMappingURL=NavigationActions.js.map