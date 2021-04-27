import { CommonActions, NavigationState } from '@react-navigation/native';
export declare function navigate({ routeName, params, key, action, }: {
    routeName: string;
    params?: object;
    key?: string;
    action?: never;
}): CommonActions.Action;
export declare function back(options?: {
    key?: null | string;
}): {
    type: "GO_BACK";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
        merge?: boolean | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
        merge?: boolean | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "RESET";
    payload: Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | import("@react-navigation/native").PartialState<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>> | (Pick<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "key" | "index" | "routeNames" | "history" | "type" | "stale"> & {
        routes: Pick<import("@react-navigation/native").Route<string, object | undefined>, "params" | "name">[];
    }) | undefined;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | ((state: NavigationState) => {
    source: string | null | undefined;
    target: string;
    type: "GO_BACK";
} | {
    source: string | null | undefined;
    target: string;
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
        merge?: boolean | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
        merge?: boolean | undefined;
    };
} | {
    source: string | null | undefined;
    target: string;
    type: "RESET";
    payload: Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | import("@react-navigation/native").PartialState<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>> | (Pick<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "key" | "index" | "routeNames" | "history" | "type" | "stale"> & {
        routes: Pick<import("@react-navigation/native").Route<string, object | undefined>, "params" | "name">[];
    }) | undefined;
} | {
    source: string | null | undefined;
    target: string;
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
});
export declare function setParams({ params, key, }: {
    params: object;
    key?: string;
}): CommonActions.Action;
