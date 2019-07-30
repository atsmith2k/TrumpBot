var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
var intervalInt = 0;
/* bot.on('message', function(user, userID, channelID, message, rawEvent) {
	var trumpBoolean = false;
    if (message === "!trumpstart") { // command to trigger
	  intervalInt = 1000 * 5;
	  console.log("trump started");
      trumpBoolean = true;
	  console.log(trumpBoolean);
    }else if (message === "!trumpstop") {
		console.log('Trump stopped');
		trumpBoolean = false;
		console.log(trumpBoolean);
	}
	while (trumpBoolean) {
		var interval = setInterval (function (){
        bot.sendMessage({
          to: channelID,
          message: "All hail Donald Trump!" // message to send
        });
      }, intervalInt); // time between each interval in milliseconds
	}
});  */
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	if (user == 'nlperra') {
		bot.sendMessage({
            to: channelID,
            message: 'SILENCE COMMUNIST!'
        });
	}
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'trump':
                bot.sendMessage({
                    to: channelID,
                    message: 'Thank you, ' + user +  ', for swearing your allegiance to Trump!'
                });
			break;
			case 'dylan':
                bot.sendMessage({
                    to: channelID,
                    message: 'Dylan Stinson is an avid Trump supporter!'
                });
			break;
			case 'nickperra':
                bot.sendMessage({
                    to: channelID,
                    message: 'Nick Perra is communist scum!'
                });
			break;
			case 'trent':
                bot.sendMessage({
                    to: channelID,
                    message: 'Trent Marshall is a king among men!'
                });
            break;
			case 'dannydiesel':
                bot.sendMessage({
                    to: channelID,
                    message: 'Thank you, Danny Diesel, for swearing your allegiance to Trump!'
                });
            break;
			case 'epic':
                bot.sendMessage({
					to: channelID,
					message: "Epic Fornite", 
				});
            break;
			case 'impeach':
                bot.sendMessage({
					to: channelID,
					message: "Suck my dick, liberal!", 
				});
            break;
			case 'wall':
                bot.sendMessage({
					to: channelID,
					message: "I don't mind having a big beautiful door in that wall so that people can come into this country legally. I don't mind having a big beautiful door in that wall so that people can come into this country legally.", 
				});
            break;
			case 'fucksweden':
                bot.sendMessage({
					to: channelID,
					message: "#FreeRocky", 
				});
            break;
			case 'colecorby':
                bot.sendMessage({
                    to: channelID,
                    message: 'Cole Corby, yeah I know Cole, some call him Corbi, others call him big penis, and I know a big penis when I see one! #MAGA'
                });
			break;
            // Just add any case commands if you want to..
         }
     }
});