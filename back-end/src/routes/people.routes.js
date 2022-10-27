const router =require('express-promise-router')();
const peopleController = require('../controllers/people.controller');
const dbInsertAllCon = require('../controllers/db');

router.post('/people',peopleController.createPeople);
router.get('/people',peopleController.listPeople);
router.get('/people/:id',peopleController.getById);
router.put('/people/:id',peopleController.updatePpl);
router.delete('/people/:id',peopleController.deleteByYd);
router.delete('/deleteall',peopleController.deleteAll);
router.post('/insertall',dbInsertAllCon.insertAll);
module.exports=router;
