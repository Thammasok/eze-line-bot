const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
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