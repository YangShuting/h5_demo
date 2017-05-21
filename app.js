var express = require('express');
const app = express();
var engine = require('ejs-locals');
var path = require('path');
const routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error(' 404 找不到');
    err.status = 404;
    res.render('404',{err: err});
});



module.exports = app;




