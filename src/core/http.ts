import * as http from 'http'
import { HttpApi } from './kernel'

// Telegam Http Reqest 回傳資料處理方法
export type TelgramResponse = (data: any) => void
// Telegram Http reqest 回傳錯誤處理方法
export type RequestError = (err: Error) => void

// Telegram Http 請求處理格式與編碼處理方法
export class TelegramHttp extends HttpApi.ApiRequsetStream {

    // 初始化基本 Domain Port Method
    constructor() {
        super()
        this.ssl = true;
        this.setHost("api.telegram.org")
            .setPort(443)
            .setMethod("POST")
    }

    // setDir 設定動態路徑方法
    // 依照 Telegram Method 的 Api 呼叫方式
    // 路徑後第一個參數必須要以下格式
    // /bot${token}
    // /bot 為固定數值 ${token} 為呼叫的機器人參數
    // 詳情請查看 
    // Telegram Bot Create https://www.toptal.com/python/telegram-bot-tutorial-python
    // Telegram Bot father https://telegram.me/BotFather
    // Telegram Bot api https://core.telegram.org/bots/api#message
    // 路徑會影響呼叫的方法類型與機器人
    // token: string 為機器人的代號 由 botfather 提供
    // method 為呼叫的 api 方法 請查看 Telegram bot api
    setDir = (token: string, method: string): TelegramHttp => {
        this.setPath(`/bot${token}/${method}`)
        return this
    }

    // setJsonBody 設定請求內容
    // 設定要送給 Telegram bot api 的內容格式
    // 並且修改 Header 相關設定
    setJsonBody = (v: any): TelegramHttp => {
        // Header neet use byte length
        this.body = JSON.stringify(v)
        let bodyLength = Buffer.byteLength(this.body)
        this.setHeaders({
            'Content-Type': 'application/json;',
            'Content-Length': bodyLength,
            'Accept': "*/*",
            'Connection': "keep-alive",
        })
        return this
    }

    // reqHttpBotApi 提供其他類別實作的簡易呼叫方法
    // token: string 為機器人的代號 由 botfather 提供
    // method 為呼叫的 api 方法 請查看 Telegram bot api
    // success 為 Http Request 正確取得回傳資訊後的處理動作
    // error 為 Http Request 錯誤處理
    reqHttpBotApi(token: string, method: string, success: TelgramResponse, error: RequestError): void {
        try { this.setDir(token, method).sendHttpRequest((res) => { success(res.toString()) }, error) }
        catch (e) { error(e) }
    }

    // MiddleResponseDataCheck 提供除錯
    static MiddleResponseDataCheck(res): void {
        console.log(res)
    }

    // decode 處理回傳訊息的格式成可以辨識的 JSON
    static decode(data: http.IncomingMessage): string {
        let strData = data.toString();
        let jsonParse = JSON.parse(strData)
        return jsonParse
    }
}