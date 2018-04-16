const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
});

exports.showMenu = function (sender, section) {
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
					"defaultAction": {
						"type": "message",
						"label": "จิ้มเบาๆ เราก็ไป",
						"text": "cc menu"
					},
					"actions": [
						{
							"type": "message",
							"label": "จิ้มเบาๆ เราก็ไป",
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
							"label": "เห็นงานเป็นลม เห็น...",
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
							"label": "นัดไว้ละ",
							"text": "calendar menu"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "Setting",
					"text": "Optimize your bot",
					"actions": [
						{
							"type": "message",
							"label": "ตั้งค่า",
							"text": "setting menu"
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