"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telegram = void 0;
const http_1 = require("./core/http");
var Telegram;
(function (Telegram) {
    let Bot;
    (function (Bot) {
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
