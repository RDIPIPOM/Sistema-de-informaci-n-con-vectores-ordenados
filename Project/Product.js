export default class Product{
    constructor(code, name, cost, stock, description){
        this._code = code;
        this._name = name;
        this._cost = cost;
        this._stock = stock;
        this._description = description;
    }

    get code(){
        return this._code;
    }

    get name(){
        return this._name;
    }

    get cost(){
        return this._cost;
    }

    get stock(){
        return this._stock;
    }

    get description(){
        return this._description;
    }

    toString(){
        return '////Código: ' + this._code + '***Nombre: ' + this._name + '***Precio: $' + this._cost + '***Cantidad: ' + this._stock + '***Descripción: ' + this._description + '////';
    }
}