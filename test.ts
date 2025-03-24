import "reflect-metadata";
import { Telegram } from "./index";
import * as fs from 'fs';
import * as FormData from "form-data";
import * as http from 'http'
import * as https from 'https'


const botToken = "1155177458:AAHGw1XX4VVAzK7tgiOqLXzJiu_fyk4pL78"; // Replace with your actual bot token
const chatId = 705801802;     // Replace with the recipient's chat ID
const filePath = "C:\\Users\\xz841\\Downloads\\1740964515342.png"; // Path to your photo file

// // Validate file existence
// if (!fs.existsSync(filePath)) {
//     throw new Error(`File not found: ${filePath}`);
// }

// // Create FormData and append the photo and chat_id
// const form = new FormData();
// form.append("chat_id", chatId);
// form.append("photo", fs.createReadStream(filePath));
// form.append("caption", "test123");

// // Set up HTTPS request options
// const options = {
//     method: "POST",
//     hostname: "api.telegram.org",
//     port: 443,
//     path: `/bot${botToken}/sendPhoto`,
//     headers: form.getHeaders(), // Automatically includes Content-Type and boundary
// };

// function sendRequest(options: https.RequestOptions, form: FormData): Promise<string> {
//     return new Promise((resolve, reject) => {
//         const req = https.request(options, (res) => {
//             let responseData = "";

//             res.on("data", (chunk) => {
//                 responseData += chunk;
//             });

//             res.on("end", () => {
//                 resolve(responseData); // 成功回傳結果
//             });
//         });

//         req.on("error", (err) => {
//             reject(err); // 傳遞錯誤
//         });

//         form.pipe(req); // 將表單數據傳遞給請求
//     });
// }

// // Example usage
// sendRequest(options, form)
//     .then((response) => {
//         console.log("Response:", response);
//     })
//     .catch((error) => {
//         console.error("Request Error:", error);
//     });

Telegram.Bot.api.sendPhoto(
    botToken,
    chatId,
    fs.createReadStream(filePath),
    // "https://gita.komica1.org/00b/src/1742532658137.jpg",
    "aaaaa"
).then(r=>console.log(r))
.catch( e=> console.error(e))

// fs.readFile("C:\\Users\\xz841\\Downloads\\1740964515342.png",'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//         // console.error('Error reading file:', err);
//         // Telegram.Bot.api.sendPhoto(
//         //     token,
//         //     chat_id,
//         //     "https://gita.komica1.org/00b/src/1742532658137.jpg",
//         //     "a123"
//         // ).then(r=>console.log(r)).catch( e=> console.error(e))
//         // return;
//     }

//     Telegram.Bot.api.sendPhoto(
//         token,
//         chat_id,
//         data.toString(),
//         // "https://gita.komica1.org/00b/src/1742532658137.jpg",
//         "ccccc"
//     ).then(r=>console.log(r))
//     .catch( e=> console.error(e))
//     return;
//     // console.log('File content:', data);
// })
