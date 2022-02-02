//this method will give information about the names of the contents

const fs = require('fs')

fs.readdir('./', (err, files) => {
	if (err) {
		console.error(err)
		return
	}

	console.log('files: ', files)
})


//when we set the withFileType option to true it will tell us whether an entry is a file, or another directory. 


fs.readdir('./', { withFileTypes: true }, (err, files) => {
	if (err) {
		console.error(err)
		return
	}

	console.log('files: ')
	files.forEach(file => {
		// the `isDirectory` method returns true if the entry is a directory
		const type = file.isDirectory() ? 'directory' : 'file'
		console.log(type, file.name)
	})
})