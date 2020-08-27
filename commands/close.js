const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
        name: 'close',
        description: 'Closes Support Tickets.',
        cooldown: 5,
    execute(message, args) {
        console.log(`This message will appear if a Ticket has been Closed.`)
      const guild = message.guild;
      let userInv = message.mentions.users.first();

      if(!userInv) {
        return message.channel.send("You must mention the user of the Ticket after typing -close.")
    }


        message.channel.messages.fetch()
        .then(data =>{
        let arr = []
        data.each(d =>{
            if (d.deleted === true) { return;};
            console.log(d)
                    let str = `${d.author.username} \n${d.content} \n${d.createdAt}`;
                    arr.push(str);
        })

               console.log(arr)
                let tra = arr.join("\n");
                fs.appendFile("Transcript.txt", tra, (err) => {
                    if (err) throw err;
                    console.log("Message logged");
                    userInv.send("Here is your Transcript! If you have another question, make another ticket and let us know!", {
                        files: [
                            './Transcript.txt'
                        ]
                    })
                            }
                        )
                        fs.writeFile("Transcript.txt", "", (err) => {
                            if (err) throw err;
                            console.log("Message cleared.");
                        }
                    )
                }
            )
            
            
      if(!message.member.roles.cache.some(role => role.name === "Staff")) {
        return message.author.send("Only Staff Members can close Tickets! If your ticket has been answered, ask them to close the ticket.")
    } else if (message.channel.name.startsWith("gs-")) {
        message.channel.delete()
        .catch(err => {
            console.error(err);
        });
    } else if (message.channel.name.startsWith("pr-")) {
        message.channel.delete()
        .catch(err => {
            console.error(err);
        });
    } else if (message.channel.name.startsWith("store-")) {
        message.channel.delete()
        .catch(err => {
            console.error(err);
        });
    } else if (message.channel.name.startsWith("app-")) {
        message.channel.delete()
        .catch(err => {
            console.error(err);
        });
    } else if (message.channel.name.startsWith("ticket-")) {
        message.channel.delete()
        .catch(err => {
            console.error(err);
        });
    }
    
        }
    }