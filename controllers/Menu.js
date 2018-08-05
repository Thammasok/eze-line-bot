const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

exports.mainMenu = function (sender) {
	return new Promise(() => {
	const message = {
		"type": "template",
		"altText": "Main menu",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "LIFF",
					"text": "LIFF Function",
					"actions": [
						{
							"type": "message",
							"label": "liff",
							"text": "menu:liff"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "Todo",
					"text": "บันทึกสิ่งที่ต้องทำ",
					"actions": [
						{
							"type": "message",
							"label": "Todo",
							"text": "menu:todo"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "ChomCHOB",
					"text": "นัดประชุม, ลางาน, เตือนวันหยุด, ชวนเพื่อนไต่แรงค์",
					"actions": [
						{
							"type": "message",
							"label": "ChomCHOB",
							"text": "menu:company"
						}
					]
				},
				{
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
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
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
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
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
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
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
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

exports.todoMenu = function (sender) {
	return new Promise(() => {
		const message = {
			"type": "template",
			"altText": "Todo Menu",
			"template": {
					"type": "buttons",
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageAspectRatio": "rectangle",
					"imageSize": "cover",
					"imageBackgroundColor": "#FFFFFF",
					"title": "Todo Menu",
					"text": "Please select",
					"actions": [
						{
							"type": "message",
							"label": "Today",
							"text": "todo:today"
						},
						{
							"type": "message",
							"label": "Create",
							"text": "todo:create"
						},
						{
							"type": "message",
							"label": "Lists",
							"text": "todo:lists"
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

exports.companyMenu = function (sender) {
	return new Promise(() => {
		const team = "ChomCHOB";
		const message = {
			"type": "template",
			"altText": team + " menu",
			"template": {
					"type": "buttons",
					"thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageAspectRatio": "rectangle",
					"imageSize": "cover",
					"imageBackgroundColor": "#FFFFFF",
					"title": team + " Menu",
					"text": "Please select",
					"actions": [
						{
							"type": "message",
							"label": "ลางาน",
							"text": "menu:leave"
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

exports.leaveMenu = function (sender) {
	return new Promise(() => {
		const message = {
			"type": "template",
			"altText":"Leave menu",
			"template": {
				"type": "buttons",
				"title": "Leave menu",
				"text": "คุณต้องการลา?",
				"actions": [
					{
						"type": "message",
						"label": "ลาป่วย",
						"text": "leave:sick"
					},
					{
						"type": "message",
						"label": "ลากิจ",
						"text": "leave:personal business"
					},
					{
						"type": "message",
						"label": "ลาพักร้อน",
						"text": "leave:annual"
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
				console.log(err.message);
			});
	});
}