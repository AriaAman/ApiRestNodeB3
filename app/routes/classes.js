const { response } = require('express');
const express = require('express');
const { request } = require('http');
const { v4: uuidv4 } = require('uuid');

let router = express.Router();

let classes = [];
//CREATE
router.post('/', (request, response) =>{
    const {name} = request.body;

    let classe = {
        id: uuidv4(),
        name
    };

    classes.push(classe);
    response.status(200).json(classes);
});
//LIRE 
router.get('/', (request, response) => {
    response.status(200).json(classes);
}),
//LIRE MAIS AVEC UN ID PRECIS
router.get('/:id', (request, response) => {
    const {id} = request.params;

    let classe = classes.find(item => item.id === id);

    response.status(200).json(classe);
}),
//SUPPRIMER UN ID
router.delete('/:id', (request,response) => {
    const {id} = request.params;

    let classe = classes.filter(object => object.id !== id);

    response.status(200).json(classe);
}),
//MODIFIER UN NOM DANS UN ID
router.put('/:id', (request,response) =>{
    const {id} = request.params;
    const {name} = request.body;

    let classe = classes.find(item => item.id === id);

    classe.name = name;

    response.status(200).json(classe);
})

module.exports = router;