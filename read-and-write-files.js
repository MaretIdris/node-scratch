const fs = require('fs')

fs.readFile('weather.text', "utf-8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})


// Make a file and add 10 lines of text in it. The code below will order the
// lines not in order.
// for(let i = 1; i < 6; i++) {
//   const content = `${i}. This is a line \n`
//
//   fs.writeFile('/home/maret/Desktop/myNewFile.text', content, {flag: 'a+'}, err => {
//     if(err) {
//       console.log(err)
//       return
//     }
//     // File written successfully.
//   })
// }

// Make a file and add 5 lines of text in it. The code below will always order
// the lines in the correct order.
for (let i = 1; i < 6; i++) {
  const content = `${i}. This is a line \n`
  const file = '/home/maret/Desktop/myNewFile.text'
  const contentToAdd = 'Content I added \n'

  try {
    fs.writeFileSync(file, content, {flag: 'a+'})
    fs.appendFileSync(file, contentToAdd)
  } catch (err) {
    console.error(err)
  }
}


// Read how many lines of code are on the screen:
fs.readFile('/home/maret/Desktop/myNewFile.text', "utf-8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const lines = data.split('\n').length - 1
  const content = `This file has ${lines} in it.`


  // Make a new folder.
  const folderName = '/home/maret/Desktop/linesOfCodeCalculated'
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
    }
  } catch (err) {
    console.error(err)
  }

  const fileName = 'countLines.text'
  const filePath = '/home/maret/Desktop/linesOfCodeCalculated/'
  try {
    // Make a new file and add the number of lines in it.
    fs.writeFileSync(filePath+fileName, content)
  } catch (err) {
    console.error(err)
  }
})

// Read file from Desktop
// fs.readFile('/home/maret/Desktop/notes_on_weather_app.js', "utf-8", (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })
//

// Read file synchronously
// try {
//   const data = fs.readFileSync('/home/maret/Desktop/notes_on_weather_app.js', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }