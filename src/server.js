const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const path = require('path');

//Inicializaciones
const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//Middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(flash());

// Global Variables
/*
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});*/


//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/productos'));
app.use(require('./routes/persona'));

//Archivos publicos
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;