const {
    MessageEmbed,
    MessageAttachment,
    MessageButton,
    MessageActionRow
} = require("discord.js");

const fetch = (...args) => import('node-fetch').then(({
    default: fetch
}) => fetch(...args));
const delay = require('delay');
const icon = require('../../icon.json');

module.exports = {
    name: 'ytt',
    description: 'Tạo link youtube together.',

    run: async (client, interaction, options) => {
        await interaction.deferReply().catch(e => {});
        const {
            channel
        } = interaction.member.voice;
        const channelReply = interaction.member.guild.channels.cache.get(interaction.channelId);
        const embedWrong = new MessageEmbed()
            .setColor('RED')
            .setFooter(`Đ𝒂̂𝒚 𝒍𝒂̀ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒖̛̣ đ𝒐̣̂𝒏𝒈 ! 𝑺𝒆̃ 𝒕𝒖̛̣ 𝒙𝒐́𝒂 𝒔𝒂𝒖 5𝒔`, icon.footericon)
            .setDescription('')
            .setTitle(`❌ | Xin vui lòng join vào một **Voice Room**`)

        if (!channel) {
            await interaction.editReply({
                embeds: [embedWrong],
                ephemeral: true
            })
            await delay(5000)
            await interaction.deleteReply();
        }
        fetch(`https://discord.com/api/v8/channels/${channelReply.id}/invites`, {
          method: "POST",
          body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913",
            target_type: 2,
            temporary: false,
            validate: null
          }),
          headers: {
            "Authorization": `Bot ${icon.token}`,
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
          .then(invite => {
            if (!invite.code) {
                embedWrong.setTitle(`:x: Không thể gửi lời mời !`)
                interaction.editReply({embeds: [embedWrong]})
                delay(5000)
                interaction.deleteReply();
            } 
            const embed = new MessageEmbed()
                .setDescription(`***\`\`\`yaml\nClick the button to join\`\`\`***`)
                .setColor('AQUA')
            // console.log(invite)
            const ytjoin = new MessageButton()
                        .setStyle('LINK')
                        // .setEmoji(icon.youtubeicon)
                        .setLabel('Watch YouTube')
                        .setURL(`https://discord.com/invite/${invite.code}`)
           
            const row = new MessageActionRow()
            .addComponents([ytjoin])
            interaction.editReply({ embeds: [embed], components: [row]})
            
          })
    }
}