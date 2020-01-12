const functions = require('firebase-functions');

const app = require('express')();

const publicRoute = require('./routes/publicRoute');
const protectedRoute = require('./routes/protectedRoute');
const userRoute = require('./routes/authRoute');

app.use('/public', publicRoute);
app.use('/protected', protectedRoute);
app.use('/auth', userRoute);

exports.api = functions.region('asia-east2').https.onRequest(app);