const Discord = require('discord.js');
const { prefix, version, couleur } = require('../config.json')

exports.run = (client, message, args) => {
    let avatarTag = message.mentions.users.first() || message.author;
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.MessageEmbed()
            .setDescription("<:9830_no:770572016709140481> Merci de mentionner un utilisateur pour effectuer cette action.")
            .setColor(couleur)
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setFooter(version)
        message.channel.send(error_mentions)
    }else {
        var frapper_embed = new Discord.MessageEmbed()
            .setDescription(" <@" + message.author.id + "> vient de frapper " + "<@" + member.user.id + "> !")
            .setColor(couleur)
            .setImage("https://media.giphy.com/media/hTDN2dGee9ftaBrzxt/giphy.gif")
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setFooter(version)
        message.channel.send(frapper_embed)
    }
}

module.exports.help = {
    name: "frapper",
    aliases: ['frapper'],
    category: 'fun',
    description: "frapper une personne. ",
    cooldown: 10,
}