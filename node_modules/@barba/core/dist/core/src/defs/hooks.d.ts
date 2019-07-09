/**
 * @module typings/core
 */
import { ISchemaPage, Trigger } from '.';
export declare type HooksBarba = 'ready' | 'page' | 'reset' | 'currentAdded' | 'currentRemoved' | 'nextAdded' | 'nextRemoved';
export declare type HooksAppear = 'beforeAppear' | 'appear' | 'afterAppear' | 'appearCanceled';
export declare type HooksPage = 'before' | 'beforeLeave' | 'leave' | 'afterLeave' | 'leaveCanceled' | 'beforeEnter' | 'enter' | 'afterEnter' | 'enterCanceled' | 'after';
export declare type HooksBefore = 'beforeAppear' | 'beforeLeave' | 'beforeEnter';
export declare type HooksAfter = 'afterAppear' | 'afterLeave' | 'afterEnter';
export declare type HooksTransition = HooksAppear | HooksPage;
export declare type HooksView = HooksBefore | HooksAfter;
export declare type HooksAll = HooksBarba | HooksTransition;
export declare type HooksTransitionMap = {
    [key in HooksTransition]?: any;
};
export interface IHookViewData {
    current: ISchemaPage;
    next: ISchemaPage;
    trigger: Trigger;
}
