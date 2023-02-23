// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// dotenv
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Importação de comandos
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname,"commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

for(file of commandsFiles){
    const filePath = path.join(commandsPath,file);
    const commands = require(filePath);
    console.log(commands);
}

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);