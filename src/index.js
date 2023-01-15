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
client.commands = Commands;

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command named ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch(error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
  
});

// Log in to Discord
client.login(process.env.DISCORD_TOKEN);
