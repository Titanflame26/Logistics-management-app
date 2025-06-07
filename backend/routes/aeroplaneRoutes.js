import express from 'express';
import * as aeroplaneController from '../controllers/aeroplaneController.js';

const aeroplaneRouter = express.Router();

aeroplaneRouter.post('/', aeroplaneController.createAeroplane);
aeroplaneRouter.get('/', aeroplaneController.getAllAeroplanes);
aeroplaneRouter.get('/:id', aeroplaneController.getAeroplaneById);
aeroplaneRouter.put('/:id', aeroplaneController.updateAeroplane);
aeroplaneRouter.delete('/:id', aeroplaneController.deleteAeroplane);

export default aeroplaneRouter;
