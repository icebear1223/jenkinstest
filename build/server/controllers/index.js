const router = require('koa-simple-router');
const Controllers = require('./Controllers');
const constrollers = new Controllers();

module.exports = (app) => {
    console.log('注册路由');
    app.use(router( _ => {
        _.get("/",constrollers.actionIndex());

        _.get("/detail",constrollers.actionDetail())
    }))
}