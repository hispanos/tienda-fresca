import Products from "./scripts/Products.js";

//Instance of Class
const products = new Products();

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