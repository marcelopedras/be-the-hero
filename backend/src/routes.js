const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Session
routes.post('/sessions', SessionController.create);

// Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Incidents
routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

// Profile
routes.get('/profile', ProfileController.index);

module.exports = routes;