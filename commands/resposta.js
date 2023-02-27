import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import askGPT from "../chatGPTAPI.js";

const resposta = {
    data: new SlashCommandBuilder()
        .setName("responde")
        .setDescription("Responde Usando chatGPT")
        .addStringOption((option) =>
            option
                .setName("texto")
                .setDescription("Pergunta para o chatGPT")
                .setRequired(true)
        ),

    async execute(interaction) {
        const texto = interaction.options.getString("texto");
        
        // Indica que o bot está processando o comando
        await interaction.deferReply();

        let respostaGPT;
        try{
            respostaGPT = await askGPT(texto);
        }catch(err){
            console.log(err);
        }
       
        //console.log(respostaGPT);
        const formatoResposta = new EmbedBuilder()
            .setColor("Green")
            .setTitle("ChatGPT")
            .addFields({
                name: "Pergunta",
                value: texto,
            })
            .addFields({
                name: "Resposta",
                value: respostaGPT,
            });
        try {
            // Envia a resposta ao usuário
            await interaction.editReply({ embeds: [formatoResposta] });
        } catch (err) {
            await interaction.reply(`O seguinte erro ocorreu ${err}`);
        }

    },
};

export default resposta;
