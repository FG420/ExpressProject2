import { Router } from "express";
import { productView, productsList } from "./products.controller";
import { validate } from "../../utils/validation.middleware";
import { QueryProductDTO } from "./product.dto";

const router = Router();

router.get('/', validate(QueryProductDTO, 'query'), productsList);
router.get('/:id', productView);



export default router;
