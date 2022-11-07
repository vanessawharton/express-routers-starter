let express = require('express');
let router = express.Router();

let bookList = [];

// Express removed the '/book' when we app.use a router file
// changed app.get to router.get and app.post to router.post
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;    ``