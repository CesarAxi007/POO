var Gatos = /** @class */ (function () {
    function Gatos(name, sex, age, weight, color, texture) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }
    Gatos.prototype.mostrarDatos = function () {
        console.log("Name: ".concat(this.name));
        console.log("Sex: ".concat(this.sex));
        console.log("Age: ".concat(this.age));
        console.log("Weight: ".concat(this.weight));
        console.log("Color: ".concat(this.color));
        console.log("Texture: ".concat(this.texture));
    };
    return Gatos;
}());
var gatoUno = new Gatos('Oscar', "Macho", 3, 7, 'Marron', "Rayado");
var gatoDos = new Gatos('Luna', "Hembra", 2, 5, 'Gris', "Lisa");
gatoUno.mostrarDatos();
console.log("_________________________________________-");
gatoDos.mostrarDatos();
