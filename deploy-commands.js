import { REST, Routes } from"discord.js";

// dotenv
import dotenv from 'dotenv';
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// importação dos comandos
// const fs = require("node:fs")
// const path = require("node:path")
// const commandsPath = path.join(__dirname, "commands")
// const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []
import ping from "./commands/ping.js";
commands.push(ping.data.toJSON());
import resposta from "./commands/resposta.js";
commands.push(resposta.data.toJSON());
// import respostaDelay from "./commands/respostaDelay.js";
// commands.push(respostaDelay.data.toJSON());
// for (const file of commandFiles) { 
//    const command = require(`./commands/${file}`)
//    commands.push(command.data.toJSON())
// }

// instância REST
const rest = new REST({version: "10"}).setToken(TOKEN);

// deploy
(async () => {
    try {
        console.log(`Resentando ${commands.length} comandos...`)
    
        // PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
            console.log("Comandos registrados com sucesso!")
    }
    catch (error){
        console.error(error)
    }
})()