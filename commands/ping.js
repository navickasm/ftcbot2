const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Get ping of the bot'),
    async execute(bot,message,args) {
        message.channel.send("My ping is \`" + bot.ws.ping + " ms\`");
    }
}