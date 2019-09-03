const express = require('express');
const app = express();
const path = require('path');
const exphandlebars = require('express-handlebars');
const members = require('./Members');
const PORT = process.env.PORT || 5000;


// const logger = require('./middleware/logger');

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => res. render('index', {
    title: 'Member app',
    members
}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log('Server started on port ' + PORT));