const line = require('@line/bot-sdk');
const config = require('../config/config');

const client = new line.Client({
	channelAccessToken: config.line.CHANNEL_ACCESS_TOKEN
});

exports.leave = function (sender, leaveType) {
  return new Promise(() => {
    /**
     * Create Leave :: DB
     * Field: id, userId(Sender), leave_type, status, [leave_from, leave_to], created_at, updated_at 
     */

    //  let leave_type = 2;
    //  if(leaveType === 'sick') {
    //    leave_type = 1;
    //  } else if (leaveType === 'annual') {
    //    leave_type = 3;
    //  } else {
    //   //personal business
    //   leave_type = 2;
    //  }

    //Create on DB

    const message = {
      "type": "text",
      "text": "พิมพ์วันที่ต้องการลา ตาม Format นี้\n from 20-02-2018 (ลาเต็มวัน)\nหรือ\nfrom 20-02-2018 to 30-02-2018\nfrom 20-02-2018 10:00:00 to 20-02-2018 12:00:00"
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
};

exports.updateLeaveDate = function (sender, text) {
  const leaveDateText = text.substring(4).trim().split(" ");

  const message = {
    type: 'text',
    text: leaveDateText[0]
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