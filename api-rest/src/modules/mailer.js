const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass},
});

const options = {
    viewEngine : {
        extName : '.hbs',
        partialsDir : path.resolve('./resources/mail'),
        layoutsDir : path.resolve('./resources/mail'),
        defaultLayout: 'auth/forgot_password.html',
    },
    viewPath : path.resolve('./resources/mail'),
    extName: '.html',
};

transport.use('compile', hbs(options));

module.exports = transport;