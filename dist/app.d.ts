export declare type InputFile = string;
export declare type InlineKeyboardMarkup = any;
export declare type ReplyKeyboardMarkup = any;
export declare type ReplyKeyboardRemove = any;
export declare type ForceReply = any;
export declare type TelegramBotMethod = string;
export declare module Telegram {
    module Bot {
        class api {
            static PARSE_MODE_MARKDOWN_V2: string;
            static PARSE_MODE_HTML: string;
            static PARSE_MODE_MARKDOWN: string;
            static requestAPI: (token?: string, method?: TelegramBotMethod, request?: any) => Promise<any>;
            static getMe: (token: string) => Promise<any>;
            static sendMessage: (token: string, chat_id: number, text: string, parse_mode?: string, disable_web_page_preview?: boolean, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply) => Promise<any>;
            static forwardMessage: (token: string, chat_id: number, from_chat_id: string | number, disable_notification?: boolean, message_id?: number) => Promise<any>;
            static sendPhoto: (token: string, chat_id: number, photo: string, caption?: string, parse_mode?: string, disable_notification?: boolean, reply_to_message_id?: number) => Promise<any>;
            static sendAudio: (token: string, chat_id: number, audio: string, caption?: string, parse_mode?: string, duration?: number, performer?: string, title?: string, thumb?: string, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply) => Promise<any>;
            static sendDocument: (token: string, chat_id: number, document: string, thumb?: string, caption?: string, parse_mode?: string, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply) => Promise<any>;
            static sendVideo: (token: string, chat_id: number, video: string, duration?: number, width?: number, height?: number, thumb?: string, caption?: string, parse_mode?: string, supports_streaming?: boolean, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply) => Promise<any>;
            static sendAnimation(token: string, chat_id: number, animation: string, duration?: number, width?: number, height?: number, thumb?: string, caption?: string, parse_mode?: string, supports_streaming?: boolean, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): Promise<any>;
            static sendVoice(token: string, chat_id: number, voice: string, caption?: string, parse_mode?: string, duration?: number, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): Promise<any>;
            static sendVideoNote(token: string, chat_id: number, video_note: string, duration?: number, length?: number, thumb?: string, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): Promise<any>;
            static sendMediaGroup(token: string, chat_id: number, media: Array<any>, disable_notification?: boolean, reply_to_message_id?: number): Promise<any>;
            static sendLocation(token: string, chat_id: number, latitude: number, longitude: number, live_period?: number, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): Promise<any>;
            static sendPoll(token: string, chat_id: number, question: string, options: Array<string>, is_anonymous?: boolean, _type?: string, allows_multiple_answers?: boolean, correct_option_id?: number, explanation?: string, explanation_parse_mode?: string, open_period?: number, close_date?: number, is_closed?: boolean, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): Promise<any>;
            static sendDice(token: string, chat_id: number, emoji?: string, disable_notification?: boolean, reply_to_message_id?: number, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): Promise<any>;
            static sendChatAction(token: string, chat_id: number, action?: string): Promise<any>;
            static getUserProfilePhotos(token: string, chat_id: number, offset?: number, limit?: number): Promise<any>;
            static getFile(token: string, file_id: string): Promise<any>;
            static editMessageText(token: string, chat_id: number, message_id: string, inline_message_id: string, text: string, parse_mode?: string, disable_web_page_preview?: boolean, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply): Promise<any>;
            static getChat(token: string, chat_id: number): Promise<any>;
            static getChatAdministrators(token: string, chat_id: number): Promise<any>;
            static setMyCommands(token: string, commands: string): Promise<any>;
            static getMyCommands(token: string): Promise<any>;
        }
    }
}
