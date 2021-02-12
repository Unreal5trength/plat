const Discord = require('discord.js');

module.exports = {
        name: 'invite',
        description: "Invites a user to a Support Ticket.",
        execute(message, args) {
            message.delete()
            console.log(`This message will appear if the Invite Command has been executed!`)

            let userInv = message.mentions.users.first()

            if(!message.member.roles.cache.some(role => role.name === "Senior Members")) {
                message.author.send("Only Staff Members can invite users to tickets! If your ticket has been answered, ask them to close the ticket.");
                return;
            }   

            if(message.channel.parent == "714226877161537587" || "748662749659398174" || "748663001711902821") {
                message.channel.updateOverwrite(userInv, { VIEW_CHANNEL: true });

                message.channel.send(`You have invited ${userInv} to the Support Ticket!`)
                console.log(userInv)
            } else {
                return;
            }

    }
}