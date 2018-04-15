const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
});

exports.callLineBot = function(req, res, next) {
	const text = req.body.events[0].message.text;
	const sender = req.body.events[0].source.userId;
	const replyToken = req.body.events[0].replyToken;
	
	// userId : Ud6cfdf63ea8a281ab4a9dbd3130f9b5a
	// console.log(text, sender, replyToken)
	// console.log(typeof sender, typeof text)
	console.log(req.body.events[0])

	if (text === 'llenn') {
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
	}
	res.sendStatus(200);
}