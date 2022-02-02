//deleting a directory


const fs = require('fs')

fs.rmdir('./newfolder', err => {
	if (err) {
		console.error(err)
		return
	}

	console.log('directory deleted')
})