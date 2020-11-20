import { Product } from './product';
export class Company {
    name: string;
    products: Product[];

    constructor(name,Products) {
        this.name = name;
        this.products = [];
        Products.forEach(p => {
            this.products.push(new Product(p.id,p.name,p.price));
        });
    }
}
