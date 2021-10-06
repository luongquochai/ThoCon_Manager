const {
    MessageEmbed
} = require('discord.js');

const wait = require('util').promisify(setTimeout);

module.exports = {
    name: 'clear',
    description: 'Xóa tin nhắn !',
    options: [{
        name: 'amount',
        type: 'NUMBER',
        description: 'Chọn số lượng tin nhắn muốn xóa.',
        required: true
    }],
    run: async (client, interaction, options) => {
        
        const Amount = interaction.options.getNumber('amount');
        const channel = await client.channels.resolve(interaction.channelId);

        
        const embed = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
        
        
        await interaction.defer();
        if(Amount > 99 || Amount <= 0) {
            embed.setDescription(`Số lượng nhỏ hơn 100 và lớn hơn 0.`)
            await interaction.followUp({
                embeds: [embed]
            }).then(msg => {
                setTimeout(() => msg.delete(), 3000)
              })
        } else {
            await channel.bulkDelete(parseInt(Amount) + 1, true).then(m => {
                embed.setDescription(`Đã xóa ${Amount} tin nhắn.`);
            })
            
            
            await channel.send({
                embeds: [embed]
            }).then(msg => {
                setTimeout(() => msg.delete(), 3000)
              })
        }
        // await interaction.deferReply();

        
        
        
        
    }
}