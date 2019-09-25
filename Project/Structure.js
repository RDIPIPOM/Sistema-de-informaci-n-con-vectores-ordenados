import Product from "./Product.js";

export default class Structure {
    constructor(struture = new Array(), tagArticle) {
        this._structure = struture;
        this._tagArticle = tagArticle;
        this._counterID = 1;
    }

    get struture() {
        return this._structure;
    }

    get counterID() {
        return this._counterID;
    }

    add(position, name, cost, stock, description) {
        if (position === '' || position === (this._structure.length + 1).toString()) {
            this._structure.push(new Product(this._counterID, name, cost, stock, description));
            this._counterID++;
            alert('Producto agregado correctamente');
        } else if (parseInt(position) > 0 && parseInt(position) < this._structure.length) {
            for (let i = this._structure.length; i >= parseInt(position); i--) {
                this._structure[i] = this._structure[i - 1];
            }
            this._structure[parseInt(position) - 1] = new Product(this._counterID, name, cost, stock, description);
            this._counterID++;
            alert('Producto agregado correctamente');
        } else
            alert('Posicion no válida');
    }

    query(code) {
        code = parseInt(code);
        let productFound = '';
        if (this._isCodeExist(code)) {
            this._structure.forEach(product => {
                if (product.code === code) {
                    productFound = product;
                    return;
                }
            });
        } else {
            alert('No se ha podido encontrar el producto');
        }

        return productFound;
    }

    delete(code) {
        code = parseInt(code);
        if (this._isCodeExist(code)) {
            if (code != this.struture.length) {
                for (let i = code - 1; i < this._structure.length - 1; i++) {
                    this._structure[i] = this._structure[i + 1];
                }
                this._structure.pop();
            } else
                this._structure.pop();
            alert('Se ha eliminado el producto correctamente');
        } else {
            alert('El código ingresado no existe, por favor verifique de nuevo');
        }
    }

    _isCodeExist(code) {
        let exist = false;
        for (let i = 0; i < this._structure.length; i++) {
            if (this._structure[i].code === code) {
                exist = true;
                break;
            }
        }

        return exist;
    }

    createReport() {//duda, preguntar si esta funcion debería ir aquí o en el main
        this._tagArticle.innerHTML = '';
        let tagP = new Array();
        //Make tags P
        for (let i = 0; i < this._structure.length; i++) {
            tagP[i] = document.createElement('p');
        }

        for (let i = 0; i < this._structure.length; i++) {
            tagP[i].innerHTML = this._structure[i].toString();
            this._tagArticle.appendChild(tagP[i]);
        }
    }
}