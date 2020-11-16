import 'reflect-metadata';
import 'es6-shim';
export declare type InputFile = string;
export declare type InlineKeyboardMarkup = any;
export declare type ReplyKeyboardMarkup = any;
export declare type ReplyKeyboardRemove = any;
export declare type ForceReply = any;
export declare type TelegramBotMethod = string;
export declare module Telegram {
    module Bot {
        class User {
            id: number;
            is_bot: boolean;
            first_name?: string;
            last_name?: string;
            username?: string;
            language_code?: string;
            can_join_groups?: boolean;
            can_read_all_group_messages?: boolean;
            supports_inline_queries?: boolean;
        }
        class Chat {
            id: number;
            type: string;
            title?: string;
            username?: string;
            first_name?: string;
            last_name?: string;
            photo?: ChatPhoto;
            bio?: string;
            description?: string;
            invite_link?: string;
            pinned_message?: Message;
            permissioms?: ChatPermissions;
            slow_mode_delay?: number;
            sticker_set_name?: string;
            can_set_sticker_set?: boolean;
            linked_chat_id?: number;
            location?: ChatLocation;
        }
        class ChatPhoto {
            small_file_id: string;
            small_file_unique_id: string;
            big_file_id: string;
            big_file_unique_id: string;
        }
        class ChatPermissions {
            can_send_messages?: Boolean;
            can_send_media_messages?: Boolean;
            can_send_polls?: Boolean;
            can_send_other_messages?: Boolean;
            can_add_web_page_previews?: Boolean;
            can_change_info?: Boolean;
            can_invite_users?: Boolean;
            can_pin_messages?: Boolean;
        }
        class ChatLocation {
            location: Location;
            address: string;
        }
        class Message {
            message_id: number;
            from?: User;
            sender_chat?: Chat;
            date: number;
            chat: Chat;
            forward_from?: User;
            forward_from_chat?: Chat;
            forward_signature?: string;
            forward_sender_name?: string;
            forward_date?: number;
            reply_to_message?: Message;
            via_bot: User;
            edit_date: number;
            media_group_id?: string;
            author_signature?: string;
            text?: string;
            entities?: Array<MessageEntity>;
            animation?: Animation;
            audio?: Audio;
            document?: Document;
            photo?: Array<PhotoSize>;
            sticker?: Sticker;
            video?: Video;
            video_note?: VideoNote;
            voice?: Voice;
            caption?: string;
            caption_entities?: Array<MessageEntity>;
            contact?: Contact;
            dice?: Dice;
            game?: Game;
            poll?: Poll;
            venue?: Venue;
            location?: Location;
            new_chat_members?: Array<User>;
            left_chat_member?: User;
            new_chat_title?: string;
            new_chat_photo?: Array<PhotoSize>;
            delete_chat_photo?: true;
            group_chat_created?: true;
            supergroup_chat_created?: true;
            channel_chat_created?: true;
            migrate_to_chat_id?: number;
            migrate_from_chat_id?: number;
            pinned_message?: Message;
            invoice?: Invoice;
            successful_payment?: SuccessfulPayment;
            connected_website: string;
            passport_data?: PassportData;
            proximity_alert_triggered?: ProximityAlertTriggered;
            replay_markup?: InlineKeyboardMarkup;
            getFrom(): User;
            getChat(): Chat;
        }
        class ProximityAlertTriggered {
            traveler: User;
            watcher: User;
            distance: number;
        }
        class MessageEntity {
            type: string;
            offset: number;
            length: number;
            url?: string;
            user?: User;
            language?: string;
        }
        class Audio {
            file_id: string;
            file_unique_id: string;
            duration: number;
            performer: string;
            title: string;
            file_name: string;
            mime_type: string;
            file_size: number;
            thumb: PhotoSize;
        }
        class PhotoSize {
            file_id: string;
            file_unique_id: string;
            width: number;
            height: number;
            file_size: number;
        }
        class Sticker {
            file_id: string;
            file_unique_id: string;
            width: number;
            height: number;
            is_animated: boolean;
            thumb?: PhotoSize;
            emoji?: string;
            set_name?: string;
            mask_position?: MaskPosition;
            file_size?: number;
        }
        class MaskPosition {
            point: string;
            x_shift: number;
            y_shift: number;
            scale: number;
        }
        class Video {
            file_id: string;
            file_unique_id: string;
            width: number;
            height: number;
            duration: number;
            thumb?: PhotoSize;
            file_name?: string;
            mime_type?: string;
            file_size?: number;
        }
        class VideoNote {
            file_id: string;
            file_unique_id: string;
            length: number;
            duration: number;
            thumb: PhotoSize;
            file_size: number;
        }
        class Voice {
            file_id: string;
            file_unique_id: string;
            duration: number;
            mime_type?: string;
            file_size?: number;
        }
        class Contact {
            phone_number: string;
            first_name: string;
            last_name?: string;
            user_id?: number;
            vcard?: string;
        }
        class Dice {
            emoji: string;
            value: number;
        }
        class Game {
            title: string;
            description: string;
            photo: Array<PhotoSize>;
            text: string;
            text_entities: Array<MessageEntity>;
            animation: Animation;
        }
        class Poll {
            id: string;
            question: string;
            options: Array<PollOption>;
            total_voter_count: number;
            is_closed: Boolean;
            is_anonymous: Boolean;
            type: string;
            allows_multiple_answers: boolean;
            correct_option_id?: number;
            explanation?: string;
            explanation_entities?: Array<MessageEntity>;
            open_period: number;
            close_date: number;
        }
        class PollOption {
            text: string;
            voter_count: number;
        }
        class Location {
            longitude: number;
            latitude: number;
            horizontal_accuracy?: number;
            live_period?: number;
            heading?: number;
            proximity_alert_radius?: number;
        }
        class Venue {
            location: Location;
            title: string;
            address: string;
            foursquare_id?: string;
            foursquare_type?: string;
            google_place_id?: string;
            google_place_type?: string;
        }
        class Invoice {
            title: string;
            description: string;
            start_parameter: string;
            currency: string;
            total_amount: number;
        }
        class SuccessfulPayment {
            currency: string;
            total_amount: number;
            invoice_payload: string;
            shipping_option_id?: string;
            order_info?: OrderInfo;
            telegram_payment_charge_id: string;
            provider_payment_charge_id: string;
        }
        class OrderInfo {
            name?: string;
            photo_number?: string;
            email?: string;
            shipping_address?: ShippingAddress;
        }
        class ShippingAddress {
            country_code: string;
            state: string;
            city: string;
            street_line1: string;
            street_line2: string;
            post_code: string;
        }
        class ShippingOption {
            id: string;
            title?: string;
            prices: Array<LabeledPrice>;
        }
        class LabeledPrice {
            label: string;
            amount: number;
        }
        class PassportData {
            data: Array<EncryptedPassportElement>;
            credentials: EncryptedCredentials;
        }
        class EncryptedPassportElement {
            type: string;
            data?: string;
            phone_number?: string;
            email?: string;
            files?: Array<PassportFile>;
            front_side?: PassportFile;
            reverse_side?: PassportFile;
            selfie?: PassportFile;
            translation?: Array<PassportFile>;
            hash: string;
        }
        class EncryptedCredentials {
            data: string;
            hash: string;
            secret: string;
        }
        class PassportFile {
            file_id: string;
            file_unique_id: string;
            file_size: number;
            file_date: number;
        }
        const UNDEFINED: string;
        class RequestBody {
            update_id: number;
            message: Message;
            callback_query: CallbackQuery;
            getMessage(): Message;
            isMessage(): Boolean;
            getCallbackQuery(): CallbackQuery;
            isCallback(): Boolean;
            getInputMessage(): Message;
            getData(): string;
            getText(): string;
        }
        class CallbackQuery {
            id: string;
            from: User;
            getFrom(): User;
            message: Message;
            getMessage(): Message;
            inline_message_id?: string;
            chat_instance: string;
            data: string;
            getData(): string;
            game_short_name?: string;
        }
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
