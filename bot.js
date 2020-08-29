const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client();

client.commands = new Discord.Collection(); // The container for all commands

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// reads the file 'commands', then syncs it to 'commandFiles' constant

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
} // adds all command files from the files folder into the commands collection

client.on("ready", () => {
    console.log("Bot logged in successfully")
})

client.on("message", message => {
    function isValidCommand(message) {
        return (message.content.toLowerCase().startsWith(process.env.prefix) && !message.author.bot);
    } // returns whether or not the message is a valid command
    
    if (!isValidCommand(message)) { return; }
    // exits if the message is not a valid command

    const args = message.content.slice(process.env.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(message, args); // Tries to run the command
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    } // If an error occours, log it and tell the user.
})

client.on('message', message => {
    
    if(message.content == ('fuck')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('shit')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('asshole')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('ass')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('nigga')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('nigger')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('bitch')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('cunt')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('dick')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('dickhead')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    } else if(message.content == ('bastard')) {
        message.delete();
        message.channel.send(`Watch your Profanity ${message.author.username}!`);
    }
})

client.login(process.env.token);