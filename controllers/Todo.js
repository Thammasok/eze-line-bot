const firebase = require("firebase");
const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

exports.todoLists = function (sender) {
	return new Promise(() => {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID
    })
    
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore()
    var todoList = db.collection('todo')
    console.log(todoList)
	});
}