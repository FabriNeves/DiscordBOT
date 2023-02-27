import { SlashCommandBuilder } from "discord.js"

const ping = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com 'Pong!"),

    async execute(interaction) {
        await interaction.reply("Pong!")
    }
}

export default ping;