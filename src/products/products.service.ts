import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodID = new Date().toString();
    const newProduct = new Product(prodID, title, desc, price);
    this.products.push(newProduct);
    return prodID;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.findProduct(productId);
    return { ...product };
  }
  updateProduct(productId:string,title: string, desc: string, price: number) {
      const [product,index] = this.findProduct(productId)
      const updateProduct={...product}
      if(title){
        updateProduct.title=title;
      }
      if(desc){
        updateProduct.description=desc;
      }
      if(price){
        updateProduct.price=price;
      }
      this.products[index]=updateProduct
  }
  deleteProduct(prodID:string){
    const index = this.findProduct(prodID)[1];
    this.products.slice(index,1)
  }
  private findProduct(id: string):[Product,number] {
    const productIndex = this.products.findIndex(prod => prod.id === id);
    const product =this.products[productIndex]
    if (!product) {
      throw new NotFoundException('Could find Product');
    }
    return [product,productIndex]
  }
}
