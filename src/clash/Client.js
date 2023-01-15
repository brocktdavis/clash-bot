import { Client } from'clashofclans.js';

const ClashClient = new Client({keys: [process.env.COC_DEV_TOKEN]});

ClashClient.getPlayer('<FILL>')
  .then((player) => {
    console.log(`Player: ${player.name}. Clan: ${player.clan}`);
  })

export {ClashClient};