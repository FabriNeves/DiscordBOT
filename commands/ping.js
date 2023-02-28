import { SlashCommandBuilder } from "discord.js"
//import wait from ('node:timers/promises').setTimeout;
import { setTimeout } from 'node:timers/promises';

const ping = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com 'Pong!"),

    async execute(interaction) {
        await interaction.reply('Pong!');
		await setTimeout(2000);
		await interaction.editReply('Pong again!');
        
    }
}

export default ping;