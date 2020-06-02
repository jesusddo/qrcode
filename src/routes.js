const express=require('express')
const qrcodegen=require('./controllers/qrcodegen')
const qrcodeunit=require('./controllers/qrcodeunit')
const files=require('./controllers/files')
const routes=express.Router()

routes.post('/qrcode', qrcodegen.qrcode)

routes.post('/unit', qrcodeunit.qrcodeunit)

routes.get('/files', files.files)

module.exports=routes