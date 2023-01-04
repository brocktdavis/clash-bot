// dotenv config
import {config} from 'dotenv';
config();

import {Client} from 'discord.js';

console.log('Hello ', process.env.USER);
console.log('token: ', process.env.BOT_TOKEN);