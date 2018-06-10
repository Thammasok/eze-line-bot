// const firebase = require("firebase");
// const line = require('@line/bot-sdk');
// const dotenv = require('dotenv');

// dotenv.config();
// const client = new line.Client({
// 	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
// });

const admin = require('firebase-admin');
const serviceAccountKey = require('../config/serviceAccountKey.json')


exports.todoLists = function (sender) {
	return new Promise(() => {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey),
      databaseURL: process.env.FIREBASE_DATABASE_URL
    });

    var db = admin.firestore();
    
    var docRef = db.collection('users').doc('Surin');

    var setAda = docRef.set({
      first: 'Surin',
      last: 'Thongkam',
      born: 1889
    });

	});
}