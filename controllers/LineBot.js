const line = require('@line/bot-sdk');
const { help } = require('./Help');
const { mainMenu, todoMenu, companyMenu, leaveMenu } = require('./Menu');
const { leave } = require('./Leave');
// const { todoLists } = require('./Todo');
const { openLiff, addLiff } = require('./Liff')

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
	
	const ABOUT_VERSION = '1.0.8'
	const EZE           = 'eze'
	const MENU          = 'menu'
	const MENU_COMPANY  = 'menu:company'
	const MENU_LEAVE    = 'menu:leave'
	const MENU_TODO 	  = 'menu:todo'
	const LIFF_ADD			= 'liff:add'
	const MENU_LIFF 	  = 'menu:liff'

	const LEAVE_SICK              = 'leave:sick'
	const LEAVE_PERSONAL_BUSINESS = 'leave:pb'
	const LEAVE_ANNUAL            = 'leave:annual'

	// const TODO_TODAY 	= 'todo:today'
	// const TODO_LISTS  = 'todo:lists'
	// const TODO_CREATE = 'todo:create'

	const HELP    = 'help'
	const HELP_ME = 'help me'

	switch (text.toLowerCase()) {
		case EZE:
			await weakUpBot(sender, ABOUT_VERSION);
			break;
		
		//Menu
		case MENU: 
			await mainMenu(sender);
			break;
		case MENU_TODO: 
			await todoMenu(sender);
			break;
		case MENU_COMPANY:
			await companyMenu(sender);
			break;
		case MENU_LEAVE:
			await leaveMenu(sender);
			break;
		case MENU_LIFF: 
			await openLiff(sender);
			break;
		case LIFF_ADD:
			await addLiff(sender);
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

		// case TODO_LISTS:
		// 	await todoLists(sender);
		// 	break;
		// case TODO_TODAY:
		// 	await todoLists(sender);
		// 	break;
		// case TODO_CREATE:
		// 	await todoLists(sender);
		// 	break;

		//Help
		case HELP:
			await help(sender);
			break;
		case HELP_ME:
			await sendMessage(sender, 'ฉันจะช่วยคุณให้เต็มที่');
			break;
		default:
			return false
	}

	res.sendStatus(200);
}

function weakUpBot(sender, aboutVersion) {
	return new Promise(() => {
		text = 'EZE READY HELP U. (V.' + aboutVersion + ')';

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