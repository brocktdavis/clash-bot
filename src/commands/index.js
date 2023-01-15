// Imports to calculate commands
import { Collection } from 'discord.js';
import fs from 'fs';
import path from 'path';

// List of files to export
const files = fs.readdirSync(__dirname).filter((filename) => {
  if (filename === 'index.js') { return false; }
  if (!filename.endsWith('.js')) { return false; }
  return true;
});

// Put each file's module exports into commands collection
const commands = new Collection();
for (const filename of files) {
  const fullPath = path.join(__dirname, filename);
  const command = require(fullPath);
  commands.set(command.data.name, command);
}

export default commands;