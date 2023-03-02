import express from 'express';
import {
    getAllLawSuit,
    getLawSuitByCnj,
    getAllLawSuitByTr,
    getAllTr,
} from './controllers/LawSuitsController.js';

const routes = express.Router();

routes.get('/lawsuits', getAllLawSuit);
routes.get('/lawsuits/:cnj', getLawSuitByCnj);
routes.get('/trregion/:tr', getAllLawSuitByTr);
routes.get('/trregion/', getAllTr);

export default routes;
