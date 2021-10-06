const {
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    MessageAttachment
} = require('discord.js');

const config = require('../../icon.json');


module.exports = {
    name: 'help',
    description: 'Hỗ trợ command!',
    run: async (client, interaction, options) => {
        await interaction.deferReply().catch(e => {});
        // CHANNEL
        const welcomeChannel = client.channels.cache.get("893153516745531406");
        const botCommandChannel = client.channels.cache.get('893153516900737066');
        const mainChannel = client.channels.cache.get('893153516745531410');
        const planChannel = client.channels.cache.get('893153517114626098');
        const publicVChannel = client.channels.cache.get('893160673767460864');
        const musicChannel = client.channels.cache.get('893153516900737073');
        // USER
        const ownerId = client.users.cache.get('337924987988213764');
        // EMBEDS ARRAY
        let embeds =[];
        embeds.push(new MessageEmbed()
            .setTitle(`🔰『M』『E』『N』『U』🔰`)
            .setColor('LUMINOUS_VIVID_PINK')
            .setDescription(`◦ 𝘽𝙖̉𝙣𝙜 𝙝𝙤̂̃ 𝙩𝙧𝙤̛̣ 𝙣𝙖̀𝙮 𝙨𝙚̃ 𝙙𝙪̛𝙤̛̣𝙘 𝙥𝙤𝙨𝙩 𝙩𝙖̣𝙞 『${welcomeChannel.toString()}』`)
            .addFields(
                { name: `🤖 𝘽𝙊𝙏 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨`, value: `> Tất cả command tương tác với bot sẽ được dùng tại『${botCommandChannel.toString()}』`, inline: false},
                { name: `⭐𝙈𝙖𝙞𝙣`, value: `> Đây là kênh chat chung cho server『${mainChannel.toString()}』`, inline: false},
                { name: `📅 𝙎𝙚𝙧𝙫𝙚𝙧 𝙋𝙡𝙖𝙣𝙨`, value: `> Thông báo dự định, kế hoạch tiếp theo 『${planChannel.toString()}』`, inline: false},
                { name: `🎧 𝙋𝙪𝙗𝙡𝙞𝙘 𝙑𝘾`, value: `> Mọi người có thể tự do tham gia Voice Chat tại kênh『${publicVChannel.toString()}』`, inline: false},
                { name: `🎵 𝙈𝙪𝙨𝙞𝙘 24/7`, value: `> Phòng nghe nhạc tự động 24/7『${musicChannel.toString()}』`, inline: false},
                // { name: `\u200B`, value: `\u200B`},
                { name: `𝐁𝐎𝐓 𝐁𝐘:`, value: `> ⇰ ${ownerId.toString()}`, inline: false}
            )
            .setFooter('𝘛𝘩𝘢𝘯𝘬𝘴 𝘧𝘰𝘳 𝘑𝘰𝘪𝘯𝘪𝘯𝘨 | 𝑝𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦: 𝑙𝑞ℎ𝑎𝑖𝑖𝑖',config.footericon)
            .setImage(`https://images2.imgbox.com/e3/96/ytpx9gjJ_o.png`)
        )



        await interaction.followUp({embeds: embeds, ephemeral: true})
    }
}