// @node_modules
const express = require('express');
const hbs = require('hbs');
const path = require('path');

// @app_constants
const app = express();

// @Define paths for Express config
const partialsPath = path.join(__dirname, '../templates/partials');
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');

// @Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// @Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: ' Weather - App ',
    name: 'Erick Vicentin',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Erick Vicentin',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is some helpful text.',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Hace frio',
    location: 'Resistencia',
  });
});

app.get('/products', (req, res) => {
  res.send({
    products: [],
  });
});

app.get('*', (req, res) => {
  res.render('missing', {
    title: '404 Not Found!',
    name: 'Erick Vicentin',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
