import express from 'express';
import * as orderController from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/', orderController.createOrder);
orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:id', orderController.getOrderByID);
orderRouter.put('/:id', orderController.updateOrder);
orderRouter.delete('/:id', orderController.deleteOrder);

export default orderRouter;
