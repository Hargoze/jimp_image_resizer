const jimp = require('jimp')

//const inputFile = './source/Obiwan.jpg'
//const outputFile = './output/flip.jpg'

var myArgs = process.argv.slice(2);
const input = myArgs[0]
const output = myArgs[1]
const width = myArgs[2]
const height = myArgs[3]

if (!input || !output || !width || !height) {
	console.log("ERROR ! not enought arguments");
	return false
}
if (isNaN(width) || isNaN(height)) {
	console.log("ERROR ! number expected");
	return false
}

const spliter = output.split('/')
const data = spliter[spliter.length - 1].split('.')
spliter.pop()
var path = spliter.join('/')
path = path + '/'
//console.log(path + data[0] + width + 'x' + height + '.' + data[1])
const OutputName = (path + data[0] + width + 'x' + height + '.' + data[1])
jimp.read(input)
	.then((src) => {
		src
			.resize(parseInt(width), parseInt(height))
			//.rotate(45)
			.writeAsync(OutputName)
			.then(() => {
				console.log(`Done! Check ${OutputName}`)
			})
	})
	.catch((err) => {
		console.log('Error', err);
	})
