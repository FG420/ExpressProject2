import { Request, Response, NextFunction } from "express";
import { ProductService } from './products.service';
import { NotFoundError } from "../../errors/not-found";
import { TypedRequest } from "../../utils/typed-request.interface";
import { QueryProductDTO } from "./product.dto";

const prodService = new ProductService();

export const productsList = async (req: TypedRequest<any, QueryProductDTO>, res: Response, next: NextFunction) => {
    console.log(req.body)
    const prodList = await prodService.find(req.query);
    res.json(prodList);
}
export const productView = async (req: Request, res: Response, next: NextFunction) => {
    const prodId = await prodService.getById(req.params.id);
    if(!prodId){
        throw new NotFoundError();
    }
    res.json(prodId);
}