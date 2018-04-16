const line = require('@line/bot-sdk');
const config = require('../config/config');


const client = new line.Client({
	channelAccessToken: config.line.CHANNEL_ACCESS_TOKEN
});

exports.pushMessage = function (sender, message) {
  client.pushMessage(sender, message)
		.then(() => {
			console.log('success');
		})
		.catch((err) => {
			// error handling
			console.log(err.message);
		});
}