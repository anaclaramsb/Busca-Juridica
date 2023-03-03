import express from 'express';
import {
    getLawSuitByCnj,
    getAllLawSuitByTr,
    getAllTr,
} from './controllers/LawSuitsController.js';

const routes = express.Router();

routes.get('/lawsuits', getLawSuitByCnj);
routes.get('/trregion', getAllLawSuitByTr);
routes.get('/trregions', getAllTr);

export default routes;
