const Discord = require('discord.js');

module.exports = {
    name: 'claim',
    description: 'Renames player tickets. Staff use only.',
    execute(message, args) {
        message.delete();
        message.channel.send(`The Ticket was claimed by the Staff Member ${message.author.username}.`)
        const staff = message.guild.roles.cache.find(role => role.name === "Staff");

        if(!message.member.roles.cache.some(role => role.name === "Staff")) {
            return message.author.send("Only Staff Members can close Tickets! If your ticket has been answered, ask them to close the ticket.")
        } else if (message.channel.name.startsWith("gs-")) {
            message.channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
            message.channel.updateOverwrite(staff.id, { VIEW_CHANNEL: false });
        } else if (message.channel.name.startsWith("pr-")) {
            message.channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
            message.channel.updateOverwrite(staff.id, { VIEW_CHANNEL: false });
        } else if (message.channel.name.startsWith("store-")) {
            message.channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
            message.channel.updateOverwrite(staff.id, { VIEW_CHANNEL: false });
        } else if (message.channel.name.startsWith("ticket-")) {
            message.channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
            message.channel.updateOverwrite(staff.id, { VIEW_CHANNEL: false });
        }

    }
}