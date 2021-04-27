import { NavigationProp, ParamListBase } from '@react-navigation/native';
import type { CompatNavigationProp } from './types';
export default function useCompatNavigation<T extends NavigationProp<ParamListBase>>(): CompatNavigationProp<T, T extends NavigationProp<infer P, any, any, any, any> ? P : Record<string, object | undefined>, Extract<T extends NavigationProp<any, infer R, Readonly<{
    key: string;
    index: number;
    routeNames: string[];
    history?: unknown[] | undefined;
    routes: (Readonly<{
        key: string;
        name: string;
    }> & Readonly<{
        params?: Readonly<any> | undefined;
    }> & {
        state?: Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
            }> & Readonly<{
                params?: object | undefined;
            }> & any)[];
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
            }> & any)[];
            type: string;
            stale: false;
        }>> | undefined;
    })[];
    type: string;
    stale: false;
}>, {}, {}> ? R : string, string>>;
