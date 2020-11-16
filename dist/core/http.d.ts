/// <reference types="node" />
import * as http from 'http';
import { HttpApi } from './kernel';
export declare type TelgramResponse = (data: any) => void;
export declare type RequestError = (err: Error) => void;
export declare class TelegramHttp extends HttpApi.ApiRequsetStream {
    constructor();
    setDir: (token: string, method: string) => TelegramHttp;
    setJsonBody: (v: any) => TelegramHttp;
    reqHttpBotApi(token: string, method: string, success: TelgramResponse, error: RequestError): void;
    static MiddleResponseDataCheck(res: any): void;
    static decode(data: http.IncomingMessage): string;
}
