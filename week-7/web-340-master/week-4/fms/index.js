const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'FMS: Landing',
        pageTitle: 'Landing Page'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'FMS: About',
        pageTitle: 'Our Story!'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

