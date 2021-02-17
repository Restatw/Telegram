import 'es6-shim';
import { Type } from 'class-transformer';
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

        request = (option: ApiRequsetStream, callback?: RequestCallback ): http.ClientRequest => {
            return ( this.ssl ? https : http ).request(option,(res) => {  
                res.on('data', callback) 
            }) 
        }

        sendHttpRequest = (callback: RequestCallback, error: RequestError) => {
            let res = this.request( this, callback )
            res.write(this.getBody())
            res.end()
        }
    }
}


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
        this.setHostDomain("api.telegram.org")
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
        try { this.setDir(token, method).sendHttpRequest((res) => { success(TelegramHttp.decode(res)) }, error) }
        catch (e) { error(e) }
    }

    // decode 處理回傳訊息的格式成可以辨識的 JSON
    static decode(data: http.IncomingMessage): string {
        let strData = data.toString();
        let jsonParse = JSON.parse(strData)
        return jsonParse
    }
}

export type InputFile = string

// export type InlineKeyboardMarkup = any
export class InlineKeyboardMarkup {
    inline_keyboard: Array<Array<InlineKeyboardButton>>
}

export class InlineKeyboardButton{
    text: string
    url?: string
    login_url?: LoginUrl
    callback_data?: string
    switch_inline_query?: string
    switch_inline_query_current_chat?: string
    callback_game?: CallbackGame
    pay?: boolean
}

export class LoginUrl {

    /**
     * An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. 
     * If the user refuses to provide authorization data, the original URL without information about the user will be opened. 
     * The data added is the same as described in Receiving authorization data.
     * NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
     * 
     * @type {string}
     * @memberof LoginUrl
     */
    url: string


    /**
     * Optional. New text of the button in forwarded messages.
     * 
     * @type {string}
     * @memberof LoginUrl
     */
    forward_text?: string


    /**
     * Optional. Username of a bot, which will be used for user authorization. 
     * See Setting up a bot for more details. 
     * If not specified, the current bot's username will be assumed. 
     * The url's domain must be the same as the domain linked with the bot. 
     * See Linking your domain to the bot for more details.
     *
     * @type {string}
     * @memberof LoginUrl
     */
    bot_username?: string


    /**
     * Optional. Pass True to request the permission for your bot to send messages to the user.
     *
     * @type {boolean}
     * @memberof LoginUrl
     */
    request_write_access?: boolean
}

export class CallbackGame {
    
}


// export type ReplyKeyboardMarkup = any
/**
 * KeyboardButton 
 * This object represents one button of the reply keyboard. 
 * For simple text buttons String can be used instead of this object to specify text of the button. 
 * Optional fields request_contact, request_location, and request_poll are mutually exclusive.
 *
 * @export
 * @class ReplyKeyboardMarkup
 */
export class ReplyKeyboardMarkup {
    keyboard: Array<Array<KeyboardButton>>
}

export class KeyboardButton{

    /**
     * text
     * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
     * @type {string}
     * @memberof KeyboardButton
     */
    text: string


    /**
     * request_contact
     * Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only
     * @type {boolean}
     * @memberof KeyboardButton
     */
    request_contact?: boolean


    /**
     * request_location
     * Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only
     * @type {boolean}
     * @memberof KeyboardButton
     */
    request_location?: boolean


    /**
     * request_poll
     * Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only
     * @type {KeyboardButtonPollType}
     * @memberof KeyboardButton
     */
    request_poll?: KeyboardButtonPollType
}

export class KeyboardButtonPollType {

}

// export type ReplyKeyboardRemove = any
export class ReplyKeyboardRemove {

}


// export type ForceReply = any
export class ForceReply {

}

export type TelegramBotMethod = string

export module Telegram {
    export module Bot {

        export class Response<T> {
            ok: boolean
            result: T
        }

        export class User {
            id: number
            is_bot: boolean
            first_name?: string
            last_name?: string
            username?: string
            language_code?: string
            can_join_groups?: boolean
            can_read_all_group_messages?: boolean
            supports_inline_queries?: boolean
        }

        export class Chat{
            id: number
            type: string
            title?: string
            username?: string
            first_name?: string
            last_name?:string
            photo?: ChatPhoto
            bio?: string
            description?: string
            invite_link?: string
            pinned_message?: Message
            permissioms?: ChatPermissions
            slow_mode_delay?: number
            sticker_set_name?: string
            can_set_sticker_set?: boolean
            linked_chat_id?: number
            location?: ChatLocation
        }

