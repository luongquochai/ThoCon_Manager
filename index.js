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

// client.on('messageCreate', message => {
//   if (!message.guild || message.author.bot ) return;
//   // var args = message.content.slice(",").trim().split(" ")
//   console.log(message.content);
//       // ["ytt", "asda"] --> cmd = "ytt" & ["asda"]
//       var cmd = message.content
//       const { channel } = message.member.voice;
//       if (!channel) return message.channel.send(new MessageEmbed()
//             .setTitle(`❌ ERROR | Vui lòng **join** channel đầu tiên !`)
//         );
//       if (cmd == "ytt" || cmd == "youtubetogether") {
//         fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
//           method: "POST",
//           body: JSON.stringify({
//             max_age: 86400,
//             max_uses: 0,
//             target_application_id: "755600276941176913",
//             target_type: 2,
//             temporary: false,
//             validate: null
//           }),
//           headers: {
//             "Authorization": `Bot ${config.token}`,
//             "Content-Type": "application/json"
//           }
//         }).then(res => res.json())
//           .then(invite => {
//             if (!invite.code) return message.reply(":x: Không thể gửi lời mời !").then(msg => msg.delete({timeout: 5000}).catch(e => console.log(e.message)))
//             const embed = new MessageEmbed()
//             .setTitle('[Click to watching Youtube together]')
//             .setDescription(`(https://discord.com/invite/${invite.code})`)
//             message.channel.send({embeds: [embed]})
//           })
//       }
// })

client.login("ODk0MjE4MDQ2NjQ0ODIyMDE2.YVmzdA.yk9l-W4RVoZtTO_Gs06j4WUHjpA")