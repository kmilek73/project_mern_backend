const express = require("express");
const router = express.Router();

const indexViewController = require('../controllers/indexController'); //import kontrolera


router.post('/addUser', indexViewController.create); //dodaje usera
router.delete('/delete/:id', indexViewController.delete);
router.get('/:id', indexViewController.user); //wyświetla pojedynczego uzytkownika
router.get('/', indexViewController.allUsers); // wyświetla wszystkich użytkowników 
router.put('/edit/:id', indexViewController.update);




module.exports = router; // eksport całości