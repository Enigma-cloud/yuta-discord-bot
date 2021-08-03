require('dotenv').config();

const Discord = require('discord.js');
const ms = require('ms');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = '!';
const ADD_ROLE_COMMAND = 'member';
const roles = {
    '!member-1': '872051713903841281',
    '!member-2': '872051863103635466' 
}

function addRole(msg, role) {
    msg.member.roles.add(roles[role]);
    return msg.reply(`check your new role 🎉`)
}

client.on('ready', () => {
    console.log('Our bot is ready to go!');
})

client.on('messageDelete', () => {
    msg.channel.send('Stop deleting messages')
})

client.on('message', msg => {
    if (msg.content === 'Interesting...') {
        // msg.channel.send('pong!') -> no tag
        msg.reply('interesting indeed 🤔')
        msg.react('🤔')
    }

    if (msg.content === `${BOT_PREFIX}${ADD_ROLE_COMMAND}-1`) {
        addRole(msg, `${BOT_PREFIX}${ADD_ROLE_COMMAND}-1`);
    }

    if (msg.content === `${BOT_PREFIX}${ADD_ROLE_COMMAND}-2`) {
        addRole(msg, `${BOT_PREFIX}${ADD_ROLE_COMMAND}-2`);
    }
})


client.login(process.env.BOT_TOKEN);