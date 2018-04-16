const line = require('@line/bot-sdk');
const { help } = require('./Help');

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
});

exports.callLineBot = async function(req, res, next) {
	// { 	type: 'message',
	// 	replyToken: 'f3985718cb5b4e22b648353bec420296',
	// 	source: { 
	// 		userId: 'Ud6cfdf63ea8a281ab4a9dbd3130f9b5a', 
	// 		type: 'user' 
	// 	},
	// 	timestamp: 1523752936895,
	// 	message: { type: 'text', id: '7796059251968', text: 'llenn' } 
	// }
	const text = req.body.events[0].message.text;
	const sender = req.body.events[0].source.userId;
	const replyToken = req.body.events[0].replyToken;
	
	// console.log(text, sender, replyToken)
	// console.log(typeof sender, typeof text)
	// console.log(req.body.events[0])

	switch (text.toLowerCase()) {
		case 'llenn':
			await weakUpBot(sender);
			break;
		case 'help':
			// await helpSender(sender);
			await help(sender);
			break;
		case 'help me':
			await sendMessage(sender, 'ฉันจะช่วยคุณให้เต็มที่');
			break;
		default:
			await sendMessage(sender, 'นี่กำลังถามไม่ตรงคำตอบนะ');
	}

	res.sendStatus(200);
}

function weakUpBot(sender) {
	return new Promise(() => {
		const message = {
			type: 'text',
			text: 'สวัสดีค่ะ หนูเป็นผู้ช่วยของคุณ'
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

function sendMessage(sender, text) {
	return new Promise(() => {
		const message = {
			type: 'text',
			text: text
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

// function helpSender(sender){
// 	return new Promise(() => {
// 		const message = {
// 			"type": "template",
// 			"altText": "this is a confirm template",
// 			"template": {
// 					"type": "confirm",
// 					"text": "อยากได้ความช่วยเหรอจากเราเหรอ?",
// 					"actions": [
// 							{
// 								"type": "message",
// 								"label": "Yes",
// 								"text": "help me"
// 							},
// 							{
// 								"type": "message",
// 								"label": "No",
// 								"text": "no help"
// 							}
// 					]
// 			}
// 		};
	
// 		client.pushMessage(sender, message)
// 			.then(() => {
// 				console.log('success');
// 			})
// 			.catch((err) => {
// 				// error handling
// 				console.log(err);
// 			});
// 	});
// }