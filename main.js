process.env.NTBA_FIX_319 = 1;

const db = require('./lib/db.js')
const botd = require('./lib/bot.js')
const schedule = require('./lib/schedule.js')
const fs = require('fs')
//Initialize database
// and then
// Schedule All Entry from database to cron
db.init(__dirname+"/db.db",() => schedule.initCronDb())



// Initialize Telegram Bot
botd.init(fs.readFileSync('token.txt','utf8').trim())







