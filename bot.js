const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('hi');
  	}
});

client.on('message', message => {
    if (message.content === 'Bang Andi') {
    	message.reply('Ganteng');
  	}
});

client.on('message', message => {
    if (message.content === 'Huko-Chan') {
    	message.reply('Kawaii');
  	}
});

client.on('message', message => {
    if (message.content === 'Nabil') {
    	message.reply('Khintil');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
