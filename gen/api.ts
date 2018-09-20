/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Ailurus API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://localhost".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface CoordinateInt2D
 */
export interface CoordinateInt2D {
    /**
     * 
     * @type {number}
     * @memberof CoordinateInt2D
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof CoordinateInt2D
     */
    y?: number;
}

/**
 * 
 * @export
 * @interface GlobalInstructionCoordinateInt2D
 */
export interface GlobalInstructionCoordinateInt2D {
    /**
     * 
     * @type {string}
     * @memberof GlobalInstructionCoordinateInt2D
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalInstructionCoordinateInt2D
     */
    droneName?: string;
    /**
     * 
     * @type {CoordinateInt2D}
     * @memberof GlobalInstructionCoordinateInt2D
     */
    destination?: CoordinateInt2D;
}

/**
 * 
 * @export
 * @interface IDroneDtoCoordinateInt2D
 */
export interface IDroneDtoCoordinateInt2D {
    /**
     * 
     * @type {string}
     * @memberof IDroneDtoCoordinateInt2D
     */
    name?: string;
    /**
     * 
     * @type {IInstructionCoordinateInt2D}
     * @memberof IDroneDtoCoordinateInt2D
     */
    lastInstruction?: IInstructionCoordinateInt2D;
    /**
     * 
     * @type {CoordinateInt2D}
     * @memberof IDroneDtoCoordinateInt2D
     */
    currentPosition?: CoordinateInt2D;
    /**
     * 
     * @type {number}
     * @memberof IDroneDtoCoordinateInt2D
     */
    state?: IDroneDtoCoordinateInt2D.StateEnum;
    /**
     * 
     * @type {number}
     * @memberof IDroneDtoCoordinateInt2D
     */
    speed?: number;
    /**
     * 
     * @type {number}
     * @memberof IDroneDtoCoordinateInt2D
     */
    storageSize?: number;
    /**
     * 
     * @type {ResourceQuantity}
     * @memberof IDroneDtoCoordinateInt2D
     */
    storage?: ResourceQuantity;
}

/**
 * @export
 * @namespace IDroneDtoCoordinateInt2D
 */
export namespace IDroneDtoCoordinateInt2D {
    /**
     * @export
     * @enum {string}
     */
    export enum StateEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}

/**
 * 
 * @export
 * @interface IInstructionCoordinateInt2D
 */
export interface IInstructionCoordinateInt2D {
    /**
     * 
     * @type {string}
     * @memberof IInstructionCoordinateInt2D
     */
    type?: string;
    /**
     * 
     * @type {Date}
     * @memberof IInstructionCoordinateInt2D
     */
    startedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof IInstructionCoordinateInt2D
     */
    endAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof IInstructionCoordinateInt2D
     */
    duration?: number;
    /**
     * 
     * @type {number}
     * @memberof IInstructionCoordinateInt2D
     */
    progression?: number;
    /**
     * 
     * @type {Date}
     * @memberof IInstructionCoordinateInt2D
     */
    abortedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof IInstructionCoordinateInt2D
     */
    isAborted?: boolean;
}

/**
 * 
 * @export
 * @interface IItemCoordinateInt2D
 */
export interface IItemCoordinateInt2D {
    /**
     * 
     * @type {string}
     * @memberof IItemCoordinateInt2D
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof IItemCoordinateInt2D
     */
    name?: string;
    /**
     * 
     * @type {CoordinateInt2D}
     * @memberof IItemCoordinateInt2D
     */
    position?: CoordinateInt2D;
}

/**
 * 
 * @export
 * @interface IMapInfoCoordinateInt2D
 */
export interface IMapInfoCoordinateInt2D {
    /**
     * 
     * @type {string}
     * @memberof IMapInfoCoordinateInt2D
     */
    name?: string;
    /**
     * 
     * @type {TupleCoordinateInt2DCoordinateInt2D}
     * @memberof IMapInfoCoordinateInt2D
     */
    dimensions?: TupleCoordinateInt2DCoordinateInt2D;
    /**
     * 
     * @type {CoordinateInt2D}
     * @memberof IMapInfoCoordinateInt2D
     */
    droneSpawnPoint?: CoordinateInt2D;
    /**
     * 
     * @type {Array&lt;IItemCoordinateInt2D&gt;}
     * @memberof IMapInfoCoordinateInt2D
     */
    items?: Array<IItemCoordinateInt2D>;
}

/**
 * 
 * @export
 * @interface IPlayerContextDtoCoordinateInt2D
 */
