const axios = require('axios')
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

exports.openLiff = function(sender) {
  axios({
    method: 'post',
    url: 'https://api.line.me/liff/v1/apps',
    headers: {
      "Authorization": "Bearer " + process.env.CHANNEL_ACCESS_TOKEN,
      "Content-Type": "application/json"
    },
    data: {
      "view": {
        "type": "tall",
        "url": process.env.LIFF_WEB_URL
      }
    }
  }).then(function (response) {
    if(response.status === 200) {
      let liffUrl = "line://app/"+ response.data.liffId

      // Show Type Text Massage
      // const message = {
      //   "type": "text",
      //   "text": liffUrl
      // };

      // client.pushMessage(sender, message)
      //   .then(() => {
      //     console.log('success');
      //   })
      //   .catch((err) => {
      //     // error handling
      //     console.log(err);
      //   });

      axios({
        method: 'post',
        url: 'https://api.line.me/v2/bot/message/push',
        headers: {
          "Authorization": "Bearer " + process.env.CHANNEL_ACCESS_TOKEN,
          "Content-Type": "application/json"
        },
        data: {
          "to": sender,
          "messages": [{
           "type": "bubble",
           "body": {
             "type": "box",
             "layout": "vertical",
             "contents": [
               {
                 "type": "image",
                 "url": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
                 "size": "full"
               }
             ]
           },
           "footer": {
             "type": "box",
             "layout": "vertical",
             "contents": [
               {
                 "type": "spacer",
                 "size": "xl"
               },
               {
                 "type": "button",
                 "action": {
                   "type": "uri",
                   "label": "Open",
                   "uri": liffUrl
                 },
                 "style": "primary",
                 "color": "#5DADE2"
               }
             ]
           }
          }]
        }
      }).then(function (response) {
        console.log('success')
      }).catch(function (error) {
        console.log(error);
      })
    }
  })
  .catch(function (error) {
    console.log(error);
  })
}