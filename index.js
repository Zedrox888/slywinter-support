const { Client, Message } = require('discord.js')//npm i discord.js
const client = new Client();
const prefix = "!";


client.on("ready", async () => {
    client.user.setStatus("idle");   
    console.log('bot => ok');
   
     client.user.setActivity("DeltaPlus en développement !", { type: "WATCHING"}); 
    })
    
    client.on("message", async (message) => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
    
})

client.login(process.env.TOKEN); //paste your token here
