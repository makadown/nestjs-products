export interface UpdateWithOptions {
    name?: string;
    description?: string;
    price?: number;
}


export class Product {

    // public id: string,
    // public name: string,
    // public description: string,
    // public price: number

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number) {        
    }

    updateWith(uwo: UpdateWithOptions
    ) {
        this.name = uwo.name ?? this.name;
        this.description = uwo.description ?? this.description;
        this.price = uwo.price ?? this.price;
    }
}
