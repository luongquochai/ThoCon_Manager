const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Says something!',
    options: [{
        name: 'content',
        type: 'STRING',
        description: 'Nhập nội dung',
        required: true
    }],
    run: async (client, interaction, options) => {
        await interaction.deferReply().catch(e => {});
        const content = interaction.options._hoistedOptions.map(m => m.value).join(' ');
        // console.log(content);
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${content}`)

        await interaction.followUp({
            embeds: [embed]
        }).then(msg => {
            msg.react('👍')
            msg.react('👎')
        })
       
    }
}