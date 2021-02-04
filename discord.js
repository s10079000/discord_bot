const Discord = require('discord.js');
const { token } = require('./token.json');
const { first } = require('./java_topic.json');
const { quest } = require('./java_topic.json');
const client = new Discord.Client();

const { Client, MessageAttachment } = require('discord.js');

//亂數方法
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// 連上線時的事件
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// 當 Bot 接收到訊息時的事件
client.on('message', message => {
    // 如果訊息的內容是 'ping'
    if (message.content === 'ping') {
        // 則 Bot 回應 'Pong'
        message.reply('pong');
    }

    if (message.content === 'java') {
        message.reply(first[getRandomInt(first.length)]);
    }

    if (message.content === 'topic') {
        message.reply(quest[getRandomInt(quest.length)]);
    }

    if (message.content === 'tomcat') {
        // Create the attachment using MessageAttachment
        const attachment = new MessageAttachment('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tomcat-logo.svg/1200px-Tomcat-logo.svg.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
      }
});

client.login(token);