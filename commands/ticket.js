const Discord = require('discord.js');

module.exports = {
        name: 'ticket',
        description: 'Creates a Support Ticket for the user.',
        aliases: ['new', 'support'],
        cooldown: 60,
    execute(message, args) {
        console.log(`This message will appear if the Ticket System works. A Ticket was just made by ${message.author.username}`)
      const guild = message.guild;
      const Staff = message.guild.roles.cache.find(role => role.id === "729424741760237650");
      const seniorStaff = message.guild.roles.cache.find(role => role.id === "740311144241299516");

      setTimeout(() => {

      }, 60000);
      
    message.delete()
    const Ticket1Embed = new Discord.MessageEmbed()
    .setTitle("Support Ticket")
    .setDescription(`Thank you for creating a Support Ticket ${message.author.username}! In order for our Staff Members to understand your issue further, please pick a number below that suits your Ticket! Please type a number in order to switch the category! \n **1)** General Support. \n**2)** Player Reports. \n**3)** Store Support. \n**4)** Apply for PlatinumCraft!`)
    .setTimestamp(message.createdAt)
    .setFooter("PlatinumCraft Support")

      guild.channels.create(`ticket-${message.author.username}`, {
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
        ],
      }
    ).then(channel => {
          channel.setParent('714226877161537587')        
            channel.send(Ticket1Embed)
            channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: false });
            channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });

            const filter = m => m.author.id === message.author.id
            const collector = channel.createMessageCollector(filter, { time: 60000, max: 1 });
    
            collector.on('collect', m => {
              switch(m.content) {
                case '1':                
                  m.channel.bulkDelete(2)
                  m.channel.send("Thank you for reaching out! If you picked the wrong category for your ticket, it may take longer for one of our Staff Members to respond!")
                  m.channel.setName(`gs-${message.author.username}`)
                  message.channel.updateOverwrite('714237057094123570', { VIEW_CHANNEL: true });
                    break;

                  case '2':
                    m.channel.bulkDelete(2)
                    m.channel.setParent('748662749659398174')
                    m.channel.send("Please state the Player your are reporting, the time of the issue caused, and the proof and our Staff Members will assist you as soon as possible!")
                    m.channel.setName(`pr-${message.author.username}`)
                    message.channel.updateOverwrite('714237057094123570', { VIEW_CHANNEL: true });
                      channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: false });
                      channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });

                    break;

                  case '3':
                    m.channel.bulkDelete(2)
                    m.channel.setParent('748663001711902821')
                    m.channel.send(`Hello ${message.author.username}! Please state what you purchased, how much the purchase cost, and the time of the purchase. This way, our Store Support Team can assist you quickly!`)
                    m.channel.setName(`store-${message.author.username}`)
                    message.channel.updateOverwrite('711987701510963302', { VIEW_CHANNEL: true });
                      channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: false });
                      channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
                    break;
                  
                  case '4':
                    m.channel.bulkDelete(2)
                    const appembed = new Discord.MessageEmbed()
                    .setTitle('PlatinumCraft -> Staff Application:')
                    .setDescription('**Part 1 of the Ticket:**\n**(1)** What is your IGN?\n**(2)** How long have you played on the server?\n**(3)** Do you have a functioning recording software and a functioning mic?\n\n**Part 2 of the Ticket:**\n**(4)** What ways can you use to find if anyone has cheated (ex: doing /gmc, /give, etc)?\n**(5)** What are Macros\n**(6)** What does DQ stand for?\n**(7)** If players In-Game were to start an argument that is serious but not serious enough to mute, what will you do?\n\n**Part 3 of the Ticket:**\n**(8)** Why would you like to apply to become a staff member here on PlatinumCraft?\n**(9)** If you are willing to dedicate a lot of your time on our server, what would you have to offer?\n**(10)** If you see a Staff Member going against our rules on PlatinumCraft, what will you do?\n**(11)** If you were to leave PlatinumCraft Staffing, what would be your reason?\n\n**Part 4 of the Ticket:**\n**(12)** If someone were complain about their store purchase not going through, what will you do?\n**(13)** If someone were to grief an island, how will you handle the situation?\n **(14)** If someone makes a ticket to report a bug, how will you handle this?\n **(15)** Is there anything else you would like to add or is this the end of your application?\n')
                    .setTimestamp(Date.now)
                    .setFooter('PlatinumCraft -> Application System')

                    m.channel.setParent('748663146683695234')
                    m.channel.send(`Hello ${message.author.username} and thank you for considering to apply for PlatinumCraft! Before you apply, we would like to go over a couple of things. First of all, before you apply, you must be fourteen years of age. If not, you cannot apply. Also, you must answer all the application questions within 24 hours. If not, we will consider the application abandoned and it will be closed automatically. Now here are the questions:`)
                    m.channel.send(appembed)
                    m.channel.setName(`app-${message.author.username}`)
                    message.channel.updateOverwrite('711987701510963302', { VIEW_CHANNEL: true });
                      channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: false });
                      channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });


              }
            })
  
          collector.on('end', collected => {
              message.channel.send(`${message.author.username}, your Ticket has been created!`)
              channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: false });
              channel.updateOverwrite(message.author.id, { VIEW_CHANNEL: true });
              console.log(collected.size)
          }
        )
      }
    ).catch(err => {
      console.log(err)
    })
  }
}