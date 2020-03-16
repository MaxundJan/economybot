const Discord = require('discord.js');
const client = new Discord.Client();
var Prefix = "€"

Worker: node; economy.js

let prefix = prefix;
client.on('message', message => {

    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    
    if (message.content.indexOf(prefix) !== 0) return;

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config)
    } catch (err) {
        return;
    }



})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    //client.channels.get('518473049197117445').send(`Logged in as ${client.user.tag}`)
})


client.login("Njg4NTA2MjI0OTM2NzQ3MDYz.Xm9sCg.GfhWvLK0-oGZHyxkwiFjZFcr4WU")
