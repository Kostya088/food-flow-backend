import createHttpError from 'http-errors';
import { Order } from '../models/order.js';

export const createOrder = async (req, res) => {
  const { user, items, totalPrice } = req.body;

  if (!user || !user.email || !user.phone || !user.address) {
    throw createHttpError(400, 'User email, phone, and address are required');
  }

  const newOrder = await Order.create({
    user,
    items,
    totalPrice,
  });

  res.status(201).json({
    message: 'Order created successfully',
    order: newOrder,
  });
};
