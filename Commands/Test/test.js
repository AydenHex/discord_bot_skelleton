const commando = require('discord.js-commando');
const request = require('request-promise');

module.exports = class Test extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'test',
			group: 'test',
			memberName: 'test',
			description: "A simple test",
			details: `Usable by all `,
			examples: ["```!ping```"]
		})
	}


	async run(msg){
		msg.reply("Pong");
	}
