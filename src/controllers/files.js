const fs = require('fs')

module.exports = {
    files(req, res) {

        
        fs.readdir('./src/QR-Codes/', (err, paths) => {
            if (err) {
                return res.json({ status: 'erro' })
            } else {
                return res.json({ status: paths, path:__dirname+'/src/QR-Codes/'})
            }

        })
    }

}


