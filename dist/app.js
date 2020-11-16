"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telegram = void 0;
require("reflect-metadata");
const http_1 = require("./core/http");
require("es6-shim");
const decorators_1 = require("class-transformer/decorators");
var Telegram;
(function (Telegram) {
    let Bot;
    (function (Bot) {
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
            decorators_1.Type(() => User)
        ], Message.prototype, "from", void 0);
        __decorate([
            decorators_1.Type(() => Chat)
        ], Message.prototype, "chat", void 0);
        __decorate([
            decorators_1.Type(() => User)
        ], Message.prototype, "forward_from", void 0);
        __decorate([
            decorators_1.Type(() => Chat)
        ], Message.prototype, "forward_from_chat", void 0);
        __decorate([
            decorators_1.Type(() => Message)
        ], Message.prototype, "reply_to_message", void 0);
        __decorate([
            decorators_1.Type(() => User)
        ], Message.prototype, "via_bot", void 0);
        __decorate([
            decorators_1.Type(() => Animation)
        ], Message.prototype, "animation", void 0);
        __decorate([
            decorators_1.Type(() => Audio)
        ], Message.prototype, "audio", void 0);
        __decorate([
            decorators_1.Type(() => Document)
        ], Message.prototype, "document", void 0);
        __decorate([
            decorators_1.Type(() => Sticker)
        ], Message.prototype, "sticker", void 0);
        __decorate([
            decorators_1.Type(() => Video)
        ], Message.prototype, "video", void 0);
        __decorate([
            decorators_1.Type(() => VideoNote)
        ], Message.prototype, "video_note", void 0);
        __decorate([
            decorators_1.Type(() => Voice)
        ], Message.prototype, "voice", void 0);
        __decorate([
            decorators_1.Type(() => Contact)
        ], Message.prototype, "contact", void 0);
        __decorate([
            decorators_1.Type(() => Dice)
        ], Message.prototype, "dice", void 0);
        __decorate([
            decorators_1.Type(() => Game)
        ], Message.prototype, "game", void 0);
        __decorate([
            decorators_1.Type(() => Poll)
        ], Message.prototype, "poll", void 0);
        __decorate([
            decorators_1.Type(() => Venue)
        ], Message.prototype, "venue", void 0);
        __decorate([
            decorators_1.Type(() => Location)
        ], Message.prototype, "location", void 0);
        __decorate([
            decorators_1.Type(() => User)
        ], Message.prototype, "left_chat_member", void 0);
        __decorate([
            decorators_1.Type(() => Invoice)
        ], Message.prototype, "invoice", void 0);
        __decorate([
            decorators_1.Type(() => SuccessfulPayment)
        ], Message.prototype, "successful_payment", void 0);
        __decorate([
            decorators_1.Type(() => PassportData)
        ], Message.prototype, "passport_data", void 0);
        __decorate([
            decorators_1.Type(() => ProximityAlertTriggered)
        ], Message.prototype, "proximity_alert_triggered", void 0);
        Bot.Message = Message;
        class ProximityAlertTriggered {
        }
        __decorate([
            decorators_1.Type(() => User)
        ], ProximityAlertTriggered.prototype, "traveler", void 0);
        __decorate([
            decorators_1.Type(() => User)
        ], ProximityAlertTriggered.prototype, "watcher", void 0);
        Bot.ProximityAlertTriggered = ProximityAlertTriggered;
        // This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
        class MessageEntity {
        }
        Bot.MessageEntity = MessageEntity;
        // This object represents an audio file to be treated as music by the Telegram clients.
        class Audio {
        }
        Bot.Audio = Audio;
        // This object represents one size of a photo or a file / sticker thumbnail.
        class PhotoSize {
        }
        Bot.PhotoSize = PhotoSize;
        // This object represents a sticker.
        class Sticker {
        }
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
            decorators_1.Type(() => Animation)
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
            decorators_1.Type(() => Location)
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
            decorators_1.Type(() => ShippingOption)
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
            decorators_1.Type(() => PassportFile)
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
            decorators_1.Type(() => Message)
        ], RequestBody.prototype, "message", void 0);
        __decorate([
            decorators_1.Type(() => CallbackQuery)
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
            decorators_1.Type(() => User)
        ], CallbackQuery.prototype, "from", void 0);
        __decorate([
            decorators_1.Type(() => Message)
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
                new http_1.TelegramHttp()
                    .setJsonBody({
                    token,
                    method,
                    request
                })
                    .reqHttpBotApi(token, method, (res) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        };
        // Telegram Api getMe
        api.getMe = (token) => {
            return api.requestAPI(token, "getMe");
        };
        // Telegram Api getMe
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
        chat_id, photo, caption, parse_mode, disable_notification, reply_to_message_id) => {
            return api.requestAPI(token, "sendPhoto", {
                chat_id,
                photo,
                caption,
                parse_mode,
                disable_notification,
                reply_to_message_id,
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
})(Telegram = exports.Telegram || (exports.Telegram = {}));
