import {ChatGPTAPI} from 'chatgpt';
//const ChatGPTAPI = require('chatgpt');


import dotenv from'dotenv';
dotenv.config()
const { OPENAI_API_KEY } = process.env


//console.log(OPENAI_API_KEY);
async function askGPT(message) {

    if (message == "") {
        return "vazio";
    }
    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY
    })

    const res = await api.sendMessage(message);
    //console.log(res.text);
    return res.text;
}

//console.log( await askGPT("O que um bot de discord pode fazer ?"));

export default askGPT;

