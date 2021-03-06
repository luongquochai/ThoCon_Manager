const {
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    MessageAttachment
} = require('discord.js');

const config = require('../../icon.json');


module.exports = {
    name: 'help',
    description: 'Hแป trแปฃ command!',
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
            .setTitle(`๐ฐใMใใEใใNใใUใ๐ฐ`)
            .setColor('LUMINOUS_VIVID_PINK')
            .setDescription(`โฆ ๐ฝ๐ฬ๐ฃ๐ ๐๐คฬฬ ๐ฉ๐ง๐คฬฬฃ ๐ฃ๐ฬ๐ฎ ๐จ๐ฬ ๐๐ชฬ๐คฬฬฃ๐ ๐ฅ๐ค๐จ๐ฉ ๐ฉ๐ฬฃ๐ ใ${welcomeChannel.toString()}ใ`)
            .addFields(
                { name: `๐ค ๐ฝ๐๐ ๐พ๐ค๐ข๐ข๐๐ฃ๐๐จ`, value: `> Tแบฅt cแบฃ command tฦฐฦกng tรกc vแปi bot sแบฝ ฤฦฐแปฃc dรนng tแบกiใ${botCommandChannel.toString()}ใ`, inline: false},
                { name: `โญ๐๐๐๐ฃ`, value: `> ฤรขy lร  kรชnh chat chung cho serverใ${mainChannel.toString()}ใ`, inline: false},
                { name: `๐ ๐๐๐ง๐ซ๐๐ง ๐๐ก๐๐ฃ๐จ`, value: `> Thรดng bรกo dแปฑ ฤแปnh, kแบฟ hoแบกch tiแบฟp theo ใ${planChannel.toString()}ใ`, inline: false},
                { name: `๐ง ๐๐ช๐๐ก๐๐ ๐๐พ`, value: `> Mแปi ngฦฐแปi cรณ thแป tแปฑ do tham gia Voice Chat tแบกi kรชnhใ${publicVChannel.toString()}ใ`, inline: false},
                { name: `๐ต ๐๐ช๐จ๐๐ 24/7`, value: `> Phรฒng nghe nhแบกc tแปฑ ฤแปng 24/7ใ${musicChannel.toString()}ใ`, inline: false},
                // { name: `\u200B`, value: `\u200B`},
                { name: `๐๐๐ ๐๐:`, value: `> โฐ ${ownerId.toString()}`, inline: false}
            )
            .setFooter('๐๐ฉ๐ข๐ฏ๐ฌ๐ด ๐ง๐ฐ๐ณ ๐๐ฐ๐ช๐ฏ๐ช๐ฏ๐จ | ๐๐๐ค๐๐๐๐ ๐๐ฆ: ๐๐โ๐๐๐๐',config.footericon)
            .setImage(`https://images2.imgbox.com/e3/96/ytpx9gjJ_o.png`)
        )



        await interaction.followUp({embeds: embeds, ephemeral: true})
    }
}