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
      
      // Show Type Menu
      const message = {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "action": {
            "type": "uri",
            "uri": liffUrl
          },
          "contents": [
            {
              "type": "text",
              "text": "LIFF",
              "size": "xl",
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "LIFF App by EZE",
              "wrap": true,
              "color": "#aaaaaa",
              "size": "xxs"
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "spacer",
              "size": "xxl"
            },
            {
              "type": "button",
              "style": "primary",
              "color": "#905c44",
              "action": {
                "type": "uri",
                "label": "Open",
                "uri": liffUrl
              }
            }
          ]
        }
      }
    
      client.pushMessage(sender, message)
        .then(() => {
          console.log('success');
        })
        .catch((err) => {
          // error handling
          console.log(err);
        });
    }
  })
  .catch(function (error) {
    console.log(error);
  })
}