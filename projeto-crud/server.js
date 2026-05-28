const express = require('express')
const app = express()
const port = 3000

//disponibilizar os arquivos estaticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


//realizar a conexão com banco de dados
const db = require('./db');

//rota principal
app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //cd projeto-crud/public/index.html
})

//puxar o arquivo api
const apiRoutes = require('./routes/api');
app.use(express.json());
app.use('/api/users', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor funcionando ${port}`)
})