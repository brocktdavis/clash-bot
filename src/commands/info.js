import { SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('info')
  .setDescription('Replies with information about me.')

const execute = async (interaction) => {
  await interaction.reply('Hello! I am ' + interaction.client.user.username);
}

export {data, execute};