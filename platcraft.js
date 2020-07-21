const Discord = require('discord.js')
const client = new Discord.Client(); 
let counter = 0;
const embed1 = new Discord.MessageEmbed()
.setTitle('**All Discord Commands:**')
.addField('Commands:', "**-ping:** Server Bot will respond back with Pong!\n\n**-commands:** Lists all commands on the server.\n\n**-ticket:** Creates a Support Ticket.\n\n**-apply:** Creates a Staff Application.\n\n**-roll:** Picks a random number from 1-6.\n\n**-purge:** Deletes Player messages.\n\n**-close:** Closes a Support Ticket!\n\n**-closeapp:** Closes an Application Ticket!\n\n**-rps:** Plays Rock, Paper, Scissors against the Server Bot.\n\n**-fortune:** Ask a question after the command and you will receive an answer.\n\n **-suggest:** Recommend something to the server. Users can vote if they agree or disagree.\n\n **-role:** Gives the user a specific role.")
.setTimestamp(timestamp = Date.now())
.setColor('459dcc')

const embed2 = new Discord.MessageEmbed()
    .setTitle('PlatinumCraft -> Staff Application:')
    .setDescription('**Part 1 of the Ticket:**\n**(1)** What is your IGN?\n**(2)** How long have you played on the server?\n**(3)** Do you have a functioning recording software and a functioning mic?\n\n**Part 2 of the Ticket:**\n**(4)** What ways can you use to find if anyone has cheated (ex: doing /gmc, /give, etc)?\n**(5)** What are Macros\n**(6)** What does DQ stand for?\n**(7)** If players In-Game were to start an argument that is serious but not serious enough to mute, what will you do?\n\n**Part 3 of the Ticket:**\n**(8)** Why would you like to apply to become a staff member here on PlatinumCraft?\n**(9)** If you are willing to dedicate a lot of your time on our server, what would you have to offer?\n**(10)** If you see a Staff Member going against our rules on PlatinumCraft, what will you do?\n**(11)** If you were to leave PlatinumCraft Staffing, what would be your reason?\n\n**Part 4 of the Ticket:**\n**(12)** If someone were complain about their store purchase not going through, what will you do?\n**(13)** If someone were to grief an island, how will you handle the situation?\n **(14)** If someone makes a ticket to report a bug, how will you handle this?\n **(15)** Is there anything else you would like to add or is this the end of your application?\n')
    .setTimestamp(timestamp = Date.now())
    .setFooter('PlatinumCraft -> Application System')
