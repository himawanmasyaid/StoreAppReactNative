import { Product } from "data/model/Product";
import { GetProductsUseCase } from "data/usecases/GetProductsUseCase"


export class GetProductsUseCaseImpl implements GetProductsUseCase {

    private readonly apiUrl = 'https://api.escuelajs.co/api/v1/products';

    async execute(offset: number, limit: number): Promise<Product[]> {
        const response = await fetch(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
        const data = await response.json();
        return data;
      }

}