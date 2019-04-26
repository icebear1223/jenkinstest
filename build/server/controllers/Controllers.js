const fetch = require("node-fetch");

class Controllers {
    constructor(){}

    actionIndex(){
        return async (ctx,next)=>{
            ctx.body = await ctx.render('index.html',{
                res:'这是首页'
            })
        }
    }

    actionDetail(){
        return async (ctx,next)=>{
            ctx.body = await ctx.render('detail.html',{
                res:'这是详情页'
            })
        }
    }
}

module.exports = Controllers;