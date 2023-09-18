import mongoose from "mongoose";
import { Product as IProduct } from "./product.entity";


export const productSchema = new mongoose.Schema<IProduct>({
    name: String,
    description: String,
    netPrice: Number,
    discount: Number,
    weight: Number
});

productSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        return ret;
    }
});

export const Product = mongoose.model('Product', productSchema);