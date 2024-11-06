export class Gasolinera{
    constructor(
        public id: number,
        public nombre: string,
        public price95: number,
        public priceDiesel: number,
        public postalCode: string,
        public direction: string,
        public province: string,
        public village: string
    ) {}
}