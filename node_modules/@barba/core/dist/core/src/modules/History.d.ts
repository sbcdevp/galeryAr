/**
 * @barba/core/modules/history
 * <br><br>
 * ## History manager.
 *
 * - Keep track of the navigation history
 *
 * @module core/modules/history
 * @preferred
 */
/***/
/**
 * History item.
 *
 * @property namespace
 * @property URL
 */
interface IHistoryItem {
    /** namespace */
    ns: string | undefined;
    /** URL */
    url: string;
}
export declare class History {
    private _state;
    /**
     * Add a new state.
     */
    add(url: string, ns: string): void;
    /**
     * Remove last state.
     */
    remove(): void;
    /**
     * Add new state then update browser history.
     */
    push(url: string, ns: string): void;
    /**
     * Remove last state then go back.
     */
    cancel(): void;
    /**
     * Get the current state.
     */
    readonly current: IHistoryItem;
    /**
     * Get the previous state.
     */
    readonly previous: IHistoryItem | null;
}
export {};
