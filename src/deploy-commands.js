// dotenv config
import {config} from 'dotenv';
config();
// Rest of imports
import { REST, Routes } from 'discord.js';
import Commands from './commands';

const args = process.argv
  .slice(2)
  .filter((str) => str.startsWith('--'))
  .map((str) => str.slice(2))
;

const rest = new REST({ version: '10'}).setToken(process.env.DISCORD_TOKEN);

const deploy = async (global) => {
  try { 
    let result;
    if (global) {
      result = await rest.put(
        Routes.applicationCommands(process.env.DISCORD_APP_ID),
        { body: Commands.map((value) => value.data) },
      );
    } else {
      result = await rest.put(
        Routes.applicationGuildCommands(process.env.DISCORD_APP_ID, process.env.DISCORD_SERVER_ID),
        { body: Commands.map((value) => value.data) },
      );
    }

    console.log(`Registered ${result.length} commands ${global ? 'globally' : 'to single server'}`);
  } catch(error) {
    console.log(error);
  }
};

deploy(args.includes('global'));
