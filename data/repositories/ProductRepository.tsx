import { Product } from "data/model/Product";
import { GetProductsUseCase } from "data/usecases/GetProductsUseCase";


interface ProductRepository {
    getProducts(offset: number, limit: number): Promise<Product[]>;
}

export class ProductRepositoryImpl implements ProductRepository {
    private readonly getProductsUseCase: GetProductsUseCase;
  
    constructor(getProductsUseCase: GetProductsUseCase) {
      this.getProductsUseCase = getProductsUseCase;
    }
  
    async getProducts(offset: number, limit: number): Promise<Product[]> {
      return this.getProductsUseCase.execute(offset, limit);
    }
  }