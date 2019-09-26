import Structure from "./Structure.js";
import Product from "./Product.js";

var inventory = new Structure(new Array(20));
var tagArticle = document.querySelector('#articleReport');

//Button Add
document.querySelector('#btnAdd').addEventListener('click', () => {
    let code = Number(document.querySelector('#code').value);
    let name = document.querySelector('#name').value;
    let cost = Number(document.querySelector('#cost').value);
    let stock = Number(document.querySelector('#stock').value);
    let description = document.querySelector('#description').value;

    if (!inventory.add(new Product(code, name, cost, stock, description)))
        alert('El código ya existe, por favor ingrese otro');
});
//Button query
document.querySelector('#btnQuery').addEventListener('click', () => {
    let tagDiv = document.querySelector('#productFound');
    let code = Number(document.querySelector('#queryByCode').value);

    tagDiv = inventory.query(code).toString();
});
//Button delete
document.querySelector('#btnDelete').addEventListener('click', () => {
    let code = Number(document.querySelector('#deleteByCode').value);
    if (inventory.delete(code))
        alert('Producto eliminado correctamente');
    else
        alert('Producto no encontrado');
});
//Button create report
document.querySelector('#btnCreateReport').addEventListener('click', () => {
    tagArticle.innerHTML = '';
    for (let i = 0; i < inventory.top + 1; i++) {
        let tagP = document.createElement('p');
        tagP.innerHTML = inventory.structure[i].toString();
        tagArticle.appendChild(tagP);
    }
});