        export class ChatPhoto {
            small_file_id: string
            small_file_unique_id: string
            big_file_id: string
            big_file_unique_id: string
        }

        // Describes actions that a non-administrator user is allowed to take in a chat.
        export class ChatPermissions {
            can_send_messages?: Boolean
            can_send_media_messages?: Boolean
            can_send_polls?: Boolean
            can_send_other_messages?: Boolean
            can_add_web_page_previews?: Boolean
            can_change_info?: Boolean
            can_invite_users?: Boolean
            can_pin_messages?: Boolean
        }

        export class ChatLocation {
            location: Location
            address: string
        }

        export class Message {
            message_id: number
            @Type(() => User)
            from?: User
            sender_chat?: Chat
            date: number
            @Type(() => Chat)
            chat: Chat
            @Type(()=>User)
            forward_from?: User
            @Type(()=>Chat)
            forward_from_chat?: Chat
            forward_signature?: string
            forward_sender_name?: string
            forward_date?: number
            @Type(()=>Message)
            reply_to_message?: Message
            @Type(()=>User)
            via_bot: User
            edit_date: number
            media_group_id?: string
            author_signature?: string
            text?: string
            entities?: Array<MessageEntity>
            @Type(()=>Animation)
            animation?: Animation
            @Type(()=>Audio)
            audio?: Audio
            @Type(()=>Document)
            document?: Document
            photo?: Array<PhotoSize>
            @Type(()=>Sticker)
            sticker?: Sticker
            @Type(()=>Video)
            video?: Video
            @Type(()=>VideoNote)
            video_note?: VideoNote
            @Type(()=>Voice)
            voice?: Voice
            caption?: string
            caption_entities?: Array<MessageEntity>
            @Type(()=>Contact)
            contact?: Contact
            @Type(()=>Dice)
            dice?: Dice
            @Type(()=>Game)
            game?: Game
            @Type(()=>Poll)
            poll?: Poll
            @Type(()=>Venue)
            venue?: Venue
            @Type(()=>Location)
            location?: Location
            new_chat_members?: Array<User>
            @Type(()=>User)
            left_chat_member?: User
            new_chat_title?: string
            new_chat_photo?: Array<PhotoSize>
            delete_chat_photo?: true
            group_chat_created?: true
            supergroup_chat_created?: true
            channel_chat_created?: true
            migrate_to_chat_id?: number
            migrate_from_chat_id?: number
            pinned_message?: Message
            @Type(()=>Invoice)
            invoice?: Invoice
            @Type(()=>SuccessfulPayment)
            successful_payment?: SuccessfulPayment
            connected_website: string
            @Type(()=> PassportData)
            passport_data?: PassportData
            @Type(()=>ProximityAlertTriggered)
            proximity_alert_triggered?: ProximityAlertTriggered
            replay_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply

            getFrom(): User {
                return this.from
            }

            getChat() {
                return this.chat
            }
        }


        export class Document {

        }

        export class Animation {
            
        }

        export class ProximityAlertTriggered {
            @Type(()=>User)
            traveler: User
            @Type(()=>User)
            watcher: User
            distance: number
        }

        // This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
        export class MessageEntity {
            type: string
            offset: number
            length: number
            url?: string
            @Type(()=>User)
            user?: User
            language?: string
        }

        // This object represents an audio file to be treated as music by the Telegram clients.
        export class Audio {
            file_id: string
            file_unique_id: string
            duration: number
            performer: string
            title: string
            file_name: string
            mime_type: string
            file_size: number
            @Type(()=>PhotoSize)
            thumb: PhotoSize
        }

        // This object represents one size of a photo or a file / sticker thumbnail.
        export class PhotoSize {
            file_id: string
            file_unique_id: string
            width: number
            height: number
            file_size: number
        }

        // This object represents a sticker.
        export class Sticker {
            file_id: string
            file_unique_id: string
            width: number
            height: number
            is_animated: boolean
            @Type(()=>PhotoSize)
            thumb?: PhotoSize
            emoji?: string
            set_name?: string
            @Type(()=>MaskPosition)
            mask_position?: MaskPosition
            file_size?: number
        }

