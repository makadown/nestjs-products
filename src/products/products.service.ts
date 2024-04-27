import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class ProductsService {

  private products: Product[] = [{
    "id": "c8a1bf1f-3a26-47dc-934c-c43540ee9577",
    "name": "Televisión",
    "description": "Una hermosa television",
    "price": 3000
  },
  {
    "id": "c8a1bf1f-3a26-47dc-934c-c43540ee9578",
    "name": "Computadora",
    "description": "Una compu para que te diviertas",
    "price": 19999.99
  }];

  create(createProductDto: CreateProductDto) {
    const { name, description, price } = createProductDto;
    
    const newProduct = new Product(uuidV4(), name, description, price);

    this.products.push(newProduct);

    return newProduct;
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
