import { Shop } from '../models/shop.js';

export const getAllShops = async (req, res) => {
  const shops = await Shop.find();
  res.status(200).json(shops);
};
