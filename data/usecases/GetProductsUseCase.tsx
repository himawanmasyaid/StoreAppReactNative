import { Product } from "data/model/Product";

export interface GetProductsUseCase {
    execute(offset: number, limit: number): Promise<Product[]>;
}