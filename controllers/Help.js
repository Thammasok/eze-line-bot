const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
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