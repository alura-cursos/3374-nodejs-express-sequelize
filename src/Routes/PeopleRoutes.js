const PeopleController = require('../Controllers/PeopleController.js');
const { Router } = require('express');

const router = Router();

router.get('/people',PeopleController.GetAll);

module.exports = router;