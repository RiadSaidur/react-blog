const functions = require('firebase-functions');

const app = require('express')();
const cors = require('cors');

const authorized = require('./authorization/authorize');

const publicRoute = require('./routes/publicRoute');
const protectedRoute = require('./routes/protectedRoute');
const authRoute = require('./routes/authRoute');

app.use(cors());

app.use('/public', publicRoute);
app.use('/protected', authorized, protectedRoute);
app.use('/auth', authRoute);

exports.api = functions.region('asia-east2').https.onRequest(app);