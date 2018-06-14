const Commando = require('discord.js-commando');
const path = require('path');
const logs = require('./logs.json');

const client = new Commando.Client({
	owner: logs.OWNER,
	commandPrefix: '!',
	unknownCommandResponse: false,
	disableEveryone: true
});

client.registry
.registerDefaultType()
.registerGroups([
	['test', 'Test'],
])

.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('error', error => {
	console.log(error);
	return ;
});

client.login(logs.TOKEN);
