import * as http from 'http';
import * as https from 'https';
export var HttpApi;
(function (HttpApi) {
    class ApiRequsetStream {
        constructor() {
            this.setProtocol = (v) => { this.protocol = v; return this; };
            this.getProtocol = () => { return this.protocol; };
            this.setHostDomain = (v) => { this.host = v; return this; };
            this.getHostDomain = () => { return this.host; };
            this.setHostname = (v) => { this.hostname = v; return this; };
            this.getHostname = () => { return this.hostname; };
            this.setFamily = (v) => { this.family = v; return this; };
            this.getFamily = () => { return this.family; };
            this.setPort = (v) => { this.port = v; return this; };
            this.getPort = () => { return this.port; };
            this.setLocalAddress = (v) => { this.localAddress = v; return this; };
            this.getLocalAddress = () => { return this.localAddress; };
            this.setSocketPath = (v) => { this.socketPath = v; return this; };
            this.getSocketPath = () => { return this.socketPath; };
            this.setMethod = (v) => { this.method = v; return this; };
            this.getMethod = () => { return this.method; };
            this.setPath = (v) => { this.path = v; return this; };
            this.getPath = () => { return this.path; };
            this.setHeaders = (v) => { this.headers = v; return this; };
            this.getHeaders = () => { return this.headers; };
            this.setAuth = (v) => { this.auth = v; return this; };
            this.getAuth = () => { return this.auth; };
            this.setAgent = (v) => { this.agent = v; return this; };
            this.getAgent = () => { return this.agent; };
            this.setTimeout = (v) => { this.timeout = v; return this; };
            this.getTimeout = () => { return this.timeout; };
            this.setBody = (v) => { this.body = v; return this; };
            this.getBody = () => { return this.body; };
            this.request = (option, callback) => {
                return (this.ssl ? https : http).request(option, (res) => {
                    res.on('data', callback);
                });
            };
            this.sendHttpRequest = (callback, error) => {
                let res = this.request(this, callback);
                res.write(this.getBody());
                res.end();
            };
        }
    }
    HttpApi.ApiRequsetStream = ApiRequsetStream;
})(HttpApi || (HttpApi = {}));
