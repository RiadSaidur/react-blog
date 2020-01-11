const functions = require('firebase-functions');

const app = require('express')();

const publicRoute = require('./routes/publicRoute');
const protectedRoute = require('./routes/protectedRoute');

app.use('/public', publicRoute);
app.use('/protected', protectedRoute);

exports.api = functions.region('asia-east2').https.onRequest(app);