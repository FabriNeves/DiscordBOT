import {ChatGPTAPI} from 'chatgpt';
import dotenv from'dotenv';
dotenv.config()

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


export default askGPT;

