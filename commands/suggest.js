const Discord = require('discord.js');

module.exports = {
    name: 'suggest',
    description: 'Allows a user to create a suggestion for the server.',
    aliases: 'suggestion',
    execute(message, args) {

        message.delete();

        const suggestionEmbed = new Discord.MessageEmbed()
        .setTitle(`**${args.shift([0]).toUpperCase()} Suggestion**`)
        .setDescription( `Suggestion created by ${message.author.username}.\n**Suggestion:** ${args.join(" ")}`);

        function suggestion() {
            message.channel.send(suggestionEmbed)
        }

        suggestion();
    }
}