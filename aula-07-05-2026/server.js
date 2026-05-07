const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

//criar uma ação para servir arquivos esaticos (public)
app.use(express.static('public'));

//rotas (metodos: GET, POST, PUT E DELET)
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/sobre', (req, res) => {
  res.send('Pagina sobre!')
   res.sendFile(__dirname + '/public/sobre.html')
})

app.post('/contato'), (req, res)=>{
    const{nome, email}= req.body;
    res.send('dados cadastrados com sucesso;', $(nome), $(email))
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
