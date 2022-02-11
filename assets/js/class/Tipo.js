import Animal from "./Animal.js"

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    //* Definimos el metodo rugir, para el leon
    Rugir(){
        let sonido = this.getSonido();
        this.getSonido() //todo, pendiente de agregar el metodo sonido
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar(){
        let sonido = this.getSonido();
        this.getSonido() //todo, pendiente de agregar el metodo sonido
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Gruñir(){
        let sonido = this.getSonido();
        this.getSonido() //todo, pendiente de agregar el metodo sonido
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear(){
        let sonido = this.getSonido();
        this.getSonido() //todo, pendiente de agregar el metodo sonido
    }

}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
}
    Chillar(){
        let sonido = this.getSonido();
        this.getSonido() //todo, pendiente de agregar el metodo sonido
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila}