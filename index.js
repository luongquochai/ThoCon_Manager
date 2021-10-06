const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// ------------------- BOT CODING---------------------------------
const { Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGES,
    ]
})
const mySecret = process.env['token']
const fetch = (...args) => import('node-fetch').then(({
  default: fetch
}) => fetch(...args));
const config = require('./icon.json')
module.exports = client;
client.commands = new Collection()
client.aliases = new Collection()
client.slash_commands = new Collection();

require('./handler/slash_commands');
require('./handler')(client);


client.login(mySecret)