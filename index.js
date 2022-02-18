// const {createServer} = require('http')
//
// const hostname = '127.0.0.1'
// const port = 3000
// const server = createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World weeeee....!\n')
// })
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`)
// })
//
// setTimeout(() => process.exit(1), 3000)

const express = require('express')
require('dotenv').config();
const chalk = require('chalk')

const app = express()
const log = console.log

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    log('Process terminated')
  })
})

const vars = require('minimist')(process.argv.slice(2))
log(vars)
log(vars['name'])
// vars.forEach((val, index) => log(`${index}: ${val}`))
log(chalk.blue('hi, again!'))
log(chalk.green('hi, again!'))
const pink = chalk.hex("#f61e61")
log(pink('hi, again!'))
const orange = chalk.hex("#ff6600")
log(orange("hi, again!"))

// Print the env variables:
// log(process.env)
// log(process.env.USER_ID)
// log(process.env.USER_KEY)
// log(process.env.NODE_ENV)

// Print the stack trace:
// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// Kill process:
// setTimeout(() => {
//   process.kill(process.pid, 'SIGTERM')
// }, 3000)

// Calculate time spent:
// const doSomething = () => {
//   // We might have to wrap this to Promises?
//   setTimeout(() => log('test'), 2000)
// }
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()