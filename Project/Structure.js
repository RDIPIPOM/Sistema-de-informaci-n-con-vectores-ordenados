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
            return true;
        } else
            return false;
    }

    query(code) {
        let index = this._searchIndexByCode(code);
        if (index === -1)
            return this._structure[index];
        else
            return -1;
    }

    delete(code) {
        this._top--;
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
}