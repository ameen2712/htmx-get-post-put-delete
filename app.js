import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';
import createmovieList from './views/movielist.js';
import createmovietemplate from './views/movie.js';
import BOOKS_DATA from './data/data.js';
import MOVIES_DATA from './data/moviesdata.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});

app.get('/movies', (req, res) => {
  res.send(createmovieList(MOVIES_DATA));
});

app.post('/books', (req, res) => {
  const {title, author} = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({id, title, author});

  res.redirect('/books/' + id);
});

app.post('/movies', (req, res) => {
  const {title, director} = req.body;
  const id = Math.random().toString();

  MOVIES_DATA.push({id, title, director});
  res.redirect('/movies/' + id);
});

app.get('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);

  res.send(createBookTemplate(book));
});

app.get('/movies/:id', (req, res) => {
  const {id} = req.params;
  const movie = MOVIES_DATA.find(m => m.id === id);

  res.send(createmovietemplate(movie));
});

app.delete('/books/:id', (req, res) => {
  const idx = BOOKS_DATA.findIndex(b => b.id === req.params.id);
  BOOKS_DATA.splice(idx, 1);

  res.send();
});

app.delete('/movies/:id', (req, res) => {
  const idx = MOVIES_DATA.findIndex(m => m.id === req.params.id);
  MOVIES_DATA.splice(idx, 1);

  res.send();
});

app.put('/books/:id', (req, res) => {
  const {title, author} = req.body;
  const {id} = req.params;

  const newBook = {title, author, id};

  const idx = BOOKS_DATA.findIndex(b => b.id === id);
  BOOKS_DATA[idx] = newBook;

  res.send(createBookTemplate(newBook));
});

app.put('/movies/:id', (req, res) => {
  const {title, director} = req.body;
  const {id} = req.params;

  const newMovie = {title, director, id};

  const idx = MOVIES_DATA.findIndex(m => m.id === id);
  MOVIES_DATA[idx] = newMovie;

  res.send(createmovietemplate(newMovie));
});

app.get('/books/edit/:id', (req, res) => {
  const book = BOOKS_DATA.find(b => b.id === req.params.id);

  res.send(createEditFormTemplate(book));
});

app.get('/movies/edit/:id', (req, res) => {
  const movie = MOVIES_DATA.find(m => m.id === req.params.id);

  res.send(createEditFormTemplate(movie));
});

app.post('/books/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  res.send(createListTemplate(BOOKS_DATA.filter(b => b.title.toLowerCase().includes(text))));
});

app.post('/movies/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  res.send(createmovieList(MOVIES_DATA.filter(m => m.title.toLowerCase().includes(text))));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
