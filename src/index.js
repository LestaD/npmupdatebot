const debug = require('debug')('npmupdate')
const Telegraf = require('telegraf')

const { BOT_TOKEN, NODE_ENV = 'production' } = process.env

if (!BOT_TOKEN) {
  console.error('BOT_TOKEN required env variable to start bot')
  process.exit(10)
}

const bot = new Telegraf(BOT_TOKEN)

bot.command('start', ctx => {
  ctx.reply('Hi!\n Send me your npm token!')
})

bot.command('status', ctx => {
  ctx.reply('✅ Bot working')
})


bot.startPolling()
