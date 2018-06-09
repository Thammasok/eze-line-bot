const line = require('@line/bot-sdk');
const config = require('../config/config');

const client = new line.Client({
	// channelAccessToken: config.line.CHANNEL_ACCESS_TOKEN
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

exports.help = function (sender) {
	return new Promise(() => {
	const message = {
		"type": "template",
		"altText": "Help me confirm",
		"template": {
				"type": "confirm",
				"text": "อยากได้ความช่วยเหลือเหรอ?",
				"actions": [
						{
							"type": "message",
							"label": "Yes",
							"text": "help me"
						},
						{
							"type": "message",
							"label": "No",
							"text": "no help"
						}
				]
		}
	};

	client.pushMessage(sender, message)
		.then(() => {
			console.log('success');
		})
		.catch((err) => {
			// error handling
			console.log(err);
		});
	});
}