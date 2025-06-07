import express from 'express';
import * as customerController from '../controllers/customerController.js';

const customerRouter = express.Router();

customerRouter.get('/', customerController.getAllCustomers);
customerRouter.get('/:id', customerController.getCustomerById);
customerRouter.post('/', customerController.createCustomer);
customerRouter.put('/:id', customerController.updateCustomer);
customerRouter.delete('/:id', customerController.deleteCustomer);

export default customerRouter;
