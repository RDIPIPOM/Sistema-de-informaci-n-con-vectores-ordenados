import Structure from "./Structure.js";

var inventory = new Structure(new Array(), document.querySelector('#articleReport'));

//Button Add
document.querySelector('#btnAdd').addEventListener('click', () => {
    let position = document.querySelector('#position').value;
    let name = document.querySelector('#name').value;
    let cost = document.querySelector('#cost').value;
    let stock = document.querySelector('#stock').value;
    let description = document.querySelector('#description').value;

    inventory.add(position, name, cost, stock, description);
    document.querySelector('#code').value = inventory.counterID;
});
//Button query
document.querySelector('#btnQuery').addEventListener('click', () => {
    let product = inventory.query(document.querySelector('#queryByCode').value);
    document.querySelector('#productFound').innerHTML = product;
});
//Button delete
document.querySelector('#btnDelete').addEventListener('click', () => {
    inventory.delete(document.querySelector('#deleteByCode').value);
    document.querySelector('#code').value = inventory.counterID;
});
//Button create report
document.querySelector('#btnCreateReport').addEventListener('click', () => {
    inventory.createReport();
});