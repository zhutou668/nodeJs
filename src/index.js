const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')

const app = express();
const port = 3000;

const route = require('./routes/index.js');

const db = require('./config/db/index.js')
//connect to DB
db.connect()

//methodOverride
app.use(methodOverride('_method'))


//HTTP logger
app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//Template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
		helpers:{
			sumIndex: (a,b) => a + b,
		}
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log((__dirname, 'resources/views'))

// Route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