        // This object describes the position on faces where a mask should be placed by default.
        export class MaskPosition {
            point: string
            x_shift: number
            y_shift: number
            scale: number
        }

        // This object represents a video file.
        export class Video {
            file_id: string
            file_unique_id: string
            width: number
            height: number
            duration: number
            thumb?: PhotoSize
            file_name?: string
            mime_type?: string
            file_size?: number
        }

        // This object represents a video message (available in Telegram apps as of v.4.0).
        export class VideoNote {
            file_id: string
            file_unique_id: string
            length: number
            duration: number
            @Type(()=>PhotoSize)
            thumb: PhotoSize
            file_size: number
        }

        // This object represents a voice note.
        export class Voice {
            file_id: string
            file_unique_id: string
            duration: number
            mime_type?: string
            file_size?: number
        }

        // This object represents a phone contact.
        export class Contact{
            phone_number: string
            first_name: string
            last_name?: string
            user_id?: number
            vcard?: string
        }

        // This object represents an animated emoji that displays a random value.
        export class Dice {
            emoji: string
            value: number
        }

        export class Game {
            title: string
            description: string
            photo: Array<PhotoSize>
            text: string
            text_entities: Array<MessageEntity>
            @Type(()=>Animation)
            animation: Animation
        }

        export class Poll {
            id: string
            question: string
            options: Array<PollOption>
            total_voter_count: number
            is_closed: Boolean
            is_anonymous: Boolean
            type: string
            allows_multiple_answers: boolean
            correct_option_id?: number
            explanation?: string
            explanation_entities?: Array<MessageEntity>
            open_period: number
            close_date: number
        }
        
        export class PollOption {
            text: string
            voter_count: number
        }

        export class Location {
            longitude: number
            latitude: number
            horizontal_accuracy?: number
            live_period?: number
            heading?: number
            proximity_alert_radius?: number
        }

        export class Venue {
            @Type(()=>Location)
            location: Location
            title: string
            address: string
            foursquare_id?: string
            foursquare_type?: string
            google_place_id?: string
            google_place_type?: string
        }

        export class Invoice {
            title: string
            description: string
            start_parameter: string
            currency: string
            total_amount: number
        }

        export class SuccessfulPayment {
            currency: string
            total_amount: number
            invoice_payload: string
            shipping_option_id?: string
            order_info?: OrderInfo
            telegram_payment_charge_id: string
            provider_payment_charge_id: string
        }

        export class OrderInfo {
            name?: string
            photo_number?: string 
            email?: string
            @Type(()=>ShippingOption)
            shipping_address?: ShippingAddress
        }

        export class ShippingAddress {
            country_code: string
            state: string
            city: string
            street_line1: string
            street_line2: string
            post_code: string
        }

        export class ShippingOption {
            id: string
            title?: string
            prices: Array<LabeledPrice>
        }

        export class LabeledPrice {
            label: string
            amount: number
        }

        export class PassportData {
            data: Array<EncryptedPassportElement>
            credentials: EncryptedCredentials
        }

        export class EncryptedPassportElement {
            type: string
            data?: string 
            phone_number?: string
            email?: string
            files?: Array<PassportFile>
            @Type(()=>PassportFile)
            front_side?: PassportFile
            reverse_side?: PassportFile
            selfie?: PassportFile
            translation?: Array<PassportFile>
            hash: string
        }

        export class EncryptedCredentials {
            data: string
            hash: string
            secret: string
        }

        export class PassportFile {
            file_id: string
            file_unique_id: string
            file_size: number
            file_date: number
        }


        export const UNDEFINED: string = "undefined"

        export class RequestBody {

            update_id: number

            @Type(() => Message)
            message: Message
            @Type(() => CallbackQuery)
            callback_query: CallbackQuery

            // 自訂方法

            // 取得訊息變數
            getMessage(): Message { return this.message }
            // 檢查請求是否是客戶端的訊息
            isMessage(): Boolean { return typeof this.getMessage() !== UNDEFINED }
            // 取得客戶端按鈕回傳
            getCallbackQuery(): CallbackQuery { return this.callback_query }
            // 檢查請求是否客戶端按鈕回傳
            isCallback(): Boolean { return typeof this.getCallbackQuery() !== UNDEFINED }
            // 取得訊息 自動判斷是訊息還是按鈕回傳
            getInputMessage(): Message { return this.isMessage() ? this.getMessage() : this.getCallbackQuery().getMessage() }

