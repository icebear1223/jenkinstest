// const Koa = require('koa');
// const staticfile = require('koa-static');
// const co = require('co');
// const path = require('path');
// const render = require('koa-swig');
// const bodyParser = require('koa-bodyparser');
import Koa from 'koa';
import staticfile from 'koa-static';
import co from 'co';
import path from 'path';
import render from 'koa-swig';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
app.use(staticfile(path.join(__dirname,"dist")));
app.use(bodyParser());
app.context.render = co.wrap(render({
    root:path.join(__dirname,"dist","html"),
    autoescape: true,
   // cache: 'memory', // disable, set to false
   cache: false, 
    ext: 'html',
    writeBody: false
}));
require('./server/controllers/index.js')(app);
app.listen(3000,()=>{
    console.log("server start");
});