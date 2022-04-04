import express from 'express'
import Tasas from '../apis/Tasas.js'
import tasasApi from '../apis/Tasas.js'

function getTasasRouter() {

    const router = express.Router()

    const tasasApi = new Tasas()

    //OBTENER TASAS - ENDPOINT http://localhost:8080/api/getTasas
    router.post('/getTasas', async (req, res) => {
        const marca = req.body.marca
        const importe = req.body.importe

        try {
            const tasaObtenida = await tasasApi.getTasas(marca,importe)
            const response = { 
                tasa: tasaObtenida,
                marca: marca,
                importe: importe
             }
            res.status(201).json(response)
        } catch (err) {
            res.status(err.estado).json(err)
        }
    })

   

    return router
}
export { getTasasRouter }
