"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const index_1 = require("./index");
const fs = require("fs");
const botToken = ""; // Replace with your actual bot token
const chatId = 0; // Replace with the recipient's chat ID
const filePath = "icon.png"; // Path to your photo file
index_1.Telegram.Bot.api.sendPhoto(botToken, chatId, fs.createReadStream(filePath), "This is message", "Markdown", false, 0, false, {
    "inline_keyboard": [
        [
            {
                "text": "Vendor cmd 123",
                "callback_data": "/vendor/yes/123"
            }
        ]
    ]
}).then(r => {
    console.log(r);
})
    .catch(e => {
    console.error(e);
});
