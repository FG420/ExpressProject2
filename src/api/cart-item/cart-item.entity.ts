import { Types } from 'mongoose';
import { Product } from '../products-list/product.entity';

export interface CartItem {
  id?: string;
  product: Types.ObjectId | string | Product;
  quantity: number;
  user?: Types.ObjectId;
}
