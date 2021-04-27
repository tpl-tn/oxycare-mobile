function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { NavigationRouteContext } from '@react-navigation/native';
import CompatScreen from './CompatScreen';
import ScreenPropsContext from './ScreenPropsContext';
import createCompatNavigationProp from './createCompatNavigationProp';
export default function createCompatNavigatorFactory(createNavigator) {
  // @ts-expect-error: isCompat may or may not exist
  if (createNavigator.isCompat) {
    throw new Error("The navigator is already in compat mode. You don't need to wrap it in 'createCompatNavigatorFactory'.");
  }

  const createCompatNavigator = (routeConfig, navigationConfig = {}) => {
    const Pair = createNavigator();
    const {
      order,
      defaultNavigationOptions,
      navigationOptions: parentNavigationOptions,
      ...restConfig
    } = navigationConfig;
    const routeNames = order !== undefined ? order : Object.keys(routeConfig);

    function Navigator({
      screenProps
    }) {
      var _React$useContext;

      const parentRouteParams = (_React$useContext = React.useContext(NavigationRouteContext)) === null || _React$useContext === void 0 ? void 0 : _React$useContext.params;
      const screens = React.useMemo(() => routeNames.map(name => {
        let getScreenComponent;
        let initialParams;
        const routeConfigItem = routeConfig[name];

        if ('getScreen' in routeConfigItem) {
          getScreenComponent = routeConfigItem.getScreen;
          initialParams = routeConfigItem.params;
        } else if ('screen' in routeConfigItem) {
          getScreenComponent = () => routeConfigItem.screen;

          initialParams = routeConfigItem.params;
        } else {
          getScreenComponent = () => routeConfigItem;
        }

        const screenOptions = ({
          navigation,
          route
        }) => {
          // @ts-expect-error: navigationOptions may exists on the component, but TS is dumb
          const routeNavigationOptions = routeConfigItem.navigationOptions;
          const screenNavigationOptions = getScreenComponent().navigationOptions;

          if (routeNavigationOptions == null && screenNavigationOptions == null) {
            return undefined;
          }

          const options = typeof routeNavigationOptions === 'function' || typeof screenNavigationOptions === 'function' ? {
            navigation: createCompatNavigationProp(navigation, route, {}),
            navigationOptions: defaultNavigationOptions || {},
            screenProps
          } : {};
          return { ...(typeof routeNavigationOptions === 'function' ? routeNavigationOptions(options) : routeNavigationOptions),
            ...(typeof screenNavigationOptions === 'function' ? screenNavigationOptions(options) : screenNavigationOptions)
          };
        };

        return /*#__PURE__*/React.createElement(Pair.Screen, {
          key: name,
          name: name,
          initialParams: { ...parentRouteParams,
            ...initialParams
          },
          options: screenOptions
        }, () => /*#__PURE__*/React.createElement(CompatScreen, {
          getComponent: getScreenComponent
        }));
      }), [parentRouteParams, screenProps]);
      return /*#__PURE__*/React.createElement(ScreenPropsContext.Provider, {
        value: screenProps
      }, /*#__PURE__*/React.createElement(Pair.Navigator, _extends({}, restConfig, {
        screenOptions: defaultNavigationOptions
      }), screens));
    }

    Navigator.navigationOptions = parentNavigationOptions;
    return Navigator;
  };

  Object.defineProperties(createCompatNavigator, {
    isCompat: {
      get() {
        return true;
      }

    },
    router: {
      get() {
        throw new Error("It's no longer possible to access the router with the 'router' property.");
      },

      set() {
        throw new Error("It's no longer possible to override the router by assigning the 'router' property.");
      }

    }
  });
  return createCompatNavigator;
}
//# sourceMappingURL=createCompatNavigatorFactory.js.map