const embed3 = new Discord.MessageEmbed()
    .setTitle('PlatinumCraft -> Rules:')
    .addField('Rule Set #1', '**(1)** You shall never curse or try to filter bypass, this will earn you a mute depending on the amount of times you were warned.\n\n**(2)** No Toxicity Is permitted!\n\n**(3)** Do not cheat by using rank-specific commands.')
    .addField('Rule Set #2','**(4)** No DM/Server Advertising (Unless it is Platinum Related).\n\n**(5)** No scamming or Island Insiding is permitted.\n\n**(6)** If any Staff Member is betraying the server or is giving bad behavior towards a player, please make a ticket with evidence.')
    .addField('Rule Set #3','**(7)** If you want to suggest/recommend something for our server, please follow the tagging system in #support.\n\n**(8)** Always have fun! We want the server to be friendly to all players! Good luck and have fun!')
    .setTimestamp(timestamp = Date.now())
    
    client.on('message', message => {
    
    if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;
    let args = message.content.substring(process.env.prefix.length).split(" ");
    const guild = message.guild
    switch(args[0]) {

       
            case 'ping':
            message.channel.send('Pong!');
                        break;

       


            case 'purge':
            if (!message.member.roles.cache.some(role => role.name === "Senior Staff")) {
                message.author.send("You do not have access to this command!");
                return;
            };
            console.log('[PlatinumCraft] ' + args[1] + ' Messages Deleted.')
            
            message.channel.bulkDelete(args[1]);
                        break;

                        
            case 'clear':
            if (!message.member.roles.cache.some(role => role.name === "Senior Staff")) {
                message.author.send("You do not have access to this command!");
                return;
            };
            console.log('[PlatinumCraft] ' + args[1] + ' Messages Deleted.')
                            
            message.channel.bulkDelete(args[1]);
                        break;


            case 'ticket':
                const channelembed = new Discord.MessageEmbed()
                .setDescription(`${message.author.username}, your ticket has been created.`)
                message.channel.bulkDelete(1)
                if(message.channel.id === '706549903710486629') {
                 message.channel.send(channelembed)

                counter += 1

                 var counterName 
                 if (counter <= 10) {
                   counterName = `#000${counter}`
                 } else if (counter <= 100) {
                   counterName = `#00${counter}`
                 } else if (counter <= 1000) {
                   counterName = `#0${counter}`
                 } else {
                   counterName = `#${counter}`
                 }
                 
                 guild.channels.create((`ticket-${counterName}`), { 
                     type: 'text', 
                     permissionOverwrites: [
                        {
                            id: guild.id,
                            deny: ['VIEW_CHANNEL'],
                        },
                        {
                            id: message.author.id,
                            allow: ['VIEW_CHANNEL'],
                        },
                        {
                            id: '714237057094123570',
                            allow: ['VIEW_CHANNEL'],
                        },
                    ]
            }
            ).then(channel => {
                channel.setParent('714226877161537587');
                channel.send(message.author.username + ', Thank you very much for reaching out! Please state your IGN and your Issue and our staff members will reach out to your ticket withing the next 24 hours!');
            });
            message.author.send('Thank you for creating a ticket ' + message.author.username + '! Your ticket will be answered by a Staff Member within 24 Hours. If not, please Tag 1 Staff Member and they will get right to you!')
           
            console.log('[PlatinumCraft] ' + message.author.username + ' Has Created A Support Ticket!');
        }
                        break;


                        case 'new':
                            message.channel.bulkDelete(1)
                            if(message.channel.id === '706549903710486629') {
            
                            counter += 1
            
                             var counterName 
                             if (counter <= 10) {
                               counterName = `#000${counter}`
                             } else if (counter <= 100) {
                               counterName = `#00${counter}`
                             } else if (counter <= 1000) {
                               counterName = `#0${counter}`
                             } else {
                               counterName = `#${counter}`
                             }
                             
                             guild.channels.create((`ticket-${counterName}`), { 
                                 type: 'text', 
                                 permissionOverwrites: [
                                    {
                                        id: guild.id,
                                        deny: ['VIEW_CHANNEL'],
                                    },
                                    {
                                        id: message.author.id,
                                        allow: ['VIEW_CHANNEL'],
                                    },
                                    {
                                        id: '714237057094123570',
                                        allow: ['VIEW_CHANNEL'],
                                    },
                                ]
                        }
                        ).then(channel => {
                            channel.setParent('714226877161537587');
                            channel.send(message.author.username + ', Thank you very much for reaching out! Please state your IGN and your Issue and our staff members will reach out to your ticket withing the next 24 hours!');
                        });
                        message.author.send('Thank you for creating a ticket ' + message.author.username + '! Your ticket will be answered by a Staff Member within 24 Hours. If not, please Tag 1 Staff Member and they will get right to you!')
                       
                        console.log('[PlatinumCraft] ' + message.author.username + ' Has Created A Support Ticket!');
                    }
                                    break;




                case 'apply':
                    if(message.channel.id === '706549903710486629') {
                     guild.channels.create('app-' + message.author.username, { 
                         type: 'text', 
                         permissionOverwrites: [
                            {
                                id: guild.id,
                                deny: ['VIEW_CHANNEL'],
                            },
                            {
                                id: message.author.id,
                                allow: ['VIEW_CHANNEL'],
                            },
                            {
                                id: '711987701510963302',
                                allow: ['VIEW_CHANNEL'],
                            },
                        ]
                    }
                ).then(channel => {
                    channel.setParent('716371645597614100');
                    channel.send(embed2);
                    message.author.send('Thank you for creating an Application Ticket ' + message.author.username + '! Please answer **ALL** questions in the application ticket and the Senior Staff will decide if you will be accepted.')
                    console.log('[PlatinumCraft] ' + message.author.username + ' Has Created An Application!')
                });
            } else {
                return;
            }
                        break;
                

                    case 'close':
                        if(message.channel.name.startsWith('ticket')) {
                            message.channel.delete()
                        } else if (!message.member.roles.cache.some(role => role.name === "Staff")) {
                            message.author.send("Only Staff Members can close Tickets! If your ticket has been answered, ask them to close the ticket.");
                            return;
                        };
                        break;



                        case 'closeapp':
                            if(message.channel.name.startsWith('app')) {
                                message.channel.delete()
                            } else if (!message.member.roles.cache.some(role => role.name === "Senior Staff")) {
                                message.author.send("Only Staff Members can close Tickets! If your ticket has been answered, ask them to close the ticket.");
                                return;
                            };
                            break;
                
                



                    case 'commands':
                        message.reply(embed1);
                        break;

                    case 'roll':
                message.channel.send(Math.floor(Math.random()*6 + 1));
                break;
                            


                case 'rps':
                    if (!args[1]) {
                        return message.channel.send('Please include your choice.')
                    }
            
                    let choices = ['rock', 'paper', 'scissors'];
                    if (choices.includes((args[1]).toLowerCase())) {
                        let number = Math.floor(Math.random() * 3);
                        if (number == 1) {
                            return message.channel.send('It was a tie, we both had ' + (args[1]).toLowerCase())
                        }
                        if (number == 2) {
                            if ((args[1]).toLowerCase() == "rock") {
                                return message.channel.send('I won, I had paper.')
                            }
                            if ((args[1]).toLowerCase() == "paper") {
                                return message.channel.send('I won, I had scissors.')
                            }
                            if ((args[1]).toLowerCase() == "scissors") {
                                return message.channel.send('I won, I had rock.')
                            }
                        }
                        if (number == 0) {
                            if ((args[1]).toLowerCase() == "rock") {
                                return message.channel.send('You won, I had scissors.')
                            }
                            if ((args[1]).toLowerCase() == "paper") {
                                return message.channel.send('You won, I had rock.')
                            }
                            if ((args[1]).toLowerCase() == "scissors") {
                                return message.channel.send('You won, I had paper.')
                            }
                        }
                    } else {
                        return message.channel.send('Please include either: Rock, Paper, or Scissors.')
                    }

                    break;

                case 'fortune':
                        if (!args[2]) {
                            return message.channel.send('Please ask a full questions.')
                        }
                        let number = Math.floor(Math.random() * 6);
                        if (number == 0) {
                            return message.channel.send('Yes, definitely so.')
                        }
                        if (number == 1) {
                            return message.channel.send('No, definitely not.')
                        }
                        if (number == 2) {
                            return message.channel.send('Ask again later.')
                        }
                        if (number == 3) {
                            return message.channel.send('It is uncertain.')
                        }
                        if (number == 4) {
                            return message.channel.send('Odds are not in your favor.')
                        }
                        if (number == 5) {
                            return message.channel.send('Odds are in your favor.')
                        }

                        break;

                        case 'suggest':
                            if(!args[1]) {
                                message.author.send('Please add a suggestion. Do not leave it blank.')
                                return;
                            };
                            args.shift();
                            const suggest = new Discord.MessageEmbed()
                                .setTitle('PlatinumCraft -> Suggestion:')
                                .setDescription(`Suggestion Submitted by ${message.author.username}\n\nPlayer Suggestion: **${args.join(" ")}**\n`)         
                                .addField('Do you agree?','Show us how you feel by reacting to this message!')
                            message.channel.bulkDelete(1).then(
                                message.channel.send(suggest).then(message => {
                                    message.react('✅')
                                    message.react('❌')
                            })
                        
                        )
                            break;

                            case 'role':
                                message.channel.send('**Type "announcement" after -role to get Announcement Notifications and "upload" to receive Upload Notifications!**')
                            if(args[1] === 'announcement') {
                                const role = message.guild.roles.cache.find(role => role.id === "722621442604138526");
                                const member = message.mentions.members.first();
                                message.member.roles.add(role).catch(error => {
                                    console.log(error)
                                })
                            } else if(args[1] === 'upload') {
                                const roleUpload = message.guild.roles.cache.find(role => role.id === "720939265042939955");
                                message.member.roles.add(roleUpload).catch(error => {
                                    console.log(error);
                                      });
                            }
                            break;

                
            }
        }
)


client.on("guildMemberAdd" ,(message, member) => {
    const WelcomeEmbed = new Discord.MessageEmbed()
        .setDescription(`Welcome ${message.user.username} to **PlatinumCraft**!\n\n> **IP:** PLAY.PLATINUMCRAFTOFFICIAL.COM\n**WEBSITE:** STORE.PLATINUMCRAFTOFFICIAL.COM\n**DISCORD:** DISCORD.PLATINUMCRAFTOFFICIAL.COM`)
        .addField('Date Joined:', message.createdAt, true)
    member.channels.get('734941676669501446').send(WelcomeEmbed)
    }
);

client.login(process.env.token);
console.log('[PlatinumCraft] The Server Bot is Online and Fully Functional (For the Most Part)');