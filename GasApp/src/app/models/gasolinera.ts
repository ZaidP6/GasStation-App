export interface Gasolinera {
    Fecha: string
    ListaEESSPrecio: ListaEessprecio[]
    Nota: string
    ResultadoConsulta: string
}

export interface ListaEessprecio {
    "C.P.": string
    Dirección: string
    Horario: string
    Latitud: string
    Localidad: string
    Longitud_x0020__x0028_WGS84_x0029_: string
    Margen: string
    Municipio: string
    Precio_x0020_Gasoleo_x0020_A: string
    Precio_x0020_Gasoleo_x0020_B: string
    Precio_x0020_Gasoleo_x0020_Premium: string
    Precio_x0020_Gasolina_x0020_95_x0020_E10: string
    Precio_x0020_Gasolina_x0020_95_x0020_E5: string
    Precio_x0020_Gasolina_x0020_95_x0020_E5_x0020_Premium: string
    Precio_x0020_Gasolina_x0020_98_x0020_E10: string
    Precio_x0020_Gasolina_x0020_98_x0020_E5: string
    Precio_x0020_Hidrogeno: string
    Provincia: string
    IDMunicipio: string
    IDProvincia: string
    IDCCAA: string
}
