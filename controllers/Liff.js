const axios = require('axios')

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
        "type":"tall",
        "url":"https://eze-ex-leff.herokuapp.com"
      }
    }
  }).then(function (response) {
    if(response.status === 200) {
      const message = {
        "type": "text",
        "text": "line://app/" + response.data.liffId
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
  })
  .catch(function (error) {
    console.log(error);
  })
}