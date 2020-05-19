/* Importing Different Modules */
const { globalVariables } = require('./config/configuration')
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const { mongodbUrl, PORT } = require('./config/configuration');
const flash = require('connect-flash');
const session = require('express-session');


const app = express();

//Configure to connect the mongo db
mongoose.connect(mongodbUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(response => {
        console.log("Mongodb connected sucessfully.");
    }).catch(err => {
        console.log("Database connection fail");

    });

/* Configure Express*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


/*flash and session*/
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(globalVariables);

/* Setup View Engine To Use Handlebars */
app.engine('handlebars', hbs({
    defaultLayout: 'default',

}));
app.set('view engine', 'handlebars');



/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});