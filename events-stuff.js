const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// eventEmitter.on('start', (start, end) => {
//   console.log(`started ${start} of ${end}`)
// })

// One-time event listener
eventEmitter.once('start', (start, end) => {
  console.log(`started ${start} of ${end}`)
})

let count = 1

setInterval(() => {
  if(count < 6) {
    eventEmitter.emit('start', count, 5)
    count++
  } else {
    process.exit(1)
  }
}, 1000)