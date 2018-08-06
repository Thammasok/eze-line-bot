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
              "spacing": "md",
              "action": {
                "type": "uri",
                "uri": liffUrl
              },
              "contents": [
                {
                  "type": "text",
                  "text": "LIFF APP",
                  "size": "xl",
                  "weight": "bold"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "icon",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
                        },
                        {
                          "type": "text",
                          "text": "$10.5",
                          "weight": "bold",
                          "margin": "sm",
                          "flex": 0
                        },
                        {
                          "type": "text",
                          "text": "400kcl",
                          "size": "sm",
                          "align": "end",
                          "color": "#aaaaaa"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "icon",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                        },
                        {
                          "type": "text",
                          "text": "$15.5",
                          "weight": "bold",
                          "margin": "sm",
                          "flex": 0
                        },
                        {
                          "type": "text",
                          "text": "550kcl",
                          "size": "sm",
                          "align": "end",
                          "color": "#aaaaaa"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "text": "Click Open button.",
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
                  "color": "#5DADE2",
                  "action": {
                    "type": "uri",
                    "label": "Open",
                    "uri": liffUrl
                  }
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