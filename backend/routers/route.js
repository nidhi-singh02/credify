const express = require('express');
const { createDID, listDIDs } = require('../controller/volunteerController');
const { createProgram, createSchema, listPrograms } = require('../controller/programController');

const router = express.Router()

// this is also the signup as a volunteer flow
router.post('/users', createDID)
router.get('/users', listDIDs)

// create a new program
router.post('/schema', createSchema)
router.post('/programs', createProgram)
router.get('/programs', listPrograms)

module.exports = router;
