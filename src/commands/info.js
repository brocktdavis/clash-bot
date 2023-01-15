import { SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('info')
  .setDescription('Replies with information about me.')

const execute = async (interaction) => {
  console.log('Command Info: ', interaction);
  await interaction.reply('Name: ', process.env.NAME);
}

export {data, execute};