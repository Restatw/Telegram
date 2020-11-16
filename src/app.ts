import { TelegramHttp } from './core/http'

export type InputFile = string
export type InlineKeyboardMarkup = any
export type ReplyKeyboardMarkup = any
export type ReplyKeyboardRemove = any
export type ForceReply = any
export type TelegramBotMethod = string

export module Telegram {
    export module Bot {
        export class api {

            public static PARSE_MODE_MARKDOWN_V2 = "MarkdownV2"
            public static PARSE_MODE_HTML = "HTML"
            public static PARSE_MODE_MARKDOWN = "Markdown"

            // requestAPI 發起 Telegram Api Request 
            public static requestAPI = (
                token?: string,
                method?: TelegramBotMethod,
                request?: any
            ): Promise<any> => {
                return new Promise<any>((resolve, reject) => {
                    new TelegramHttp()
                        .setJsonBody(
                            {
                                token,
                                method,
                                request
                            }
                        )
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
            ): Promise<any> => {
                return api.requestAPI(
                    token,
                    "getMe"
                )
            }

            // Telegram Api getMe
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
            ): Promise<any> => {
                return api.requestAPI(
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
                message_id: string,
                inline_message_id: string,
                text: string,
                parse_mode?: string,
                disable_web_page_preview?: boolean,
                reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
            ) {
                return api.requestAPI(
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
                return api.requestAPI(
                    token,
                    "getChat",
                    {
                        chat_id
                    })
            }

            public static getChatAdministrators(
                token: string,
                chat_id: number
            ) {
                return api.requestAPI(
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