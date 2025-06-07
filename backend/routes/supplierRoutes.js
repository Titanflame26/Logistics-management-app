import express from 'express';
import * as supplierController from '../controllers/supplierController.js';

const supplierRouter = express.Router();

supplierRouter.post('/', supplierController.createSupplier);
supplierRouter.get('/', supplierController.getAllSuppliers);
supplierRouter.get('/:id', supplierController.getSupplierById);
supplierRouter.put('/:id', supplierController.updateSupplier);
supplierRouter.delete('/:id', supplierController.deleteSupplier);

export default supplierRouter;
