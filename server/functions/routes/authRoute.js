const router = require('express').Router();

const {
  signup,
  signin
} = require('../handlers/auth_handlers');

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;