"use strict";var _koa=_interopRequireDefault(require("koa")),_koaStatic=_interopRequireDefault(require("koa-static")),_co=_interopRequireDefault(require("co")),_path=_interopRequireDefault(require("path")),_koaSwig=_interopRequireDefault(require("koa-swig")),_koaBodyparser=_interopRequireDefault(require("koa-bodyparser"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var app=new _koa.default;app.use((0,_koaStatic.default)(_path.default.join(__dirname,"dist"))),app.use((0,_koaBodyparser.default)()),app.context.render=_co.default.wrap((0,_koaSwig.default)({root:_path.default.join(__dirname,"dist","html"),autoescape:!0,cache:!1,ext:"html",writeBody:!1})),require("./server/controllers/index.js")(app),app.listen(3e3,function(){console.log("server start")});