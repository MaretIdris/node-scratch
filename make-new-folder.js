const fs = require('fs')
const path = require("path");

// Mak a new folder.
const folderName = '/home/maret/Desktop/MyNewFolder'
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}

// Read file and folder names in a directory (readdir() and readdirSync()).
const folderPath = '/home/maret/Desktop'
const foldersAndFilesArray = fs.readdirSync(folderPath)
// console.log(foldersAndFilesArray)

// Read the paths of all files and folders in a directory.
const folderAndFilePaths = fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
console.log(folderAndFilePaths)

console.log(path.isAbsolute(folderPath))

// Filter out all the files from folders.
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}

const isFolder = name => {
  return !fs.lstatSync(name).isFile()
}

const filesOnly = fs.readdirSync(folderPath)
  .map(fileName => path.join(folderPath, fileName))
  .filter(isFile)


// const foldersOnly = fs.readdirSync(folderPath)
//   .map(name => path.join(folderPath,name))
//   .filter(isFolder)

// console.log(filesOnly)
// console.log(foldersOnly)