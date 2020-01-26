const firebase = require('firebase');
const { db } = require('../utils/admin');
const config = require('../config');

firebase.initializeApp(config);

const {
  signupValidator,
  signinValidator
} = require('../validators/authdata');

const signup = async (req, res) => {
  if(!signupValidator(req.body)) return res.status(400).json({ error: 'invalid form data'} );

  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  try {
    const doc = await db.collection('users').doc(newUser.handle).get();
    if(doc.exists) return res.status(406).json({ error: 'handle is already taken' });
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong'} );
  }

  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    const idToken = await data.user.getIdToken();
    
    const credentials ={
      uid: data.user.uid,
      handle: newUser.handle,
      email: newUser.email
    }

    await db.collection('users').doc(newUser.handle).set(credentials);

    return res.status(200).json({ idToken, user: newUser.handle });
  } catch (error) {
    return res.status(409).json({ error: 'email already taken'} );
  }
}

const signin = async (req, res) => {
  if(!signinValidator(req.body)) return res.status(400).json({ error: 'invalid form data'} );

  try {
    const data = await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password);
    const idToken = await data.user.getIdToken();
    let user;
    try {
      const docs = await db.collection('users').where('email', '==', req.body.email).get();
      docs.forEach(doc => user = doc.id);
      return res.status(200).json({ idToken, user });
    } catch (error) {
      return res.status(500).json({ error: 'something went wrong getting uid'} );  
    }

    // return res.json({ idToken, user });
  } catch (error) {
    return res.status(404).json({ error: 'invalid email/password'} );
  }
}

module.exports = {
  signup,
  signin
}