import Cart from "./scripts/Cart.js";
import Modal from "./scripts/Modal.js";
import Products from "./scripts/Products.js";

//Instance of Class
const products = new Products();
const modalClass = new Modal();
const cart = new Cart();

cart.setModel(products);

//Functions by path
const PATH = window.location.pathname;
document.addEventListener('DOMContentLoaded', () => {
    //If path is index
    renderDetailsProduct();

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
    const abrir = document.getElementById('btn-buy-now');
    const modal = document.getElementById('modal');
    const modalC = document.getElementById('modal-container');

    modalClass.functionsModal(cerrar, abrir, modal, modalC);

    //When add to cart is clicked
    const btnAddtoCart = document.getElementById('btn-add-cart');
    btnAddtoCart.addEventListener('click', e => { onClickAddCart() });

    //When a size is selected
    const sizes = document.getElementsByName('size');
    sizes.forEach(size => {
        size.addEventListener('click', e => { onSizeSelected(e) })
    });

    //When show cart is clicked
    const showCartBtn = document.getElementById('show-cart');
    showCartBtn.addEventListener('click', e => { showCart() })
    
}

const showCart = () => {
    //Modal:
    const modal = document.getElementById('modal');
    const modalC = document.getElementById('modal-container');
    cart.showModal(modal, modalC);
    cart.renderCart(modal);
}

const onSizeSelected = (e) => {
    const sizes = document.getElementsByName('size');
    sizes.forEach(size => {
        if (size.checked) {
            size.parentElement.classList.add('size-selected');
            size.parentElement.classList.remove('size-inactive');
        }else {
            size.parentElement.classList.add('size-inactive');
            size.parentElement.classList.remove('size-selected');
        }
    });
}

const onClickAddCart = () => {
    let params = new URLSearchParams(location.search);
    let idProduct = parseInt(params.get('idProduct'));
    if (isNaN(idProduct)) {
        idProduct = 1;
    }
    cart.addCart(idProduct);
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