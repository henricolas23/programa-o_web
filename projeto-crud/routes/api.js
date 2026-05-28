const express = require ('express');

const router = express.Router();

const db = require('../db');//conecta com o banco de dados 

//criar as rotas 
//cadastrar usuarios 
//POST --> INSERT
router.post('/', (req, res)=>{  //caminho> /api/users
    const {nome, email} = req.body;

    db.query('insert into users (nome, email) values (?, ?) ', [nome, email],
        (err, result) =>{ 
            if(err) return res.status(500).send(err);
            res.status(201).json({id:result.insertID, nome, email})
        }
    )
});

//ediatar usuarios
router.get('/listar', (req, res)=>{
    db.query('select * from users', (err, results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

//listar todos os usuarios 
//excluir o usuario
router.delete(' /:id', (req, res )=>{
    const {id}= req.params; 
    db.query('delete from users where id = ?' [id]
        (err) =>{
            if(err) return res.status(500).send(err);
            res.senSatus(204);
             ) {
                
            }
        })
})

module.exports = router;