import Modal from "./scripts/Modal.js";
import Products from "./scripts/Products.js";

//Instance of Class
const products = new Products();
const modalClass = new Modal();

//Functions by path
const PATH = window.location.pathname;
document.addEventListener('DOMContentLoaded', () => {
    //If path is index
    if(PATH === '/' || PATH === '/index.html' || PATH === '/tienda-fresca' || PATH === '/tienda-fresca/index.html') {
        renderDetailsProduct();
    }

})

//Show details's Product
const renderDetailsProduct = () => {
    let params = new URLSearchParams(location.search);
    let idProduct = parseInt(params.get('idProduct'));
    if (isNaN(idProduct)) {
        idProduct = 1;
    }
    const detailsProduct = products.getDetailsProduct(idProduct);
    products.renderDetails(detailsProduct);

    //Render list products
    products.renderListProducts();

    //Event click over list products
    const divListProducts = document.querySelectorAll('.contenedor-product-list');
    divListProducts.forEach(div => {
        div.addEventListener('click', (e) => { onClickProduct(e) })
    });

    //Modal:
    const cerrar = document.querySelectorAll(".close")[0];
    const abrir = document.getElementById('btn-add-cart');
    const modal = document.getElementById('modal');
    const modalC = document.getElementById('modal-container');

    modalClass.functionsModal(cerrar, abrir, modal, modalC);
    
}

const onClickProduct = (e) => {
    let idProduct = '';
    if (e.target.getAttribute('key')) {
        idProduct = e.target.getAttribute('key');
    }else {
        idProduct = e.target.parentElement.getAttribute('key');
    }

    window.location.href = `?idProduct=${idProduct}`;
}