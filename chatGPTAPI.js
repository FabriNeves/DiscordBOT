const esmRequire = require('esm')(module);
const ChatGPTAPI = esmRequire('chatgpt');
//const ChatGPTAPI = require('chatgpt');


const dotenv = requir('dotenv');
dotenv.config()
const { OPENAI_API_KEY } = process.env


console.log(OPENAI_API_KEY);
async function askGPT(message) {

    if (message == "") {
        return "vazio";
    }
    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY
    })

    const res = await api.sendMessage(Message);
    console.log(res.text);
    return res.text;
}


