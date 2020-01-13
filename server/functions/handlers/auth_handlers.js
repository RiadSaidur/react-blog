const firebase = require('firebase');
const { db } = require('../utils/admin');
const config = require('../config');

firebase.initializeApp(config);

const {
  signupValidator,
  signinValidator
} = require('../validators/authdata');

const signup = async (req, res) => {
  if(!signupValidator(req.body)) return res.json({ error: 'invalid form data'} );

  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  try {
    const doc = await db.collection('users').doc(newUser.handle).get();
    if(doc.exists) return res.json({ error: 'handle is already taken' });
  } catch (error) {
    return res.json({ error: 'something went wrong'} );
  }

  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    const idToken = await data.user.getIdToken();
    
    const credentials ={
      uid: data.user.uid,
      handle: newUser.handle
    }

    await db.collection('users').doc(newUser.handle).set(credentials);

    return res.json({ idToken });
  } catch (error) {
    return res.json({ error: 'something went wrong siging up'} );
  }
}

const signin = async (req, res) => {
  if(!signinValidator(req.body)) return res.json({ error: 'invalid form data'} );

  try {
    const data = await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password);
    const idToken = await data.user.getIdToken();
    return res.json({ idToken });
  } catch (error) {
    return res.json({ error: 'something went wrong siging in'} );
  }
}

module.exports = {
  signup,
  signin
}