const Discord = require('discord.js');

module.exports = {
    name: 'ttt',
    description: 'Tick Tac Toe Challenge for a user.',
    execute(message, args) {

        let positions = {
            A1: " ",
            A2: " ",
            A3: " ",
            B1: " ",
            B2: " ",
            B3: " ",
            C1: " ",
            C2: " ",
            C3: " "
          }

        let tripleTick = "\`\`\`"
        let challenged = message.mentions.users.first();
        let challenger = message.author;

        function print() {
            message.channel.send(`${tripleTick} ${positions.A1} | ${positions.A2} | ${positions.A3} A\n-----------\n ${positions.B1} | ${positions.B2} | ${positions.B3} B\n-----------\n ${positions.C1} | ${positions.C2  } | ${positions.C3} C\n 1   2   3${tripleTick}`)
        }

        if(!challenged) {
            return message.channel.send("You must challenge a user!")
        }

        message.channel.send(`${challenged.username}, You have been challenged to Tic Tac Toe by ${message.author.username}. Type accept or deny.`)
        let filter = m => challenger.id === m.author.id || challenged.id === m.author.id
        let collector = message.channel.createMessageCollector(filter, { time: 120000, max: 100 });

        collector.on('collect', m => {
            let value = challenger.id === m.author.id ? 'x' : 'o';
            if(m.content == "accept" && m.author == challenged) {
                m.channel.send("You have accepted the challenge. It will begin shortly.")
                print()
            }

            if(m.content == "deny") {
                m.channel.send("You have declined the challenge.")
                collector.stop()
            }

            if(m.content == "exit") {
                m.channel.send("You have exited the challenge.")
                collector.stop()
            }

            if(m.content == "A1" && positions.A1 == ' ') {
                positions.A1 = value;
                print()
            }
    
            if(m.content == "A2" && positions.A2 == ' ') {
                positions.A2 = value;
                print()
            }

            if(m.content == "A3" && positions.A3 == ' ') {
                positions.A3 = value;
                print()
            }
    
            if(m.content == "B1" && positions.B1 == ' ') {
                positions.B1 = value;
                print()
            }
    
            if(m.content == "B2" && positions.B2 == ' ') {
                positions.B2 = value;
                print()
            }
    
            if(m.content == "B3" && positions.B3 == ' ') {
                positions.B3 = value;
                print()
            }

            if(m.content == "C1" && positions.C1 == ' ') {
                positions.C1 = value;
                print()
            }
    
            if(m.content == "C2" && positions.C2 == ' ') {
                positions.C2 = value;
                print()
            }
    
            if(m.content == "C3" && positions.C3 == ' ') {
                positions.C3 = value;
                print()
            }

            if(positions.A1 === 'x' && positions.A2 === 'x' && positions.A3 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.B1 === 'x' && positions.B2 === 'x' && positions.B3 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.C1 === 'x' && positions.C2 === 'x' && positions.C3 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A1 === 'x' && positions.B1 === 'x' && positions.C1 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A2 === 'x' && positions.B2 === 'x' && positions.C2 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A3 === 'x' && positions.B3 === 'x' && positions.C3 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A1 === 'x' && positions.B2 === 'x' && positions.C3 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A3 === 'x' && positions.B2 === 'x' && positions.C1 === 'x') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            }


            if(positions.A1 === 'x' && positions.A2 === 'x' && positions.A3 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.B1 === 'x' && positions.B2 === 'x' && positions.B3 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.C1 === 'x' && positions.C2 === 'x' && positions.C3 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A1 === 'x' && positions.B1 === 'x' && positions.C1 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A2 === 'x' && positions.B2 === 'x' && positions.C2 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A3 === 'x' && positions.B3 === 'x' && positions.C3 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A1 === 'x' && positions.B2 === 'x' && positions.C3 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            } else if(positions.A3 === 'x' && positions.B2 === 'x' && positions.C1 === 'o') {
                m.channel.send(`Game ended! Someone has won the match!`)
                collector.stop()
            }



            if(positions.A1 === value && positions.A2 === value && positions.A3 === value &&positions.B1 === value && positions.B2 === value && positions.B3 === value && positions.C1 === value && positions.C2 === value && positions.C3 === value) {
                message.channel.send("Game Over! It is a Stalemate. Try again next time.")
                collector.stop()
            }
        })

        collector.on('end', m => {
            console.log("A Tic Tac Toe sequence has been initiated.")
        })
    }
}