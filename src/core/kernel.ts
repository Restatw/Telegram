import * as http from 'http'
import * as https from 'https'

export namespace HttpApi {
    
    export type RequestError = (err: Error) => void
    export type RequestCallback = (res: http.IncomingMessage) => void 
    export class ApiRequsetStream implements http.RequestOptions {

        ssl: boolean 
        protocol?: string
        host?:string
        hostname?:string
        family?: number
        port?: number
        localAddress?: string
        socketPath?: string;
        method?: string
        path?: string
        headers?: http.OutgoingHttpHeaders
        auth?: string
        agent?: http.Agent
        timeout?: number
        body?: any
        
        setProtocol = (v: string): any => { this.protocol = v ; return this }
        getProtocol = (): string => { return this.protocol }

        setHostDomain = (v: string): any => { this.host = v ; return this }
        getHostDomain = () : string => { return this.host }

        setHostname = (v: string): any => { this.hostname = v ; return this }
        getHostname = (): string => { return this.hostname }

        setFamily = (v: number): any => { this.family = v ; return this }
        getFamily = (): number => { return this.family }

        setPort = (v: number): any => { this.port = v ; return this }
        getPort = (): number => { return this.port }

        setLocalAddress = (v: string): any => { this.localAddress = v ; return this }
        getLocalAddress = (): string => { return this.localAddress }
        
        setSocketPath = (v: string): any => { this.socketPath = v ; return this }
        getSocketPath = (): string => { return this.socketPath }

        setMethod = (v: string): any => { this.method = v ; return this }
        getMethod = (): string => { return this.method }

        setPath = (v: string): any => { this.path = v ; return this }
        getPath = (): string => { return this.path }

        setHeaders = (v: http.OutgoingHttpHeaders): any => { this.headers = v ; return this }
        getHeaders = (): http.OutgoingHttpHeaders => { return this.headers }

        setAuth = (v: string): any => { this.auth = v ; return this }
        getAuth = (): string => { return this.auth}

        setAgent = (v: http.Agent): any => { this.agent = v ; return this }
        getAgent = (): http.Agent => { return this.agent }
        
        setTimeout = (v: number): any => { this.timeout = v ; return this }
        getTimeout = (): number => { return this.timeout }

        setBody = (v: any):  any => { this.body = v ; return this }
        getBody = (): any => { return this.body }

        request = (option: any, callback?: RequestCallback ): http.ClientRequest => {
            return ( this.ssl ? https : http ).request(option,(res) => {  
                res.on('data', callback) 
            }) 
        }

        sendHttpRequest = (callback: RequestCallback, error: RequestError) => {
            let res = this.request( this, callback )
            res.on('error',error)
            res.write(this.getBody())
            res.end()
        }
    }
}
