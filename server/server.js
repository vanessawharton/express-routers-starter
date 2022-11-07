const express = require('express');
const bodyParser = require('body-parser');

// adding routes
let bookRouter = require('./routes/book_router.js');
let movieRouter = require('./routes/movie_router.js');

const app = express();
const PORT = process.env.PORT || 5000;
// const bookList = [];
// const movieList = [];

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// when server receives a request at /book, use the bookRouter
// add url of /book
app.use('/book', bookRouter);
app.use('/movie', movieRouter);

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!
// app.get('/book', (req, res) => {
//     res.send(bookList);
// });

// app.post('/book', (req, res) => {
//     bookList.push(req.body);
//     res.sendStatus(200);
// });

// app.get('/movie', (req, res) => {
//   res.send(movieList);
// });

// app.post('/movie', (req, res) => {
//   movieList.push(req.body);
//   res.sendStatus(200);
// });
