const fs = require("fs")
const jimp = require('jimp')

var myArgs = process.argv.slice(2);

if (myArgs.length != 4) {
	console.log("Invalid nb of arguments")
	return false
}

const input = myArgs[0]
var path = myArgs[1]
const width = myArgs[2]
const height = myArgs[3]

if (isNaN(width) || isNaN(height)) {
	console.log("width and length should be integer")
	return false
}
fs.access(path, function(error) {
	if (error) {
	  console.log("Directory does not exist.")
	  return false
	}
})
if (path.slice(-1) != '/') {
	path = path + '/'
}
const fileName = (input.split('.')[0].split('/'))
const outputFile = path + fileName[fileName.length - 1] + width + 'x' + height + ".png"
jimp.read(input)
	.then((src) => {
		src
			.resize(parseInt(width), parseInt(height))
			.writeAsync(outputFile)
			.then(() => {
				console.log(`Done! Check ${outputFile}`)
			})
	})
	.catch((err) => {
		console.log('Error', err);
	})
