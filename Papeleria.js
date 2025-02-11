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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
La clase articulo la crea para que tenga los atributos basicos
que heredara cada producto
*/
var Articulo = /** @class */ (function () {
    function Articulo(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    return Articulo;
}());
/*
La clase producto la genero para poder aplicar herencia de
la clase articulo
*/
var Producto = /** @class */ (function (_super) {
    __extends(Producto, _super);
    function Producto(nombre, precio, cantidad) {
        return _super.call(this, nombre, precio, cantidad) || this;
    }
    return Producto;
}(Articulo));
/*
Esta clase mantendra los metodos para poder gestionar los productos de
nuestra papeleria, estos nos ayudan a hacer la operaciones solicitadas:
agregar, vender y consultar
*/
var Inventario = /** @class */ (function () {
    function Inventario() {
        this.productos = new Map();
    }
    /*
    El Map nos permite almacenar los productos, este contenedor nos da
    acceso rapido a los productos para realizar operaciones.
    */
    Inventario.prototype.mostrarInventario = function () {
        if (this.productos.size === 0) {
            console.log("No hay nada en existencia T-T");
        }
        else {
            console.log("_________________Inventario_________________");
            this.productos.forEach(function (producto) {
                console.log("".concat(producto.nombre, "--Precio: ").concat(producto.precio, "--Cantidad").concat(producto.cantidad));
            });
        }
    };
    Inventario.prototype.agregarProducto = function (producto) {
        if (this.productos.has(producto.nombre)) {
            var producExis = this.productos.get(producto.nombre);
            producExis.cantidad += producto.cantidad;
            console.log("".concat(producto.nombre, " Fue agregado exitosamente, ahora cuenta con ").concat(producto.cantidad, " existente. -u-"));
        }
        else {
            this.productos.set(producto.nombre, producto);
            console.log("".concat(producto.nombre, " ahora es parte de su inventarios"));
        }
    };
    Inventario.prototype.venderProducto = function (nombre, cantidadVend) {
        var producto = this.productos.get(nombre);
        if (producto) {
            if (producto.cantidad >= cantidadVend) {
                producto.cantidad -= cantidadVend;
                console.log("(̶◉͛‿◉̶) Venta realizada (̶◉͛‿◉̶)");
                console.log("".concat(cantidadVend, " ").concat(producto.nombre, " vendidos"));
            }
            else {
                console.log("( \u02D8\uFE39\u02D8 ) No hay existencias suficientes de ".concat(producto.nombre, " ( \u02D8\uFE39\u02D8 )"));
            }
        }
        else {
            console.log("\u00D3\u256D\u256E\u00D2 El producto ".concat(nombre, " no existe \u00D3\u256D\u256E\u00D2"));
        }
    };
    return Inventario;
}());
/*Crear inventario */
var invent = new Inventario();
/*Creacion de productos */
var product1 = new Producto("Pluma", 3, 100);
var product2 = new Producto("Colores", 25, 50);
var product3 = new Producto("Difuminador", 5, 20);
/*Agregar productos a inventario */
invent.agregarProducto(product1);
invent.agregarProducto(product2);
invent.agregarProducto(product3);
/*Mostrar inventario */
invent.mostrarInventario();
/*Vender productos */
invent.venderProducto("Difuminador", 5);
invent.venderProducto("Colores", 15);
/*Mostrar inventario despues de ventas */
invent.mostrarInventario();
/*Venta de producto que no existente */
invent.venderProducto("Cuaderno", 5);
