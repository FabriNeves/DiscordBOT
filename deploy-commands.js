import { REST, Routes } from"discord.js";

// dotenv
import dotenv from 'dotenv';
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// importação dos comandos

const commands = []
import ping from "./commands/ping.js";
commands.push(ping.data.toJSON());
import resposta from "./commands/resposta.js";
commands.push(resposta.data.toJSON());
// import respostaParcial from "./commands/respostaParcial.js";
// commands.push(respostaParcial.data.toJSON());


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