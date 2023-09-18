import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { Type } from "class-transformer";
import { IsGreaterThan } from "../../utils/greater-than.validator";


export class QueryProductDTO {
    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    minPrice: number;

    @IsNumber()
    @IsOptional()
    @Min(0)
    @IsGreaterThan('minPrice', {
        message: 'maxPrice must be greater than minPrice'
    })
    @Type(() => Number)
    maxPrice: number;
}
