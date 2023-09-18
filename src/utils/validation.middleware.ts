import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import {validate as classValidate} from 'class-validator';
import { valError } from "../errors/validation-error";
import { TypedRequest } from "./typed-request.interface";
// import { QueryProductDTO } from "../api/products-list/product.dto";
// import { extend } from "lodash";



// validate(CreateItemDTO, 'body') // req: TypedRequest<CreateItemDTO>
export function validate<T extends object>(type: (new() => T), origin: 'body') : (req: TypedRequest<T>, res: Response, next: NextFunction) => Promise<void>
// validate(QueryProductDTO, 'query') // req: TypedRequest<any, QueryProductDTO>
export function validate<T extends object>(type: (new() => T), origin: 'query') : (req: TypedRequest<any,T>, res: Response, next: NextFunction) => Promise<void>
export function validate<T extends object>(type: (new() => T)) : (req: TypedRequest<T>, res: Response, next: NextFunction) => Promise<void>
export function validate<T extends object>(type: (new() => T), origin : 'body' | 'query' = 'body'){
    return async (req: TypedRequest<any, any>, res: Response, next: NextFunction) => {
        const data = plainToClass(type, req[origin]);
        const errors = await classValidate(data, { whitelist: true, forbidNonWhitelisted: true });
        if(errors.length){
            next( new valError(errors));
        } else {
            // Mi converte i parametri da stringa a quelli assegniati da noi nel DTO
            req[origin] = data;
            next();
        }
    }   
}


