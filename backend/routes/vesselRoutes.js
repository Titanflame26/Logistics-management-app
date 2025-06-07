import express from 'express';
import * as vesselController from '../controllers/vesselController.js';

const vesselRouter = express.Router();

vesselRouter.post('/', vesselController.createVessel);
vesselRouter.get('/', vesselController.getAllVessels);
vesselRouter.get('/:id', vesselController.getVesselById);
vesselRouter.put('/:id', vesselController.updateVessel);
vesselRouter.delete('/:id', vesselController.deleteVessel);

export default vesselRouter;
