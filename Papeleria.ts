/* Genera una rama en tu repositorio que compartiste anteriormente 
con el nombre de evaluacion_poo.
2. Desarrollar un sistema de gestión de inventario para una 
papelería que permita realizar operaciones de venta, consultar el 
inventario y gestionar productos.
3. Debes de tener almenos 3 productos.
4. Se debe de guardar en memoria para poder hacer operaciones de 
aumento, resta, consulta en el numero de productos.
4. Procura que tu codigo tenga calidad.
5. Coloca como forma de comentarios en tus clases el por que las creaste.
tiene menú contextual*/


/* 
La clase articulo la crea para que tenga los atributos basicos
que heredara cada producto
*/
class Articulo{
    nombre: string
    precio: number
    cantidad: number

    constructor(nombre: string, precio: number, cantidad: number){
        this.nombre= nombre
        this.precio= precio
        this.cantidad= cantidad
    }
}

/* 
La clase producto la genero para poder aplicar herencia de 
la clase articulo
*/
class Producto extends Articulo{
    constructor(nombre: string, precio: number, cantidad: number){
        super(nombre, precio, cantidad)
    }
}

/* 
Esta clase mantendra los metodos para poder gestionar los productos de
nuestra papeleria, estos nos ayudan a hacer la operaciones solicitadas:
agregar, vender y consultar
*/
class Inventario{
    productos: Map<string, Producto>
    constructor(){
        this.productos= new Map<string, Producto>()
    }
/* 
El Map nos permite almacenar los productos, este contenedor nos da 
acceso rapido a los productos para realizar operaciones.
*/
    mostrarInventario(): void{
        if(this.productos.size === 0){
            console.log("No hay nada en existencia T-T")
        }else{
            console.log("_________________Inventario_________________")
            this.productos.forEach((producto)=>{
                console.log(`${producto.nombre}--Precio: ${producto.precio}--Cantidad${producto.cantidad}`)
            })
        }
    }


    agregarProducto(producto: Producto): void{
        if(this.productos.has(producto.nombre)){
            const producExis= this.productos.get(producto.nombre)!
            producExis.cantidad += producto.cantidad
            console.log(`${producto.nombre} Fue agregado exitosamente, ahora cuenta con ${producto.cantidad} existente. -u-`)
        }else{
            this.productos.set(producto.nombre, producto)
            console.log(`${producto.nombre} ahora es parte de su inventarios`)
        }
    }


    venderProducto(nombre: string, cantidadVend: number): void{
        const producto= this.productos.get(nombre)
        if(producto){
            if(producto.cantidad >= cantidadVend){
                producto.cantidad -= cantidadVend
                console.log("(̶◉͛‿◉̶) Venta realizada (̶◉͛‿◉̶)")
                console.log(`${cantidadVend} ${producto.nombre} vendidos`)
            }else{
                console.log(`( ˘︹˘ ) No hay existencias suficientes de ${producto.nombre} ( ˘︹˘ )`)
            }
        }else{
            console.log(`Ó╭╮Ò El producto ${nombre} no existe Ó╭╮Ò`)
        }
    }
}

/*Crear inventario */
const invent = new Inventario()
/*Creacion de productos */
const product1 = new Producto("Pluma",3,100)
const product2 = new Producto("Colores",25,50)
const product3 = new Producto("Difuminador",5,20)
/*Agregar productos a inventario */
invent.agregarProducto(product1)
invent.agregarProducto(product2)
invent.agregarProducto(product3)
/*Mostrar inventario */
invent.mostrarInventario()


/*Vender productos */
invent.venderProducto("Difuminador",5)
invent.venderProducto("Colores",15)
/*Mostrar inventario despues de ventas */
invent.mostrarInventario()

/*Venta de producto que no existente */
invent.venderProducto("Cuaderno",5)
