interface Comunidad {
  IDCCAA: string;
  CCAA: string;
}

interface Provincia {
  IDPovincia: string;
  Provincia: string;
}

export class Gasolinera {
  constructor(
    public id: number,
    public nombre: string,
    public price95: number,
    public priceDiesel: number,
    public postalCode: string,
    public direction: string,
    public province: string,
    public village: string,
    public latitude: string,
    public longitude: string
  ) {}

  // Esto permite acceder a las propiedades dinámicamente
  [key: string]: any;
}
