const QRCode = require('qrcode')

module.exports = {
    async qrcode(req, res) {
        let local = req.body.location
        let tipo = req.body.selection
        let localarray = local.split(",", 1200)
        let localsize = localarray.length
        let codloc
        let namefile
        let error

        console.log(localarray[localsize - 1], localsize)
        if (localsize < 2  || localsize > 1000) {
            
            res.json({ status: 'dados' })
        } else {
            //Loop for QRCodes generation
            //Type verification
            for (i = 0; i < (localsize) - 1; i++) {
                if (tipo == "Outros") {
                    codloc = localarray[i]
                    namefile = localarray[i]
                    
                }
                else {
                    codloc = `\\~${tipo}${localarray[i]}~\\`
                    namefile = tipo + localarray[i]
                    
                }

                if (localarray[i] != '') {
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
}