import Products from "./scripts/Products.js";

//Instance of Class
const products = new Products();

//Functions by path
const PATH = window.location.pathname;
document.addEventListener('DOMContentLoaded', () => {
    //If path is index
    if(PATH === '/' || PATH === '/index.html') {
        renderDetailsProduct();
    }

})

//Show details's Product
const renderDetailsProduct = () => {
    let params = new URLSearchParams(location.search);
    const idProduct = parseInt(params.get('idProduct'));
    const detailsProduct = products.getDetailsProduct(idProduct);
    products.renderDetails(detailsProduct);

    //Render list products
    products.renderListProducts();
}