export interface IPlayerContextDtoCoordinateInt2D {
    /**
     * 
     * @type {Array&lt;IDroneDtoCoordinateInt2D&gt;}
     * @memberof IPlayerContextDtoCoordinateInt2D
     */
    drones?: Array<IDroneDtoCoordinateInt2D>;
    /**
     * 
     * @type {string}
     * @memberof IPlayerContextDtoCoordinateInt2D
     */
    playerName?: string;
    /**
     * 
     * @type {Array&lt;ResourceQuantity&gt;}
     * @memberof IPlayerContextDtoCoordinateInt2D
     */
    resources?: Array<ResourceQuantity>;
}

/**
 * 
 * @export
 * @interface ResourceQuantity
 */
export interface ResourceQuantity {
    /**
     * 
     * @type {number}
     * @memberof ResourceQuantity
     */
    resource?: ResourceQuantity.ResourceEnum;
    /**
     * 
     * @type {number}
     * @memberof ResourceQuantity
     */
    quantity?: number;
}

/**
 * @export
 * @namespace ResourceQuantity
 */
export namespace ResourceQuantity {
    /**
     * @export
     * @enum {string}
     */
    export enum ResourceEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}

/**
 * 
 * @export
 * @interface TupleCoordinateInt2DCoordinateInt2D
 */
export interface TupleCoordinateInt2DCoordinateInt2D {
    /**
     * 
     * @type {CoordinateInt2D}
     * @memberof TupleCoordinateInt2DCoordinateInt2D
     */
    item1?: CoordinateInt2D;
    /**
     * 
     * @type {CoordinateInt2D}
     * @memberof TupleCoordinateInt2DCoordinateInt2D
     */
    item2?: CoordinateInt2D;
}


/**
 * AilurusApi - fetch parameter creator
 * @export
 */
export const AilurusApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Array&lt;GlobalInstructionCoordinateInt2D&gt;} instructions 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instructionsPost(instructions: Array<GlobalInstructionCoordinateInt2D>, options: any = {}): FetchArgs {
            // verify required parameter 'instructions' is not null or undefined
            if (instructions === null || instructions === undefined) {
                throw new RequiredError('instructions','Required parameter instructions was null or undefined when calling instructionsPost.');
            }
            const localVarPath = `/instructions`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Array&lt;GlobalInstructionCoordinateInt2D&gt;" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(instructions || {}) : (instructions || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mapGet(options: any = {}): FetchArgs {
            const localVarPath = `/map`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playerContextGet(options: any = {}): FetchArgs {
            const localVarPath = `/playerContext`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AilurusApi - functional programming interface
 * @export
 */
export const AilurusApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Array&lt;GlobalInstructionCoordinateInt2D&gt;} instructions 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instructionsPost(instructions: Array<GlobalInstructionCoordinateInt2D>, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<string>> {
            const localVarFetchArgs = AilurusApiFetchParamCreator(configuration).instructionsPost(instructions, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mapGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<IMapInfoCoordinateInt2D> {
            const localVarFetchArgs = AilurusApiFetchParamCreator(configuration).mapGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playerContextGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<IPlayerContextDtoCoordinateInt2D> {
            const localVarFetchArgs = AilurusApiFetchParamCreator(configuration).playerContextGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AilurusApi - factory interface
 * @export
 */
export const AilurusApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {Array&lt;GlobalInstructionCoordinateInt2D&gt;} instructions 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instructionsPost(instructions: Array<GlobalInstructionCoordinateInt2D>, options?: any) {
            return AilurusApiFp(configuration).instructionsPost(instructions, options)(fetch, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mapGet(options?: any) {
            return AilurusApiFp(configuration).mapGet(options)(fetch, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playerContextGet(options?: any) {
            return AilurusApiFp(configuration).playerContextGet(options)(fetch, basePath);
        },
    };
};

/**
 * AilurusApi - object-oriented interface
 * @export
 * @class AilurusApi
 * @extends {BaseAPI}
 */
export class AilurusApi extends BaseAPI {
    /**
     * 
     * @param {} instructions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AilurusApi
     */
    public instructionsPost(instructions: Array<GlobalInstructionCoordinateInt2D>, options?: any) {
        return AilurusApiFp(this.configuration).instructionsPost(instructions, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AilurusApi
     */
    public mapGet(options?: any) {
        return AilurusApiFp(this.configuration).mapGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AilurusApi
     */
    public playerContextGet(options?: any) {
        return AilurusApiFp(this.configuration).playerContextGet(options)(this.fetch, this.basePath);
    }

}

