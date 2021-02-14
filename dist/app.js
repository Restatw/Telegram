var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import 'reflect-metadata';
import 'es6-shim';
import { TelegramHttp } from './core/http';
import { Type } from 'class-transformer/decorators';
// export type InlineKeyboardMarkup = any
export class InlineKeyboardMarkup {
}
export class InlineKeyboardButton {
}
export class LoginUrl {
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
}
export class KeyboardButton {
}
export class KeyboardButtonPollType {
}
// export type ReplyKeyboardRemove = any
export class ReplyKeyboardRemove {
}
// export type ForceReply = any
export class ForceReply {
}
export var Telegram;
(function (Telegram) {
    var Bot;
    (function (Bot) {
        class Response {
        }
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
            constructor() {
                this.delete_chat_photo = true;
                this.group_chat_created = true;
                this.supergroup_chat_created = true;
                this.channel_chat_created = true;
            }
            getFrom() {
                return this.from;
            }
            getChat() {
                return this.chat;
            }
        }
        __decorate([
            Type(() => User)
        ], Message.prototype, "from");
        __decorate([
            Type(() => Chat)
        ], Message.prototype, "chat");
        __decorate([
            Type(() => User)
        ], Message.prototype, "forward_from");
        __decorate([
            Type(() => Chat)
        ], Message.prototype, "forward_from_chat");
        __decorate([
            Type(() => Message)
        ], Message.prototype, "reply_to_message");
        __decorate([
            Type(() => User)
        ], Message.prototype, "via_bot");
        __decorate([
            Type(() => Animation)
        ], Message.prototype, "animation");
        __decorate([
            Type(() => Audio)
        ], Message.prototype, "audio");
        __decorate([
            Type(() => Document)
        ], Message.prototype, "document");
        __decorate([
            Type(() => Sticker)
        ], Message.prototype, "sticker");
        __decorate([
            Type(() => Video)
        ], Message.prototype, "video");
        __decorate([
            Type(() => VideoNote)
        ], Message.prototype, "video_note");
        __decorate([
            Type(() => Voice)
        ], Message.prototype, "voice");
        __decorate([
            Type(() => Contact)
        ], Message.prototype, "contact");
        __decorate([
            Type(() => Dice)
        ], Message.prototype, "dice");
        __decorate([
            Type(() => Game)
        ], Message.prototype, "game");
        __decorate([
            Type(() => Poll)
        ], Message.prototype, "poll");
        __decorate([
            Type(() => Venue)
        ], Message.prototype, "venue");
        __decorate([
            Type(() => Location)
        ], Message.prototype, "location");
        __decorate([
            Type(() => User)
        ], Message.prototype, "left_chat_member");
        __decorate([
            Type(() => Invoice)
        ], Message.prototype, "invoice");
        __decorate([
            Type(() => SuccessfulPayment)
        ], Message.prototype, "successful_payment");
        __decorate([
            Type(() => PassportData)
        ], Message.prototype, "passport_data");
        __decorate([
            Type(() => ProximityAlertTriggered)
        ], Message.prototype, "proximity_alert_triggered");
        Bot.Message = Message;
        class Document {
        }
        Bot.Document = Document;
        class Animation {
        }
        Bot.Animation = Animation;
        class ProximityAlertTriggered {
        }
        __decorate([
            Type(() => User)
        ], ProximityAlertTriggered.prototype, "traveler");
        __decorate([
            Type(() => User)
        ], ProximityAlertTriggered.prototype, "watcher");
        Bot.ProximityAlertTriggered = ProximityAlertTriggered;
        // This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
        class MessageEntity {
        }
        __decorate([
            Type(() => User)
        ], MessageEntity.prototype, "user");
        Bot.MessageEntity = MessageEntity;
        // This object represents an audio file to be treated as music by the Telegram clients.
        class Audio {
        }
        __decorate([
            Type(() => PhotoSize)
        ], Audio.prototype, "thumb");
        Bot.Audio = Audio;
        // This object represents one size of a photo or a file / sticker thumbnail.
        class PhotoSize {
        }
        Bot.PhotoSize = PhotoSize;
        // This object represents a sticker.
        class Sticker {
        }
        __decorate([
            Type(() => PhotoSize)
        ], Sticker.prototype, "thumb");
        __decorate([
            Type(() => MaskPosition)
        ], Sticker.prototype, "mask_position");
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
            Type(() => PhotoSize)
        ], VideoNote.prototype, "thumb");
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
            Type(() => Animation)
        ], Game.prototype, "animation");
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
            Type(() => Location)
        ], Venue.prototype, "location");
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
            Type(() => ShippingOption)
        ], OrderInfo.prototype, "shipping_address");
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
            Type(() => PassportFile)
        ], EncryptedPassportElement.prototype, "front_side");
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
            Type(() => Message)
        ], RequestBody.prototype, "message");
        __decorate([
            Type(() => CallbackQuery)
        ], RequestBody.prototype, "callback_query");
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
            Type(() => User)
        ], CallbackQuery.prototype, "from");
        __decorate([
            Type(() => Message)
        ], CallbackQuery.prototype, "message");
        Bot.CallbackQuery = CallbackQuery;
        class api {
        }
        api.PARSE_MODE_MARKDOWN_V2 = "MarkdownV2";
        api.PARSE_MODE_HTML = "HTML";
        api.PARSE_MODE_MARKDOWN = "Markdown";
        // requestAPI 發起 Telegram Api Request 
        api.requestAPI = (token, method, request) => {
            return new Promise((resolve, reject) => {
                new TelegramHttp()
                    .setJsonBody({}, ...request);
            })
                .reqHttpBotApi(token, method, (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        };
        Bot.api = api;
        getMe = (token) => {
            return api.requestAPI(token, "getMe");
        };
        sendMessage = (
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
        deleteMessage = (
            // bot parameter
            token, 
            // api data
            chat_id, message_id) => {
            return api.requestAPI(token, "deleteMessage", {
                chat_id,
                message_id
            });
        };
        forwardMessage = (
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
        sendPhoto = (
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
        sendAudio = (
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
        sendDocument = (
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
        sendVideo = (
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
        sendAnimation(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, animation, string, duration ?  : number, width ?  : number, height ?  : number, thumb ?  : string, caption ?  : string, parse_mode ?  : string, supports_streaming ?  : boolean, disable_notification ?  : boolean, reply_to_message_id ?  : number, reply_markup ?  : InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply);
        {
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
        sendVoice(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, voice, string, caption ?  : string, parse_mode ?  : string, duration ?  : number, disable_notification ?  : boolean, reply_to_message_id ?  : number, reply_markup ?  : InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply);
        {
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
        sendVideoNote(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, video_note, string, duration ?  : number, length ?  : number, thumb ?  : string, disable_notification ?  : boolean, reply_to_message_id ?  : number, reply_markup ?  : InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply);
        {
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
        sendMediaGroup(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, media, Array < any > , disable_notification ?  : boolean, reply_to_message_id ?  : number);
        {
            return api.requestAPI(token, "sendMediaGroup", {
                chat_id,
                media,
                disable_notification,
                reply_to_message_id,
            });
        }
        sendLocation(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, latitude, number, longitude, number, live_period ?  : number, disable_notification ?  : boolean, reply_to_message_id ?  : number, reply_markup ?  : InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply);
        {
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
        sendPoll(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, question, string, options, Array < string > , is_anonymous ?  : boolean, _type ?  : string, allows_multiple_answers ?  : boolean, correct_option_id ?  : number, explanation ?  : string, explanation_parse_mode ?  : string, open_period ?  : number, close_date ?  : number, is_closed ?  : boolean, disable_notification ?  : boolean, reply_to_message_id ?  : number, reply_markup ?  : InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply);
        {
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
        sendDice(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, emoji ?  : string, disable_notification ?  : boolean, reply_to_message_id ?  : number, reply_markup ?  : InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply);
        {
            return api.requestAPI(token, "sendDice", {
                chat_id,
                emoji,
                disable_notification,
                reply_to_message_id,
                reply_markup
            });
        }
        sendChatAction(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, action ?  : string);
        {
            return api.requestAPI(token, "sendChatAction", {
                chat_id,
                action,
            });
        }
        getUserProfilePhotos(
        // bot parameter
        token, string, 
        // api data
        chat_id, number, offset ?  : number, limit ?  : number);
        {
            return api.requestAPI(token, "getUserProfilePhotos", {
                chat_id,
                offset,
                limit
            });
        }
        getFile(
        // bot parameter
        token, string, 
        // api data
        file_id, string);
        {
            return api.requestAPI(token, "getFile", {
                file_id
            });
        }
        editMessageText(token, string, chat_id, number, message_id, number, inline_message_id, string, text, string, parse_mode ?  : string, disable_web_page_preview ?  : boolean, reply_markup ?  : InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply);
        {
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
        getChat(token, string, chat_id, number);
        {
            return api.requestAPI(token, "getChat", {
                chat_id
            });
        }
        getChatAdministrators(token, string, chat_id, number);
        Promise < Response < Array < any >>> {
            return: api.requestAPI(token, "getChatAdministrators", {
                chat_id
            })
        };
        setMyCommands(token, string, commands, string);
        {
            return api.requestAPI(token, "setMyCommands", { commands });
        }
        getMyCommands(token, string);
        {
            return api.requestAPI(token, "getMyCommands");
        }
    })(Bot = Telegram.Bot || (Telegram.Bot = {}));
})(Telegram || (Telegram = {}));
