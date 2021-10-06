const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Shows ping',
    run: async (client, interaction, options) => {
        await interaction.deferReply().catch(e => {});
        const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`📍 Ping is: ${client.ws.ping}`)
        await interaction.followUp({embeds: [embed], ephemeral: true})
    }
}