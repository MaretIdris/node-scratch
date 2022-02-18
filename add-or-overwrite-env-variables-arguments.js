// In order to run a node app, I don't need to start an express server.
const minimist = require('minimist')

const log = console.log
const minimistArguments = minimist(process.argv.slice(2))
const arguments = process.argv.slice(2)

/*
* TLDR: If I want to pass arguments that end up as an array (not objects), use
* process.argv.slice(2).
*
* Passing 3 strings as arguments to a node app will return an array of 3 strings
* in it. If a pass a number, it will translate it as a string too. If I want it
* to be parsed as number, use minimist npm library.
* */
log(arguments)
/*
* TLDR: If I want to pass objects as arguments to my node application, use
* minimist to parse the argument as object, so I can use it in my application.
* ... --name=nadia becomes {_:[], name: "nadia"}
*
* If I want to pass strings and numbers as arguments, use minimist, because it
* will parse the numbers (instead of leaving them as strings).
* ... nadia 32 becomes {_: ['nadia', 32]}
* */
log(minimistArguments)
log(process.env.USER_ID)
log(process.env.USER_KEY)