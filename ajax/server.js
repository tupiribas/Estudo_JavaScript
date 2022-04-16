const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
// ler os dados e transformar em obj
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json())

// Upload de imagens e arquivos
const multer = require('multer')

// Configurar e personalizar a pasta onde irá salvar o arquivo
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload') // '.' -> pasta de destino 
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo') // single(name="arquivo") (html)

app.post('./upload', (req, resp) => {
    upload(req, resp, err => {
        if (err) {
            return resp.end('ERRO COD.:001 >>> Ocorreu um erro.')
        }

        resp.end('Concluído com sucesso!')
    })
})

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8000, () => console.log('Servidor inicializado.'))