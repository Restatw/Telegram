/// <reference types="node" />
import * as http from 'http';
export declare namespace HttpApi {
    type RequestError = (err: Error) => void;
    type RequestCallback = (res: http.IncomingMessage) => void;
    class ApiRequsetStream implements http.RequestOptions {
        ssl: boolean;
        protocol?: string;
        host?: string;
        hostname?: string;
        family?: number;
        port?: number;
        localAddress?: string;
        socketPath?: string;
        method?: string;
        path?: string;
        headers?: http.OutgoingHttpHeaders;
        auth?: string;
        agent?: http.Agent;
        timeout?: number;
        body?: any;
        setProtocol: (v: string) => any;
        getProtocol: () => string;
        setHostDomain: (v: string) => any;
        getHostDomain: () => string;
        setHostname: (v: string) => any;
        getHostname: () => string;
        setFamily: (v: number) => any;
        getFamily: () => number;
        setPort: (v: number) => any;
        getPort: () => number;
        setLocalAddress: (v: string) => any;
        getLocalAddress: () => string;
        setSocketPath: (v: string) => any;
        getSocketPath: () => string;
        setMethod: (v: string) => any;
        getMethod: () => string;
        setPath: (v: string) => any;
        getPath: () => string;
        setHeaders: (v: http.OutgoingHttpHeaders) => any;
        getHeaders: () => http.OutgoingHttpHeaders;
        setAuth: (v: string) => any;
        getAuth: () => string;
        setAgent: (v: http.Agent) => any;
        getAgent: () => http.Agent;
        setTimeout: (v: number) => any;
        getTimeout: () => number;
        setBody: (v: any) => any;
        getBody: () => any;
        request: (option: ApiRequsetStream, callback?: RequestCallback) => http.ClientRequest;
        sendHttpRequest: (callback: RequestCallback, error: RequestError) => void;
    }
}
