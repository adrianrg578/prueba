class Nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class Lista_simple{
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.tamanio = 0;
    }

    agregar(dato){
        let nuevo = new Nodo(dato);
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = this.primero;
            this.tamanio++;
        }else {
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
            this.tamanio++;
        }
    }

    mostrar(){
        var valores = []
        let aux = this.primero;
        while (aux != null){
            valores.push(aux.dato);
            console.log("Dato: ", aux.dato);
            aux = aux.siguiente;
        }
        return valores;
    }
}
module.exports = Lista_simple;