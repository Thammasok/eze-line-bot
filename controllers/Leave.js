const line = require('@line/bot-sdk');
const config = require('../config/config');

const client = new line.Client({
	channelAccessToken: config.line.CHANNEL_ACCESS_TOKEN
});

exports.leave = function (sender, type) {
  return new Promise(() => {
    /**
     * Create Leave :: DB
     * Field: id, userId(Sender), leave_type, status, [leave_from, leave_to], created_at, updated_at 
     */

    const message = {
      "type": "template",
      "altText": "this is a confirm template",
      "template": {
        "type": "leave date",
        "text": "ต้องการลาในวันที่",
        "actions": [
          {
            "type": "message",
            "label": "วันที่เริ่มลา",
            "text": "leave:from"
          },
          {
            "type": "message",
            "label": "ถึงวันที่",
            "text": "leave:to"
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
};