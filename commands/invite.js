const Discord = require('discord.js');

module.exports = {
        name: 'invite',
        description: "Invites a user to a Support Ticket.",
        execute(message, args) {
            message.delete()
            console.log(`This message will appear if the Invite Command has been executed!`)

            const guild = message.guild;
            let userInv = message.mentions.users.first()

            if(!message.member.roles.cache.some(role => role.name === "Staff")) {
                message.author.send("Only Staff Members can invite users to tickets! If your ticket has been answered, ask them to close the ticket.");
                return;
            }   

            if(!message.channel.name.startsWith("ticket")) {
                return;
            } else if (!message.channel.name.startsWith("gs")) {
                return;
            } else if (!message.channel.name.startsWith("pr")) {
                return;
            } else if (!message.channel.name.startsWith("store")) {
                return;
            }

            message.channel.updateOverwrite(userInv, { VIEW_CHANNEL: true });

            message.channel.send(`You have invited ${userInv} to the Support Ticket!`)
            console.log(userInv)
    }
}