            getData(): string {
                return this.isCallback() ? this.getCallbackQuery().data : undefined
            }

            getText(): string {
                return this.isMessage() ? this.getMessage().text : undefined
            }
        }

        export class CallbackQuery {

            id: string

            @Type(() => User)
            from: User
            getFrom(): User {
                return this.from
            }

            
            @Type(() => Message)
            message: Message
            getMessage() {
                return this.message
            }

            inline_message_id?: string

            chat_instance: string

            data: string
            getData() {
                return this.data
            }

            date: number

            game_short_name?: string
        }

        export class api {

            public static PARSE_MODE_MARKDOWN_V2 = "MarkdownV2"
            public static PARSE_MODE_HTML = "HTML"
            public static PARSE_MODE_MARKDOWN = "Markdown"

            // requestAPI 發起 Telegram Api Request 
            public static requestAPI = <T>(
                token?: string,
                method?: TelegramBotMethod,
                request?: any
            ): Promise<Response<T>> => {
                return new Promise<Response<T>>((resolve, reject) => {
                    new TelegramHttp()
                        .setJsonBody({...request})
                        .reqHttpBotApi(
                            token,
                            method,
                            (res) => {
                                resolve(res)
                            }, (err) => {
                                reject(err)
                            }
                        )
                })
            }

            // Telegram Api getMe
            public static getMe = (
                token: string,
            ) => {
                return api.requestAPI<User>(
                    token,
                    "getMe"
                )
            }

            // Telegram Api sendMessage
            public static sendMessage = (
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                text: string,
                parse_mode?: string,
                disable_web_page_preview?: boolean,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply,
            ) => {
                return api.requestAPI<Message> (
                    token,
                    "sendMessage",
                    {
                        chat_id,
                        text,
                        parse_mode,
                        disable_web_page_preview,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup
                    }
                )
            }

            public static deleteMessage = (
                // bot parameter
                token: string,
                // api data
                chat_id: string | number,
                message_id: number
            ) => {
                return api.requestAPI<any>(
                    token,
                    "deleteMessage",
                    {
                        chat_id,
                        message_id
                    }
                )
            }

            public static forwardMessage = (
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                from_chat_id: string | number,
                disable_notification?: boolean,
                message_id?: number,
            ): Promise<any> => {
                return api.requestAPI(
                    token,
                    "forwardMessage",
                    {
                        chat_id,
                        from_chat_id,
                        disable_notification,
                        message_id,
                    }
                )
            }

            public static sendPhoto = (
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                photo: string,
                caption?: string,
                parse_mode?: string,
                disable_notification?: boolean,
                reply_to_message_id?: number,
            ): Promise<any> => {
                return api.requestAPI(
                    token,
                    "sendPhoto",
                    {
                        chat_id,
                        photo,
                        caption,
                        parse_mode,
                        disable_notification,
                        reply_to_message_id,
                    }
                )
            }

            public static sendAudio = (
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                audio: string,
                caption?: string,
                parse_mode?: string,
                duration?: number,
                performer?: string,
                title?: string,
                thumb?: string,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply,
            ): Promise<any> => {
                return api.requestAPI(
                    token,
                    "sendAudio",
                    {
                        chat_id,
                        audio,
                        caption,
                        parse_mode,
                        duration,
                        performer,
                        title,
                        thumb,

                        disable_notification,
                        reply_to_message_id,
                        reply_markup,
                    }
                )
            }

            public static sendDocument = (
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                document: string,
                thumb?: string,
                caption?: string,
                parse_mode?: string,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply,
            ): Promise<any> => {
                return api.requestAPI(
                    token,
                    "sendDocument",
                    {
                        chat_id,
                        document,
                        thumb,
                        caption,
                        parse_mode,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup,
                    }
                )
            }

            public static sendVideo = (
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                video: string,
                duration?: number,
                width?: number,
                height?: number,
                thumb?: string,
                caption?: string,
                parse_mode?: string,
                supports_streaming?: boolean,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply,
            ): Promise<any> => {
                return api.requestAPI(
                    token,
                    "sendVideo",
                    {
                        chat_id,
                        video,
                        duration,
                        width,
                        height,
                        thumb,
                        caption,
                        parse_mode,
                        supports_streaming,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup,
                    }
                )
            }

