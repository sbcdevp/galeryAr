/**
 * @barba/core/utils/url
 * <br><br>
 * ## URL utils.
 *
 * - Collect and structure informations from URLs
 *
 * @module core/utils/url
 */
/***/
import { IUrlBase } from '../defs';
/**
 * Get location href.
 */
export declare const getHref: () => string;
/**
 * Get location origin.
 */
export declare const getOrigin: () => string;
/**
 * Get port based on location.
 */
export declare const getPort: (p?: string) => number;
/**
 * Get path from URL.
 */
export declare const getPath: (url: string) => string;
/**
 * Get query object from URL.
 */
/**
 * Get hash from URL.
 */
/**
 * Parse URL for path, query and hash.
 */
export declare const parse: (url: string) => IUrlBase;
/**
 * Parse a query string to object.
 */
export declare const parseQuery: (str: string) => {};
/**
 * Clean URL, remove "hash".
 */
export declare const clean: (url: string) => string;
/**
 * Clean URL, remove "origin".
 */
