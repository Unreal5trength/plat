const Discord = require('discord.js');

module.exports = {
    name: 'purge',
    description: 'Purges player messages. Senior Staff use only.',
    aliases: ['clear', 'delete'],
    cooldown: 60,
execute(message, args) {

    if (!message.member.roles.cache.some(role => role.name === "Senior Staff")) {
        message.author.send("You do not have access to this command!");
        return;
    };
    message.delete()
    const user = message.mentions.users.first();

    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Must specify an amount to delete!');
    if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');

    message.channel.messages.fetch({
     limit: 100,
    }).then((messages) => {
     if (user) {
     const filterBy = user ? user.id : Client.user.id;
     messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
     }
     message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
    
    }
}