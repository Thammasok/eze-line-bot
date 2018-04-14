const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const line = require('@line/bot-sdk');


app.use(cors());
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// const client = new line.Client({
// 	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU=',
// 	channelSecret: 'b2c3273b876d42277eb18dcba0dfe9aa'
// });

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
});

app.post('/callback', (req, res) => {
	var text = req.body.events[0].message.text
	var sender = req.body.events[0].source.userId
	var replyToken = req.body.events[0].replyToken
	console.log(text, sender, replyToken)
	console.log(typeof sender, typeof text)
	// console.log(req.body.events[0])
	if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
		// sendText(sender, text)
		let data = {
			to: sender,
			messages: [
				{
					type: 'text',
					text: 'สวัสดีค่ะ เราเป็นผู้ช่วยของคุณ'
				}
			]
		};
		
		client.pushMessage(data)
			.then(() => {
				console.log('success')
			})
			.catch((err) => {
				// error handling
				console.log('error')
			});
	}
	res.sendStatus(200)
});

// function sendText (sender, text) {
  // request({
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ${channelAccessToken}'
  //   },
  //   url: 'https://api.line.me/v2/bot/message/push',
  //   method: 'POST',
  //   body: data,
  //   json: true
  // }, function (err, res, body) {
  //   if (err) console.log('error')
  //   if (res) console.log('success')
  //   if (body) console.log(body)
  // })
// }

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
});