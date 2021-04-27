import * as helpers from './helpers';
export default function createCompatNavigationProp(navigation, state, context, isFirstRouteInParent) {
  var _state$params;

  context.parent = context.parent || {};
  context.subscriptions = context.subscriptions || {
    didFocus: new Map(),
    didBlur: new Map(),
    refocus: new Map()
  };
  return { ...navigation,
    ...Object.entries(helpers).reduce((acc, [name, method]) => {
      if (name in navigation) {
        acc[name] = (...args) => navigation.dispatch(method(...args));
      }

      return acc;
    }, {}),
    original: navigation,

    addListener(type, callback) {
      let unsubscribe;

      switch (type) {
        case 'willFocus':
          unsubscribe = navigation.addListener('focus', callback);
          break;

        case 'willBlur':
          unsubscribe = navigation.addListener('blur', callback);
          break;

        case 'didFocus':
          {
            const listener = () => {
              if (navigation.isFocused()) {
                callback();
              }
            }; // @ts-expect-error: this event may not exist in this navigator


            unsubscribe = navigation.addListener('transitionEnd', listener);
            context.subscriptions.didFocus.set(callback, unsubscribe);
            break;
          }

        case 'didBlur':
          {
            const listener = () => {
              if (!navigation.isFocused()) {
                callback();
              }
            }; // @ts-expect-error: this event may not exist in this navigator


            unsubscribe = navigation.addListener('transitionEnd', listener);
            context.subscriptions.didBlur.set(callback, unsubscribe);
            break;
          }

        case 'refocus':
          {
            const listener = () => {
              if (navigation.isFocused()) {
                callback();
              }
            }; // @ts-expect-error: this event may not exist in this navigator


            unsubscribe = navigation.addListener('tabPress', listener);
            context.subscriptions.refocus.set(callback, unsubscribe);
            break;
          }

        case 'action':
          throw new Error("Listening to 'action' events is not supported.");

        default:
          unsubscribe = navigation.addListener(type, callback);
      }

      const subscription = () => unsubscribe();

      subscription.remove = unsubscribe;
      return subscription;
    },

    removeListener(type, callback) {
      context.subscriptions = context.subscriptions || {};

      switch (type) {
        case 'willFocus':
          navigation.removeListener('focus', callback);
          break;

        case 'willBlur':
          navigation.removeListener('blur', callback);
          break;

        case 'didFocus':
          {
            const unsubscribe = context.subscriptions.didFocus.get(callback);
            unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe();
            break;
          }

        case 'didBlur':
          {
            const unsubscribe = context.subscriptions.didBlur.get(callback);
            unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe();
            break;
          }

        case 'refocus':
          {
            const unsubscribe = context.subscriptions.refocus.get(callback);
            unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe();
            break;
          }

        case 'action':
          throw new Error("Listening to 'action' events is not supported.");

        default:
          navigation.removeListener(type, callback);
      }
    },

    state: {
      key: state.key,
      // @ts-expect-error
      routeName: state.name,
      // @ts-expect-error
      params: (_state$params = state.params) !== null && _state$params !== void 0 ? _state$params : {},

      get index() {
        var _state$state;

        // @ts-expect-error
        if (state.index !== undefined) {
          // @ts-expect-error
          return state.index;
        }

        console.warn("Looks like you are using 'navigation.state.index' in your code. Accessing child navigation state for a route is not safe and won't work correctly. You should refactor it not to access the 'index' property in the child navigation state."); // @ts-expect-error

        return (_state$state = state.state) === null || _state$state === void 0 ? void 0 : _state$state.index;
      },

      get routes() {
        var _state$state2;

        // @ts-expect-error
        if (state.routes !== undefined) {
          // @ts-expect-error
          return state.routes;
        }

        console.warn("Looks like you are using 'navigation.state.routes' in your code. Accessing child navigation state for a route is not safe and won't work correctly. You should refactor it not to access the 'routes' property in the child navigation state."); // @ts-expect-error

        return (_state$state2 = state.state) === null || _state$state2 === void 0 ? void 0 : _state$state2.routes;
      }

    },

    getParam(paramName, defaultValue) {
      // @ts-expect-error
      const params = state.params;

      if (params && paramName in params) {
        return params[paramName];
      }

      return defaultValue;
    },

    isFirstRouteInParent() {
      if (typeof isFirstRouteInParent === 'boolean') {
        return isFirstRouteInParent;
      }

      const {
        routes
      } = navigation.dangerouslyGetState();
      return routes[0].key === state.key;
    },

    dangerouslyGetParent() {
      const parent = navigation.dangerouslyGetParent();

      if (parent) {
        return createCompatNavigationProp(parent, navigation.dangerouslyGetState(), context.parent);
      }

      return undefined;
    }

  };
}
//# sourceMappingURL=createCompatNavigationProp.js.map