import { Client } from'clashofclans.js';

const ClashClient = new Client({keys: [process.env.COC_DEV_TOKEN]});

ClashClient.getPlayer(process.env.COC_PLAYER_TAG)
  .then((player) => {
    console.log(`Player: ${player.name}. Clan: ${player.clan}`);
  });

ClashClient.getClan(process.env.COC_CLAN_TAG)
  .then((clan) => {
    console.log(`Clan: ${clan.name}`);
  })

export {ClashClient};