/**
 * Name: 
 * Student Id: 
 */

let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();


let Book = require('../models/book');
let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET Route for the add page -  Create Operation */
router.get('/add', bookController.displayAddPage);

/* POST Route for the add page -  Create Operation */
router.post('/add',bookController.processAddPage );


/* GET Route for the edit page -  Update Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* POST Route for the edit page -  Update Operation */
router.post('/edit/:id',bookController.processEditPage);

/* GET Route for the delete  -  Delete Operation */

router.get('/delete/:id', bookController.performDelete);

module.exports = router;