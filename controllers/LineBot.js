const line = require('@line/bot-sdk');
const { help } = require('./Help');
const { mainMenu, companyMenu, leaveMenu } = require('./Menu');
const { leave } = require('./Leave');

import {version as VERSION} from "../package.json"

require('./Variables');

// const config = require('../config/config');

const client = new line.Client({
	// channelAccessToken: config.line.CHANNEL_ACCESS_TOKEN
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
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
	const textLength = text.length;
	
	switch (text.toLowerCase()) {
		case ABOUT: 
			await weakUpBot(sender);
			break;
		case EZE:
			await weakUpBot(sender);
			break;
		
		//Menu
		case MENU: 
			await mainMenu(sender);
			break;
		case MENU_COMPANY:
			await companyMenu(sender);
		case MENU_LEAVE:
			await leaveMenu(sender);
			break;

		//Leave
		case LEAVE_SICK:
			await leave(sender, "sick");
			break;
		case LEAVE_PERSONAL_BUSINESS:
			await leave(sender, "personal business");
			break;
		case LEAVE_ANNUAL:
			await leave(sender, "annual");
			break;

		//Help
		case HELP:
			await help(sender);
			break;
		case HELP_ME:
			await sendMessage(sender, 'ฉันจะช่วยคุณให้เต็มที่');
			break;
		default:
			await sendMessage(sender, 'ถามแบบนี้ไม่มีคำตอบให้นะ');
	}

	res.sendStatus(200);
}

function weakUpBot(sender) {
	return new Promise(() => {
		text = 'EZE READY HELP U. (V.' + VARSION + ')';

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