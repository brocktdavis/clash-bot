// dotenv config
import {config} from 'dotenv';
config();
// Rest of imports
import {Client, GatewayIntentBits, Events, } from 'discord.js';

import Commands from './commands';

// Init client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', (message) => {
  console.log('message');
  console.log("Message created: ", message);
})

client.on(Events.InteractionCreate, (interaction) => {
  console.log('interaction');
  console.log("Interaction created: ", interaction);
})

// Log in to Discord
client.login(process.env.DISCORD_TOKEN);
