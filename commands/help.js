const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lists all commands on the server.',
    aliases: 'list',
    execute(message, args) {
        message.delete();
        const data = [];
        const { commands } = message.client;
        const name = args[0]

        data.push(commands.map(command => command.name).join('\n '))
            console.log("Help Command Executed.")
        
        let help = new Discord.MessageEmbed()
        .setTitle("**Command List:**")
        .setDescription(`The following is a list of all commands.
        To receive more information about a specific command, please type odin list <command>.
        In order to execute a command, please use the minus '-' prefix.\n\n **Commands:**\n${data}`)

        if(message.content == '-help') {
        message.channel.send(help)
        }

        switch(args[0]) {
            case 'claim':
                let claim = new Discord.MessageEmbed()
                .setTitle("**Claim**")
                .setDescription("**Description:** This command allows any Staff Member to claim a Ticket for themselves so another does not intrude and take over. Staff use only.\n\n**Usage:** -claim\n\n**Aliases:** None.")
                message.channel.send(claim)

                break;

                case 'close':
                    let close = new Discord.MessageEmbed()
                    .setTitle("**Close**")
                    .setDescription("**Description:** This command closes User Tickets. Staff Use only.\n\n**Usage:** -close\n\n**Aliases:** None.")
                    message.channel.send(close)

                    break;

                    case 'help':
                        let help2 = new Discord.MessageEmbed()
                        .setTitle("**Help**")
                        .setDescription("**Description:** This command will send a Message Embed that will list all the commands on PlatinumCraft. This command can be used by anyone.\n\n**Usage:** -help\n\n**Aliases:** list.")
                        message.channel.send(help2)

                        break;

                        case 'invite':
                            let invite = new Discord.MessageEmbed()
                            .setTitle("**Invite**")
                            .setDescription("**Description:** This command allows other users to join a ticket. It is mainly used when there is a witness to Griefing in-game. Staff use only.\n\n**Usage:** -invite (USER)\n\n**Aliases:** None.")
                            message.channel.send(invite)

                            break;

                            case 'purge':
                                let purge = new Discord.MessageEmbed()
                                .setTitle("**Purge**")
                                .setDescription("**Description:** This command is used to delete/clear user messages. This is mainly used when aa user says something biased, racist, when they bully, etc. Senior Staff use only.\n\n**Usage:** -purge (USER) (AMT)\n\n**Aliases:** clear, delete.")
                                message.channel.send(purge)

                                break;

                                case 'ticket':
                                    let ticket = new Discord.MessageEmbed()
                                    .setTitle("**Ticket**")
                                    .setDescription("**Description:** This command creates a Support Ticket/Channel for a user to ask any question of the sorts on the server. Mainly used for Player Reports, Store Issues, General Help, or to apply as a Staff Member. This command can be used by anyone.\n\n**Usage:** -ticket\n\n**Aliases:** new, support.")
                                    message.channel.send(ticket)

                                    break;

                                    case 'ttt':
                                        let ttt = new Discord.MessageEmbed()
                                        .setTitle("**Tic Tac Toe**")
                                        .setDescription("**Description:** This command allows a user to play Tic Tac Toe against a friend! This command can be used by anyone.\n\n**Usage:** -ttt (USER)\n\n**Aliases:** None.")
                                        message.channel.send(ttt)

                                        break;

                                        case 'suggest':
                                            let suggest = new Discord.MessageEmbed()
                                            .setTitle("**Suggestions**")
                                            .setDescription("**Description:** This command allows a user to create a Suggestion. Users can vote and Staff Members will go through the suggestion before it is applied or denied.! This command can be used by anyone.\n\n**Usage:** -suggest (GLOBAL/MINECRAFT)\n\n**Aliases:** suggestion.")
                                            message.channel.send(suggest)

                                            break;
        }
    }
}