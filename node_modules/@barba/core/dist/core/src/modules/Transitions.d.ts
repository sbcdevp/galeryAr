/**
 * @barba/core/modules/transitions
 * <br><br>
 * ## Transitions manager.
 *
 * - Handle hooks and transition lifecycle
 *
 * @module core/modules/transitions
 * @preferred
 */
import { ITransitionAppear, ITransitionData, ITransitionFilters, ITransitionPage, Wrapper } from '../defs';
import { Logger } from './Logger';
import { Store } from './Store';
export declare class Transitions {
    logger: Logger;
    store: Store;
    private _running;
    constructor(transitions?: ITransitionPage[]);
    /**
     * Get resolved transition
     *
     * - based on data
     */
    get(data: ITransitionData, filters?: ITransitionFilters): ITransitionAppear | ITransitionPage;
    /**
     * Animation running status.
     */
    isRunning: boolean;
    /**
     * Check for registered appear transition(s).
     */
    readonly hasAppear: boolean;
    /**
     * Check for registered self transition.
     */
    readonly hasSelf: boolean;
    /**
     * ### Wait indicator.
     *
     * Tells Barba to get next page data<br>
     * before starting the resolution<br>
     * because some registered transitions need<br>
     * next page data to be resolved (eg: `sync: true`, `to: { namespace }`, …)
     */
    readonly shouldWait: boolean;
    /**
     * ### Do "appear" transition.
     *
     * Hooks: see [[HooksAppear]].
     */
    doAppear({ data, transition, }: {
        data: ITransitionData;
        transition: ITransitionAppear;
    }): Promise<void>;
    /**
     * ### Do "page" transition.
     *
     * Hooks: see [[HooksPage]].
     *
     * `sync: false` (default) order:
     *
     * 1. before
     * 2. beforeLeave
     * 3. leave
     * 4. afterLeave
     * 5. beforeEnter
     * 6. enter
     * 7. afterEnter
     * 8. after
     *
     * `sync: true` order:
     *
     * 1. before
     * 2. beforeLeave
     * 3. beforeEnter
     * 4. leave & enter
     * 5. afterLeave
     * 6. afterEnter
     * 7. after
     */
    doPage({ data, transition, page, wrapper, }: {
        data: ITransitionData;
        transition: ITransitionPage;
        page: Promise<string | void>;
        wrapper: Wrapper;
    }): Promise<void>;
    /**
     * Appear hook + async "appear" transition.
     */
    appear(data: ITransitionData, t: ITransitionAppear): Promise<void>;
    /**
     * Leave hook + async "leave" transition.
     */
    leave(data: ITransitionData, t: ITransitionPage): Promise<any>;
    /**
     * Enter hook + async "enter" transition.
     */
    enter(data: ITransitionData, t: ITransitionPage, leaveResult?: any): Promise<void>;
    /**
     * Add next container.
     */
    add(data: ITransitionData, wrapper: Wrapper): Promise<void>;
    /**
     * Remove current container.
     */
    remove(data: ITransitionData): Promise<void>;
    /**
     * Do hooks + async transition methods.
     */
    private _doAsyncHook;
}
