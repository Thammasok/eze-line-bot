const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
});

exports.showMenu = function (sender, section) {
	return new Promise(() => {
	const message = {
		"type": "template",
		"altText": "carousel menu",
		"template": {
			"type": "carousel",
			"imageAspectRatio": "rectangle",
      "imageSize": "cover",
			"columns": [
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-square.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "ChomCHOB",
					"text": "Support อะไรบ้าง ถ้าคิดออกจะบอกอีกที :P",
					"defaultAction": {
						"type": "message",
						"label": "ChomCHOB Menu",
						"text": "ccmenu"
					},
					"actions": [
						{
							"type": "message",
							"label": "ชวนเพื่อนลงแรงค์",
							"text": "ranggame"
						},
						{
							"type": "message",
							"label": "มาช้า หรือ ลางาน",
							"text": "la stop"
						},
						{
							"type": "message",
							"label": "ต้ังแต่มีแฟนเพื่อนเราก็เปลี่ยนไป",
							"text": "father home association"
						},
						{
							"type": "message",
							"label": "วันหยุดเตือนด้วย",
							"text": "stop working"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#000000",
					"title": "Trello",
					"text": "description",
					"defaultAction": {
						"type": "message",
						"label": "Todo",
						"text": "todo"
					},
					"actions": [
						{
							"type": "message",
							"label": "Create Cards",
							"text": "new task"
						},
						{
							"type": "message",
							"label": "Waiting",
							"text": "wating task"
						},
						{
							"type": "message",
							"label": "Processing",
							"text": "processing Task"
						},
						{
							"type": "message",
							"label": "Move",
							"text": "move task"
						}
					]
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