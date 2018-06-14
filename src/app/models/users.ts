export class Users {
    $id : number
    nombre_usuario : string
    login : string
    pass : string
    rol : roles
    productos_usuario : JSON
    ventaSi : number
    ventaNo : number

}
type roles = "ADMINISTRADOR" | "VENDEDOR"

