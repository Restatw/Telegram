"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.Telegram.Bot.api.getMe("1155177458:AAHGw1XX4VVAzK7tgiOqLXzJiu_fyk4pL78").then(result => console.log(result)).catch(error => console.log(error));