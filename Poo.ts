
class Gatos {
    name: string
    sex: string
    age: number
    weight: number
    color: string
    texture: string
    
    constructor(name: string, sex: string, age: number, weight: number, color: string, texture: string) {
        this.name = name
        this.sex = sex
        this.age = age
        this.weight = weight
        this.color = color
        this.texture = texture
    }

    mostrarDatos(): void {
        console.log(`Name: ${this.name}`)
        console.log(`Sex: ${this.sex}`)
        console.log(`Age: ${this.age}`)
        console.log(`Weight: ${this.weight}`)
        console.log(`Color: ${this.color}`)
        console.log(`Texture: ${this.texture}`)
    }
}


const gatoUno = new Gatos('Oscar', `Macho`, 3, 7, 'Marron', `Rayado`)
const gatoDos = new Gatos('Luna', `Hembra`, 2, 5, 'Gris', `Lisa`)

gatoUno.mostrarDatos()
console.log("_________________________________________-")
gatoDos.mostrarDatos()
