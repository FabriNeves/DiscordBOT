import { SlashCommandBuilder } from "discord.js"

//import askGPT from "../chatGPTAPI";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("responde")
        .setDescription("responde Usando chatGPT")
        .addStringOption(option =>
            option.setName("texto")
                .setDescription("O texto que o bot deve responder")
                .setRequired(true)),

    async execute(interaction) {
        const texto = interaction.options.getString("texto")
        await interaction.reply(texto);
        //await interaction.reply(await askGPT(texto));
    }
}
