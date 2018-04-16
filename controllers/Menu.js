const line = require('@line/bot-sdk');
const config = require('../config/config');

const client = new line.Client({
	channelAccessToken: config.line.CHANNEL_ACCESS_TOKEN
});

exports.mainMenu = function (sender) {
	return new Promise(() => {
	const message = {
		"type": "template",
		"altText": "carousel main menu",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "ChomCHOB",
					"text": "นัดประชุม, ลางาน, เตือนวันหยุด, ชวนเพื่อนไต่แรงค์",
					"actions": [
						{
							"type": "message",
							"label": "ChomCHOB",
							"text": "cc menu"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "Trello",
					"text": "Managing your tasks",
					"actions": [
						{
							"type": "message",
							"label": "Trello",
							"text": "trello menu"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "Calendar",
					"text": "Plan your upcomming events",
					"actions": [
						{
							"type": "message",
							"label": "Calendar",
							"text": "calendar menu"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "Help",
					"text": "Support you for enjoy with LLENN",
					"actions": [
						{
							"type": "message",
							"label": "Help",
							"text": "help"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "Settings",
					"text": "Optimize your bot",
					"actions": [
						{
							"type": "message",
							"label": "Trello",
							"text": "trello menu"
						}
					]
				}
			],
			"imageAspectRatio": "rectangle",
			"imageSize": "cover"
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