//creating a directory

const fs = require('fs')

fs.mkdir('./newfolder', err => {
	if (err) {
		console.error(err)
		return
	}

	console.log('directory created')
})