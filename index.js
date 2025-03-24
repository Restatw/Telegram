"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telegram = exports.ForceReply = exports.ReplyKeyboardRemove = exports.KeyboardButtonPollType = exports.KeyboardButton = exports.ReplyKeyboardMarkup = exports.CallbackGame = exports.LoginUrl = exports.InlineKeyboardButton = exports.InlineKeyboardMarkup = exports.TelegramHttp = exports.HttpApi = void 0;
require("es6-shim");
const class_transformer_1 = require("class-transformer");
const http = require("http");
const https = require("https");
const fs = require("fs");
const FormData = require("form-data");
var HttpApi;
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
                let body = this.getBody();
                if (body)
                    res.write(this.getBody());
                res.end();
            };
        }
    }
    HttpApi.ApiRequsetStream = ApiRequsetStream;
})(HttpApi || (exports.HttpApi = HttpApi = {}));
// Telegram Http 請求處理格式與編碼處理方法
class TelegramHttp extends HttpApi.ApiRequsetStream {
    // 初始化基本 Domain Port Method
    constructor() {
        super();
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
        this.setDir = (token, method) => {
            this.setPath(`/bot${token}/${method}`);
            return this;
        };
        // setJsonBody 設定請求內容
        // 設定要送給 Telegram bot api 的內容格式
        // 並且修改 Header 相關設定
        this.setJsonBody = (v) => {
            // Header neet use byte length
            this.body = JSON.stringify(v);
            let bodyLength = Buffer.byteLength(this.body);
            this.setHeaders({
                'Content-Type': 'application/json;',
                'Content-Length': bodyLength,
                'Accept': "*/*",
                'Connection': "keep-alive",
            });
            return this;
        };
        this.setFormData = (v) => {
            // Header neet use byte length
            this.body = null;
            this.form = v;
            return this;
        };
        this.ssl = true;
        this.setHostDomain("api.telegram.org")
            .setPort(443)
            .setMethod("POST");
    }
    // reqHttpBotApi 提供其他類別實作的簡易呼叫方法
    // token: string 為機器人的代號 由 botfather 提供
    // method 為呼叫的 api 方法 請查看 Telegram bot api
    // success 為 Http Request 正確取得回傳資訊後的處理動作
    // error 為 Http Request 錯誤處理
    reqHttpBotApi(token, method, success, error) {
        try {
            this.setDir(token, method)
                .sendHttpRequest((res) => {
                success(TelegramHttp.decode(res));
            }, error);
        }
        catch (e) {
            error(e);
        }
    }
    /**
     * Send req by formdata for big file or photo
     * @param token
     * @param method
     * @param success
     * @param error
     */
    reqHttpBotApiBotForm(token, method, success, error) {
        try {
            const form = new FormData();
            this.setDir(token, method);
            Object.keys(this.form).forEach(k => {
                const value = this.form[k];
                if (value === null || value === undefined)
                    return; // 忽略空值
                if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    form.append(k, value.toString());
                }
                else if (Array.isArray(value)) {
                    form.append(k, JSON.stringify(value)); // 或者使用 value.join(',')
                }
                else if (value instanceof fs.ReadStream || value instanceof Blob) {
                    form.append(k, value); // 直接附加檔案
                }
                else if (typeof value === 'object') {
                    form.append(k, JSON.stringify(value)); // 將物件序列化為 JSON
                }
                else {
                    console.warn(`無法處理的資料類型：${k}`, value);
                }
            });
            this.setHeaders(form.getHeaders());
            const options = {
                method: this.getMethod(),
                hostname: this.getHostDomain(),
                port: this.getPort(),
                path: this.getPath(),
                headers: this.getHeaders(), // Automatically includes Content-Type and boundary
            };
            const req = https.request(options, (res) => {
                let responseData = "";
                res.on("data", (chunk) => {
                    responseData += chunk;
                });
                res.on("end", () => {
                    success(JSON.parse(responseData));
                });
            });
            req.on("error", error);
            form.pipe(req);
        }
        catch (e) {
            error(e);
        }
    }
    // decode 處理回傳訊息的格式成可以辨識的 JSON
    static decode(data) {
        let strData = data.toString();
        let jsonParse = JSON.parse(strData);
        return jsonParse;
    }
}
exports.TelegramHttp = TelegramHttp;
// export type InlineKeyboardMarkup = any
class InlineKeyboardMarkup {
}
exports.InlineKeyboardMarkup = InlineKeyboardMarkup;
class InlineKeyboardButton {
}
exports.InlineKeyboardButton = InlineKeyboardButton;
class LoginUrl {
}
exports.LoginUrl = LoginUrl;
class CallbackGame {
}
exports.CallbackGame = CallbackGame;
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
class ReplyKeyboardMarkup {
}
exports.ReplyKeyboardMarkup = ReplyKeyboardMarkup;
class KeyboardButton {
}
exports.KeyboardButton = KeyboardButton;
class KeyboardButtonPollType {
}
exports.KeyboardButtonPollType = KeyboardButtonPollType;
// export type ReplyKeyboardRemove = any
class ReplyKeyboardRemove {
}
exports.ReplyKeyboardRemove = ReplyKeyboardRemove;
// export type ForceReply = any
class ForceReply {
}
exports.ForceReply = ForceReply;
var Telegram;
(function (Telegram) {
    let Bot;
    (function (Bot) {
        class Response {
            constructor() {
                this.ok = false;
                this.result = null;
                this.description = "";
                this.error_code = 0;
                this.parameters = null;
            }
        }
        __decorate([
            (0, class_transformer_1.Type)(() => Parameters)
        ], Response.prototype, "parameters", void 0);
        Bot.Response = Response;
        class User {
        }
        Bot.User = User;
        class Chat {
        }
        Bot.Chat = Chat;
        class ChatPhoto {
        }
        Bot.ChatPhoto = ChatPhoto;
        // Describes actions that a non-administrator user is allowed to take in a chat.
        class ChatPermissions {
        }
        Bot.ChatPermissions = ChatPermissions;
        class ChatLocation {
        }
        Bot.ChatLocation = ChatLocation;
        class Message {
            getFrom() {
                return this.from;
            }
            getChat() {
                return this.chat;
            }
        }
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], Message.prototype, "from", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Chat)
        ], Message.prototype, "chat", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], Message.prototype, "forward_from", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Chat)
        ], Message.prototype, "forward_from_chat", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Message)
        ], Message.prototype, "reply_to_message", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], Message.prototype, "via_bot", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Animation)
        ], Message.prototype, "animation", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Document)
        ], Message.prototype, "document", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Sticker)
        ], Message.prototype, "sticker", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => VideoNote)
        ], Message.prototype, "video_note", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Contact)
        ], Message.prototype, "contact", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Dice)
        ], Message.prototype, "dice", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Game)
        ], Message.prototype, "game", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Poll)
        ], Message.prototype, "poll", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Venue)
        ], Message.prototype, "venue", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Location)
        ], Message.prototype, "location", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], Message.prototype, "left_chat_member", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Invoice)
        ], Message.prototype, "invoice", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => SuccessfulPayment)
        ], Message.prototype, "successful_payment", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => PassportData)
        ], Message.prototype, "passport_data", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => ProximityAlertTriggered)
        ], Message.prototype, "proximity_alert_triggered", void 0);
        Bot.Message = Message;
        class Parameters {
        }
        Bot.Parameters = Parameters;
        class Document {
        }
        Bot.Document = Document;
        class Animation {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => Thumb)
        ], Animation.prototype, "thumb", void 0);
        Bot.Animation = Animation;
        class Thumb {
        }
        Bot.Thumb = Thumb;
        class ProximityAlertTriggered {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], ProximityAlertTriggered.prototype, "traveler", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], ProximityAlertTriggered.prototype, "watcher", void 0);
        Bot.ProximityAlertTriggered = ProximityAlertTriggered;
        // This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
        class MessageEntity {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], MessageEntity.prototype, "user", void 0);
        Bot.MessageEntity = MessageEntity;
        // This object represents an audio file to be treated as music by the Telegram clients.
        class Audio {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => PhotoSize)
        ], Audio.prototype, "thumb", void 0);
        Bot.Audio = Audio;
        // This object represents one size of a photo or a file / sticker thumbnail.
        class PhotoSize {
        }
        Bot.PhotoSize = PhotoSize;
        // This object represents a sticker.
        class Sticker {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => PhotoSize)
        ], Sticker.prototype, "thumb", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => MaskPosition)
        ], Sticker.prototype, "mask_position", void 0);
        Bot.Sticker = Sticker;
        // This object describes the position on faces where a mask should be placed by default.
        class MaskPosition {
        }
        Bot.MaskPosition = MaskPosition;
        // This object represents a video file.
        class Video {
        }
        Bot.Video = Video;
        // This object represents a video message (available in Telegram apps as of v.4.0).
        class VideoNote {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => PhotoSize)
        ], VideoNote.prototype, "thumb", void 0);
        Bot.VideoNote = VideoNote;
        // This object represents a voice note.
        class Voice {
        }
        Bot.Voice = Voice;
        // This object represents a phone contact.
        class Contact {
        }
        Bot.Contact = Contact;
        // This object represents an animated emoji that displays a random value.
        class Dice {
        }
        Bot.Dice = Dice;
        class Game {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => Animation)
        ], Game.prototype, "animation", void 0);
        Bot.Game = Game;
        class Poll {
        }
        Bot.Poll = Poll;
        class PollOption {
        }
        Bot.PollOption = PollOption;
        class Location {
        }
        Bot.Location = Location;
        class Venue {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => Location)
        ], Venue.prototype, "location", void 0);
        Bot.Venue = Venue;
        class Invoice {
        }
        Bot.Invoice = Invoice;
        class SuccessfulPayment {
        }
        Bot.SuccessfulPayment = SuccessfulPayment;
        class OrderInfo {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => ShippingOption)
        ], OrderInfo.prototype, "shipping_address", void 0);
        Bot.OrderInfo = OrderInfo;
        class ShippingAddress {
        }
        Bot.ShippingAddress = ShippingAddress;
        class ShippingOption {
        }
        Bot.ShippingOption = ShippingOption;
        class LabeledPrice {
        }
        Bot.LabeledPrice = LabeledPrice;
        class PassportData {
        }
        Bot.PassportData = PassportData;
        class EncryptedPassportElement {
        }
        __decorate([
            (0, class_transformer_1.Type)(() => PassportFile)
        ], EncryptedPassportElement.prototype, "front_side", void 0);
        Bot.EncryptedPassportElement = EncryptedPassportElement;
        class EncryptedCredentials {
        }
        Bot.EncryptedCredentials = EncryptedCredentials;
        class PassportFile {
        }
        Bot.PassportFile = PassportFile;
        Bot.UNDEFINED = "undefined";
        class RequestBody {
            // 自訂方法
            // 取得訊息變數
            getMessage() { return this.message; }
            // 檢查請求是否是客戶端的訊息
            isMessage() { return typeof this.getMessage() !== Bot.UNDEFINED; }
            // 取得客戶端按鈕回傳
            getCallbackQuery() { return this.callback_query; }
            // 檢查請求是否客戶端按鈕回傳
            isCallback() { return typeof this.getCallbackQuery() !== Bot.UNDEFINED; }
            // 取得訊息 自動判斷是訊息還是按鈕回傳
            getInputMessage() { return this.isMessage() ? this.getMessage() : this.getCallbackQuery().getMessage(); }
            getData() {
                return this.isCallback() ? this.getCallbackQuery().data : undefined;
            }
            getText() {
                return this.isMessage() ? this.getMessage().text : undefined;
            }
        }
        __decorate([
            (0, class_transformer_1.Type)(() => Message)
        ], RequestBody.prototype, "message", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => CallbackQuery)
        ], RequestBody.prototype, "callback_query", void 0);
        Bot.RequestBody = RequestBody;
        class CallbackQuery {
            getFrom() {
                return this.from;
            }
            getMessage() {
                return this.message;
            }
            getData() {
                return this.data;
            }
        }
        __decorate([
            (0, class_transformer_1.Type)(() => User)
        ], CallbackQuery.prototype, "from", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Message)
        ], CallbackQuery.prototype, "message", void 0);
        Bot.CallbackQuery = CallbackQuery;
        class api {
            static sendAnimation(
            // bot parameter
            token, 
            // api data
            chat_id, animation, duration, width, height, thumb, caption, parse_mode, supports_streaming, disable_notification, reply_to_message_id, reply_markup) {
                return api.requestAPI(token, "sendAnimation", {
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
                });
            }
            static sendVoice(
            // bot parameter
            token, 
            // api data
            chat_id, voice, caption, parse_mode, duration, disable_notification, reply_to_message_id, reply_markup) {
                return api.requestAPI(token, "sendVoice", {
                    chat_id,
                    voice,
                    caption,
                    parse_mode,
                    duration,
                    disable_notification,
                    reply_to_message_id,
                    reply_markup,
                });
            }
            static sendVideoNote(
            // bot parameter
            token, 
            // api data
            chat_id, video_note, duration, length, thumb, disable_notification, reply_to_message_id, reply_markup) {
                return api.requestAPI(token, "sendVideoNote", {
                    chat_id,
                    video_note,
                    duration,
                    length,
                    thumb,
                    disable_notification,
                    reply_to_message_id,
                    reply_markup,
                });
            }
            static sendMediaGroup(
            // bot parameter
            token, 
            // api data
            chat_id, media, disable_notification, reply_to_message_id) {
                return api.requestAPI(token, "sendMediaGroup", {
                    chat_id,
                    media,
                    disable_notification,
                    reply_to_message_id,
                });
            }
            static sendLocation(
            // bot parameter
            token, 
            // api data
            chat_id, latitude, longitude, live_period, disable_notification, reply_to_message_id, reply_markup) {
                return api.requestAPI(token, "sendLocation", {
                    chat_id,
                    latitude,
                    longitude,
                    live_period,
                    disable_notification,
                    reply_to_message_id,
                    reply_markup
                });
            }
            static sendPoll(
            // bot parameter
            token, 
            // api data
            chat_id, question, options, is_anonymous, _type, allows_multiple_answers, correct_option_id, explanation, explanation_parse_mode, open_period, close_date, is_closed, disable_notification, reply_to_message_id, reply_markup) {
                return api.requestAPI(token, "sendPoll", {
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
                });
            }
            static sendDice(
            // bot parameter
            token, 
            // api data
            chat_id, emoji, disable_notification, reply_to_message_id, reply_markup) {
                return api.requestAPI(token, "sendDice", {
                    chat_id,
                    emoji,
                    disable_notification,
                    reply_to_message_id,
                    reply_markup
                });
            }
            static sendSticker(token, chat_id, sticker, disable_notification, reply_to_message_id, allow_sending_without_reply, reply_markup) {
                return api.requestAPI(token, "sendSticker", {
                    chat_id,
                    sticker,
                    disable_notification,
                    reply_to_message_id,
                    allow_sending_without_reply,
                    reply_markup
                });
            }
            static sendChatAction(
            // bot parameter
            token, 
            // api data
            chat_id, action) {
                return api.requestAPI(token, "sendChatAction", {
                    chat_id,
                    action,
                });
            }
            static getUserProfilePhotos(
            // bot parameter
            token, 
            // api data
            chat_id, offset, limit) {
                return api.requestAPI(token, "getUserProfilePhotos", {
                    chat_id,
                    offset,
                    limit
                });
            }
            static getFile(
            // bot parameter
            token, 
            // api data
            file_id) {
                return api.requestAPI(token, "getFile", {
                    file_id
                });
            }
            static editMessageText(token, chat_id, message_id, inline_message_id, text, parse_mode, disable_web_page_preview, reply_markup) {
                return api.requestAPI(token, "editMessageText", {
                    chat_id,
                    message_id,
                    inline_message_id,
                    text,
                    parse_mode,
                    disable_web_page_preview,
                    reply_markup
                });
            }
            static getChat(token, chat_id) {
                return api.requestAPI(token, "getChat", {
                    chat_id
                });
            }
            static getChatAdministrators(token, chat_id) {
                return api.requestAPI(token, "getChatAdministrators", {
                    chat_id
                });
            }
            static setMyCommands(token, commands) {
                return api.requestAPI(token, "setMyCommands", { commands });
            }
            static getMyCommands(token) {
                return api.requestAPI(token, "getMyCommands");
            }
        }
        api.PARSE_MODE_MARKDOWN_V2 = "MarkdownV2";
        api.PARSE_MODE_HTML = "HTML";
        api.PARSE_MODE_MARKDOWN = "Markdown";
        // requestAPI 發起 Telegram Api Request 
        api.requestAPI = (token, method, request) => {
            return new Promise((resolve, reject) => {
                new TelegramHttp()
                    .setFormData(Object.assign({}, request))
                    .reqHttpBotApiBotForm(token, method, (res) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        };
        // Telegram api setWebhook
        api.setWebhook = (token, url) => {
            return api.requestAPI(token, "setWebhook", {
                url
            });
        };
        // Telegram Api getMe
        api.getMe = (token) => {
            return api.requestAPI(token, "getMe");
        };
        // Telegram Api sendMessage
        api.sendMessage = (
        // bot parameter
        token, 
        // api data
        chat_id, text, parse_mode, disable_web_page_preview, disable_notification, reply_to_message_id, reply_markup) => {
            return api.requestAPI(token, "sendMessage", {
                chat_id,
                text,
                parse_mode,
                disable_web_page_preview,
                disable_notification,
                reply_to_message_id,
                reply_markup
            });
        };
        api.deleteMessage = (
        // bot parameter
        token, 
        // api data
        chat_id, message_id) => {
            return api.requestAPI(token, "deleteMessage", {
                chat_id,
                message_id
            });
        };
        api.forwardMessage = (
        // bot parameter
        token, 
        // api data
        chat_id, from_chat_id, disable_notification, message_id) => {
            return api.requestAPI(token, "forwardMessage", {
                chat_id,
                from_chat_id,
                disable_notification,
                message_id,
            });
        };
        api.sendPhoto = (
        // bot parameter
        token, 
        // api data
        chat_id, photo, caption, parse_mode, disable_notification, reply_to_message_id, allow_sending_without_reply, reply_markup) => {
            return api.requestAPI(token, "sendPhoto", {
                chat_id,
                photo,
                caption,
                parse_mode,
                disable_notification,
                reply_to_message_id,
                allow_sending_without_reply,
                reply_markup
            });
        };
        api.sendAudio = (
        // bot parameter
        token, 
        // api data
        chat_id, audio, caption, parse_mode, duration, performer, title, thumb, disable_notification, reply_to_message_id, reply_markup) => {
            return api.requestAPI(token, "sendAudio", {
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
            });
        };
        api.sendDocument = (
        // bot parameter
        token, 
        // api data
        chat_id, document, thumb, caption, parse_mode, disable_notification, reply_to_message_id, reply_markup) => {
            return api.requestAPI(token, "sendDocument", {
                chat_id,
                document,
                thumb,
                caption,
                parse_mode,
                disable_notification,
                reply_to_message_id,
                reply_markup,
            });
        };
        api.sendVideo = (
        // bot parameter
        token, 
        // api data
        chat_id, video, duration, width, height, thumb, caption, parse_mode, supports_streaming, disable_notification, reply_to_message_id, reply_markup) => {
            return api.requestAPI(token, "sendVideo", {
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
            });
        };
        Bot.api = api;
    })(Bot = Telegram.Bot || (Telegram.Bot = {}));
})(Telegram || (exports.Telegram = Telegram = {}));
