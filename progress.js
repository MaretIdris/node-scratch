const ProgressBar = require('progress')
const chalk = require('chalk')

const pink = chalk.hex("#f61e61")
const symbl = pink(">")

const bar = new ProgressBar(':bar', { total: 20, incomplete: "🍌", complete: "🐒" })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)