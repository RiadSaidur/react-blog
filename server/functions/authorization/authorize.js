const { db, admin } = require('../utils/admin');

const authorized = async (req, res, next) => {
  let idToken;
  
  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) idToken = req.headers.authorization.split('Bearer ')[1];
  else return res.status(403).json({ error: 'unauthorized access' });

  try {
    req.user = await admin.auth().verifyIdToken(idToken);
  } catch (error) {
    return res.json({ error: 'something went wrong verifying token' });
  }

  try {
    const user = await db.collection('users').where('uid', '==', req.user.uid).get();
    req.user.handle = user.docs[0].data().handle;
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }

  return next();
}

module.exports = authorized;