"use strict";var router=require("koa-simple-router"),Controllers=require("./Controllers"),constrollers=new Controllers;module.exports=function(e){console.log("注册路由"),e.use(router(function(e){e.get("/",constrollers.actionIndex()),e.get("/detail",constrollers.actionDetail())}))};