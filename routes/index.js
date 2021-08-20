var express = require('express');
var router = express.Router();
var path = require('path');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('we are on home');
});

router.get('/upload', (req,res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

router.post('/upload', upload.single('file_uploaded'), (req,res) => {
  res.redirect('/');
})

module.exports = router;
