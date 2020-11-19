import { Product } from './product';
export class Company {
    _id: string;
    name: string;
    products: Product[];

    constructor(data: any) {
        data = data || {};
        this.name = data.name;
        this.products = [];
        data.products.forEach(p => {
            this.products.push(new Product(p));
        });
    }
}
