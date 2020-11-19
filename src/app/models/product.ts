export class Product {
    id: String;
    name: String;
    price: Number;
    photo: String;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.photo = data.photo;
    }
}