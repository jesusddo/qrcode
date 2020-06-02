const QRCode = require('qrcode')

module.exports = {
  async  qrcodeunit(req, res) {

        let localarray = req.body
        let localsize = localarray.length
        let codloc
        let namefile
        let error

        if (localsize == 0) {
            error = "erro"
        } else {

            for (i = 0; i < (localsize); i++) {
                codloc = localarray[i]
                namefile = localarray[i]

               await QRCode.toFile(`./src/QR-Codes/${namefile}.png`, codloc, {
                    width: 270,
                    height: 270,
                }, (err) => {
                    if (err && i <= localsize) {
                        error = "erro"
                        i = localsize + 1
                        
                    } else if (localsize == i) {
                        
                        localsize = i++
                    }
                })
            }
        }
        if (error == 'erro') {
            res.json({ status: "erro" })
        } else {
            res.json({ status: 'ok' })
        }
    }


}
