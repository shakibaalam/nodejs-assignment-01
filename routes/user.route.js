const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();


router.route('/')
    .get(userController.getAllUsers)
    .post(userController.postAUser)

router.route('/:id')
    .get(userController.getAUser)
    .patch(userController.updateAUser)
    .delete(userController.deleteAUser)

module.exports = router    