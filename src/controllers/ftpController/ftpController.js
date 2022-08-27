const { response } = require('express');
const { FtpService} = require('../service/ftpService')
const moment = require('moment')

module.exports = {
    
    async envioFTP(response) {

        try {
            
            const envio = await FtpService()

            console.log(envio)
            
            return response.json({message: 'testando'})
            
        } catch (error) {
            return response.json(error)
        }

    },
    
}