require('whatwg-fetch')

exports.openLiff = function(sender) {
  fetch('https://api.line.me/liff/v1/apps', {
    method: "POST",
    body: {
      "view": {
        "type":"tall",
        "url":"https://eze-ex-leff.herokuapp.com"
      }
    },
    headers: {
      "Authorization": "Bearer " + process.env.CHANNEL_ACCESS_TOKEN,
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(function(response) {
    if(response.status === 200) {
      const message = {
        "type": "text",
        "text": "line://app/" + response.liffId
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
  }, function(error) {
    console.log(error.message)
  })
}