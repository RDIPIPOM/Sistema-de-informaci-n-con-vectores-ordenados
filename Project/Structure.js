import Product from "./Product.js";

export default class Structure {
    constructor(struture = new Array()) {
        this._structure = struture;
        this._top = -1;
    }

    get structure() {
        return this._structure;
    }

    get top() {
        return this._top;
    }

    add(objProduct) {
        if (this._searchIndexByCode(objProduct.code) === -1) {
            this._structure[this._top + 1] = objProduct;
            this._top++;
            this._sortArray(this._structure);
            return true;
        } else
            return false;
    }

    query(code) {
        let index = this._searchIndexByCode(code);
        if (index != -1)
            return this._structure[index];
        else
            return -1;
    }

    delete(code) {
        let position = this._searchIndexByCode(code);
        if (position != -1) {
            for (let i = position; i < this._top; i++) {
                this._structure[i] = this._structure[i + 1];
            }
            this._structure[this._top] = undefined;
            this._top--;
            this._sortArray(this._structure);
            return true;
        } else
            return false;
    }

    _searchIndexByCode(code) {
        if (this._top > 0) {
            let min = 0, max = this._top, position = -1, mediumPosition;
            let count = 0;
            while (position === -1 && count < 15 && mediumPosition != 0) {
                mediumPosition = Math.trunc((max + min) / 2);
                if (mediumPosition != 0) {
                    if (code < this._structure[mediumPosition].code)
                        max = mediumPosition - 1;
                    else if (code > this._structure[mediumPosition].code)
                        min = mediumPosition + 1;
                    else
                        position = mediumPosition;
                } else {
                    if (this._structure[max].code === code)
                        position = max;
                    else if (this._structure[min].code === code)
                        position = min;
                }
                count++;
            }
            return position;

        } else if (this._top === 0) {
            if (this._structure[0].code === code)
                return 0;
            else
                return -1;
        } else
            return -1;
    }

    _sortArray(array){
        array.sort(function (element1, element2){
            return (element1.code - element2.code)
        })
    }
}