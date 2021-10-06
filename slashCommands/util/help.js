const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Hỗ trợ command!',
    run: async (client, interaction, options) => {
        await interaction.deferReply().catch(e => {});
        const embed = new MessageEmbed()
        .setTitle('🔰◦Help◦Menu◦📋')
        .setDescription('COMING SOON...🚀')
        await interaction.followUp({embeds: [embed], ephemeral: true})
    }
}