            public static sendAnimation(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                animation: string,
                duration?: number,
                width?: number,
                height?: number,
                thumb?: string,
                caption?: string,
                parse_mode?: string,
                supports_streaming?: boolean,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI(
                    token,
                    "sendAnimation",
                    {
                        chat_id,
                        animation,
                        duration,
                        width,
                        height,
                        thumb,
                        caption,
                        parse_mode,
                        supports_streaming,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup,
                    })
            }

            public static sendVoice(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                voice: string,
                caption?: string,
                parse_mode?: string,
                duration?: number,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI(
                    token,
                    "sendVoice",
                    {
                        chat_id,
                        voice,
                        caption,
                        parse_mode,
                        duration,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup,
                    })
            }

            public static sendVideoNote(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                video_note: string,
                duration?: number,
                length?: number,
                thumb?: string,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI(
                    token,
                    "sendVideoNote",
                    {
                        chat_id,
                        video_note,
                        duration,
                        length,
                        thumb,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup,
                    })
            }

            public static sendMediaGroup(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                media: Array<any>,
                disable_notification?: boolean,
                reply_to_message_id?: number
            ) {
                return api.requestAPI(
                    token,
                    "sendMediaGroup",
                    {
                        chat_id,
                        media,
                        disable_notification,
                        reply_to_message_id,
                    })
            }

            public static sendLocation(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                latitude: number,
                longitude: number,
                live_period?: number,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI(
                    token,
                    "sendLocation",
                    {
                        chat_id,
                        latitude,
                        longitude,
                        live_period,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup
                    })
            }

            public static sendPoll(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                question: string,
                options: Array<string>,
                is_anonymous?: boolean,
                _type?: string,
                allows_multiple_answers?: boolean,
                correct_option_id?: number,
                explanation?: string,
                explanation_parse_mode?: string,
                open_period?: number,
                close_date?: number,
                is_closed?: boolean,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI(
                    token,
                    "sendPoll",
                    {
                        chat_id,
                        question,
                        options,
                        is_anonymous,
                        _type,
                        allows_multiple_answers,
                        correct_option_id,
                        explanation,
                        explanation_parse_mode,
                        open_period,
                        close_date,
                        is_closed,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup
                    })
            }

            public static sendDice(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                emoji?: string,
                disable_notification?: boolean,
                reply_to_message_id?: number,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI(
                    token,
                    "sendDice",
                    {
                        chat_id,
                        emoji,
                        disable_notification,
                        reply_to_message_id,
                        reply_markup
                    })
            }

            public static sendChatAction(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                action?: string
            ) {
                return api.requestAPI(
                    token,
                    "sendChatAction",
                    {
                        chat_id,
                        action,
                    })
            }

            public static getUserProfilePhotos(
                // bot parameter
                token: string,
                // api data
                chat_id: number,
                offset?: number,
                limit?: number
            ) {
                return api.requestAPI(
                    token,
                    "getUserProfilePhotos",
                    {
                        chat_id,
                        offset,
                        limit
                    })
            }

            public static getFile(
                // bot parameter
                token: string,
                // api data
                file_id: string
            ) {
                return api.requestAPI(
                    token,
                    "getFile",
                    {
                        file_id
                    })
            }

            public static editMessageText(
                token: string,
                chat_id: number,
                message_id: number,
                inline_message_id: string,
                text: string,
                parse_mode?: string,
                disable_web_page_preview?: boolean,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI<Message>(
                    token,
                    "editMessageText",
                    {
                        chat_id,
                        message_id,
                        inline_message_id,
                        text,
                        parse_mode,
                        disable_web_page_preview,
                        reply_markup
                    })
            }


            public static getChat(
                token: string,
                chat_id: number
            ) {
                return api.requestAPI<Chat>(
                    token,
                    "getChat",
                    {
                        chat_id
                    })
            }

            public static getChatAdministrators(
                token: string,
                chat_id: number
            ) : Promise<Response<Array<any>>> {
                return api.requestAPI<Array<any>>(
                    token,
                    "getChatAdministrators",
                    {
                        chat_id
                    })
            }

            public static setMyCommands(
                token: string,
                commands: string
            ) {
                return api.requestAPI(
                    token,
                    "setMyCommands",
                    { commands })
            }

            public static getMyCommands(
                token: string
            ) {
                return api.requestAPI(
                    token,
                    "getMyCommands")
            }
        }

    }

}
