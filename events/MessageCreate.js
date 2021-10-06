const client = require('../index')

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return

    const [cmd, ...args] = message.content
        .trim()
        .split(" ");
    const Discord = require('discord.js');
    let command = client.commands.get(cmd)

    if (!command) command = client.commands.get(client.aliases.get(cmd))
    if (command) {
        // User Perms
        if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send(`You need \`${command.UserPerms || []}\` Permissions`) // Added this

        // Bot Perms
        if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.channel.send(`I need \`${command.BotPerms || []}\` Permissions`)

        await command.run(client, message, args, Discord) // <= discord over there
    } // This should be it lets test it out :D
})