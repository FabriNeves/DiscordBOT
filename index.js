import { Client, Events, GatewayIntentBits, Collection } from 'discord.js'

// dotenv
import dotenv from'dotenv'
dotenv.config()
const { TOKEN } = process.env

// importação dos comandos

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

import ping from "./commands/ping.js"
client.commands.set(ping.data.name,ping);
import resposta from './commands/resposta.js'
client.commands.set(resposta.data.name,resposta);
//import respostaParcial from './commands/respostaParcial.js'
//client.commands.set(respostaParcial.data.name,respostaParcial);




// Login do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`)
});
client.login(TOKEN)

// Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction =>{
        //console.log(interaction)
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Comando não encontrado")
        return
    }
    try {
        await command.execute(interaction)
    } 
    catch (error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar esse comando!")
    }
})
