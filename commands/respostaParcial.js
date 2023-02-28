import {ChatGPTAPI} from 'chatgpt';
import { SlashCommandBuilder } from "discord.js";
import dotenv from'dotenv';
dotenv.config()


const respostaParcial = {
    data: new SlashCommandBuilder()
        .setName("responde-parcial")
        .setDescription("Retorna usando chatGPT")
        .addStringOption((option) =>
            option
                .setName("prompt")
                .setDescription("input para prompt do chatGPT")
                .setRequired(true)
        ),
    async execute(interaction) {
        const prompt = interaction.options.getString("prompt");
        await interaction.reply("...");
        await respondeParcialGPT(prompt,interaction);

    }
};

export default respostaParcial;


async function respondeParcialGPT(prompt, interaction) {
    let mensagem = "...";
  
    if (prompt == "") {
      return "vazio";
    }
  
    const api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY
    });
  
    const res = await api.sendMessage(prompt, {
      onProgress: async (progress) => {
        mensagem = mensagem + progress.text;
        await interaction.editReply(mensagem);
      }
    });
  
    return res.data.text;
  }
  


// const res = await api.sendMessage('Write a 500 word essay on frogs.', {
//     // print the partial response as the AI is "typing"
//     onProgress: (partialResponse) => console.log(partialResponse.text)
//   })
  
//   // print the full text at the end
//   console.log(res.text)