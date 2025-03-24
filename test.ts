import "reflect-metadata";
import { Telegram } from "./index";
import * as fs from 'fs';
import * as FormData from "form-data";
import * as http from 'http'
import * as https from 'https'


const botToken = ""; // Replace with your actual bot token
const chatId = 0;     // Replace with the recipient's chat ID
const filePath = "icon.png"; // Path to your photo file

Telegram.Bot.api.sendPhoto(
    botToken,
    chatId,
    fs.createReadStream(filePath),
    "This is message",
    "Markdown",
    false,
    0,
    false,
    {
        "inline_keyboard": [
            [
                {
                "text": "Vendor cmd 123",
                "callback_data": "/vendor/yes/123"
                }
            ]
        ]
    }
).then(r=>{
    console.log(r)
})
.catch( e => {
    console.error(e)
})