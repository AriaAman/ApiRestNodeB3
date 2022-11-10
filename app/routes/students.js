const { json } = require('body-parser');
const express = require('express');
const studentModel = require('../models/student');

const { response } = require('express');
const { request } = require('http');

const student = require('../models/student');

let router = express.Router();

router.post('/', async(req, res) =>{
    const {firstname, lastname} = req.body;

    if (typeof firstname === 'undefined' || typeof lastname === 'undefined'){
        return res.status(500).json({
            "msg": "Vous devez entrer un nom et un prénom !"
        })
    }
    try {
        let student = await studentModel.create({
            firstname,
            lastname
        });
        return res.status(200).json(student);
    }catch (error){
        return res.status(500).json({
            "msg": "Il y a eu une erreur: " + erreur
        })
    }
})

//LIRE 
router.get('/', (req, res) => {
    res.status(200).json(student);
}),
//LIRE MAIS AVEC UN ID PRECIS
router.get('/:id', (req, res) => {
    const {id} = req.params;

    let student = students.find(item => item.id === id);

    res.status(200).json(student);
}),
//SUPPRIMER UN ID
router.delete('/:id', (req,res) => {
    const {id} = req.params;

    let student = students.filter(object => object.id !== id);

    res.status(200).json(classe);
}),
//MODIFIER UN NOM DANS UN ID
router.put('/:id', (req,res) =>{
    const {id} = req.params;
    const {name} = req.body;

    let student = students.find(item => item.id === id);

    student.name = name;

    res.status(200).json(classe);
})


module.exports = router;
