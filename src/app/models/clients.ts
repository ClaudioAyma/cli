export class Clients {

    $id : number 
    nombre_cliente : string
    nacimiento : string
    direccion : string
    ciudad : Ciudades
    nit_cliente : string
    telf1 : number
    telf2 : number
    telf3 : number
    email : string;

}
type Ciudades = 
                "Santa Cruz" |
                "Beni"       |
                "Pando"      |
                "Cochabamba" |
                "Sucre"      |
                "Tarija"     |
                "La Paz"     |
                "Oruro"      |
                "Potosi" 
