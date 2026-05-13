const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Permite receber dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Array em memória
let feedbacks = [];

// =====================================
// PÁGINA INICIAL
// =====================================
app.get('/', (req, res) => {

    res.send(`
        <html>
        <head>
            <title>Feedbacks</title>

            <style>

                body{
                    font-family: Arial;
                    background-color: #f4f4f4;
                    padding: 30px;
                }

                .container{
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    width: 500px;
                    margin: auto;
                }

                input, textarea{
                    width: 100%;
                    padding: 10px;
                    margin-top: 5px;
                    margin-bottom: 15px;
                }

                button{
                    padding: 10px;
                    background-color: blue;
                    color: white;
                    border: none;
                    cursor: pointer;
                }

                a{
                    text-decoration: none;
                }

            </style>

        </head>

        <body>

            <div class="container">

                <h1>Feedback do Curso</h1>

                <form action="/feedbacks/enviar" method="POST">

                    <label>Nome:</label>
                    <input type="text" name="nome" required>

                    <label>Comentário:</label>
                    <textarea name="comentario" required></textarea>

                    <button type="submit">
                        Enviar Feedback
                    </button>

                </form>

                <br>

                <a href="/feedbacks/lista">
                    Ver Feedbacks
                </a>

            </div>

        </body>
        </html>
    `);

});

// =====================================
// ENVIAR FEEDBACK
// =====================================
app.post('/feedbacks/enviar', (req, res) => {

    const nome = req.body.nome;
    const comentario = req.body.comentario;

    feedbacks.push({
        nome: nome,
        comentario: comentario
    });

    res.redirect('/feedbacks/lista');

});

// =====================================
// LISTA DE FEEDBACKS
// =====================================
app.get('/feedbacks/lista', (req, res) => {

    let html = `
        <html>

        <head>

            <title>Lista de Feedbacks</title>

            <style>

                body{
                    font-family: Arial;
                    background-color: #f4f4f4;
                    padding: 30px;
                }

                .container{
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    width: 600px;
                    margin: auto;
                }

                .feedback{
                    border: 1px solid #ccc;
                    padding: 15px;
                    margin-bottom: 15px;
                    border-radius: 8px;
                }

                button{
                    background-color: red;
                    color: white;
                    border: none;
                    padding: 8px;
                    cursor: pointer;
                }

            </style>

        </head>

        <body>

            <div class="container">

                <h1>Lista de Feedbacks</h1>

                <a href="/">Voltar</a>

                <hr>
    `;

    if(feedbacks.length === 0){

        html += `
            <p>Nenhum feedback enviado.</p>
        `;

    }else{

        feedbacks.forEach((feedback, index) => {

            html += `
                <div class="feedback">

                    <h3>${feedback.nome}</h3>

                    <p>${feedback.comentario}</p>

                    <form action="/feedbacks/remover" method="POST">

                        <input 
                            type="hidden" 
                            name="index" 
                            value="${index}"
                        >

                        <button type="submit">
                            Remover
                        </button>

                    </form>

                </div>
            `;

        });

    }

    html += `
            </div>

        </body>

        </html>
    `;

    res.send(html);

});

// =====================================
// REMOVER FEEDBACK
// =====================================
app.post('/feedbacks/remover', (req, res) => {

    const index = req.body.index;

    feedbacks.splice(index, 1);

    res.redirect('/feedbacks/lista');

});

// =====================================
// INICIAR SERVIDOR
// =====================================
app.listen(PORT, () => {

    console.log(`
Servidor rodando:
http://localhost:${PORT}
    `);

});