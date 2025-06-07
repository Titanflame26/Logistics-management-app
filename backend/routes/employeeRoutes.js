import express from 'express';
import * as employeeController from '../controllers/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.post('/', employeeController.createEmployee);
employeeRouter.get('/', employeeController.getAllEmployees);
employeeRouter.get('/:id', employeeController.getEmployeeById);
employeeRouter.put('/:id', employeeController.updateEmployee);
employeeRouter.delete('/:id', employeeController.deleteEmployee);

export default employeeRouter;
