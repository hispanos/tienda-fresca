export default class Cart {

    constructor() {
        this.model = '';
        //Get the cart from LocalStorage
        this.cart = JSON.parse(localStorage.getItem('cart'));
        //If don't exist create the object
        if (!this.cart || this.cart.length < 1) {
            this.cart = {
                quantity: 0,
                total: 0,
                items: []
            }
        }
    }

    setModel(model) {
        this.model = model;
    }

    addCart(idProduct) {
        const details = this.model.getDetailsProduct(idProduct);
        const sizes = document.getElementsByName('size');
        let sizeSelected = 'No definido'
        sizes.forEach(size => {
            if (size.checked) {
                sizeSelected = size.value;
            }
        });
        const quantityProduct = parseInt(1, 10);
        let item = {};
         //If the cart has products actually
         if (Array.isArray(this.cart.items) && this.cart.items.length) {
            //Search at the cart the product by ProductId received by param
            const element = this.cart.items.filter(i => i.idProduct === idProduct);

            //If this product exist at cart, updated this quantity and subtotal
            if (Array.isArray(element) && element.length) {
                element[0].quantity += parseInt(quantityProduct, 10);
                element[0].subtotal += parseInt(quantityProduct, 10) * parseInt(details.price, 10);

            //If product don't exist at cart, create a object Item
            }else {
                item = {
                    idProduct: details.id,
                    nameProduct: details.name,
                    image: details.images[0].url,
                    price: parseInt(details.price, 10),
                    quantity: parseInt(quantityProduct, 10),
                    subtotal: parseInt(quantityProduct, 10) * parseInt(details.price, 10),
                    size: sizeSelected
                };
                //Add the object to array cart.items
                this.cart.items.push(item);
            }

        // If the cart is empty, create a object Item and insert to array cart.items
        }else {
            item = {
                idProduct: details.id,
                nameProduct: details.name,
                image: details.images[0].url,
                price: parseInt(details.price, 10),
                quantity: parseInt(quantityProduct, 10),
                subtotal: parseInt(quantityProduct, 10) * parseInt(details.price, 10),
                size: sizeSelected
            };
            this.cart.items.push(item);
        }

        //Update the object with total and quantitys
        this.cart.quantity += parseInt(quantityProduct, 10);
        this.cart.total += parseInt(quantityProduct, 10) * parseInt(details.price, 10);
        
        //Save at localstorage the cart object.
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    showModal(modal, modalC) {
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    }

    renderCart(modal) {
        modal.innerHTML = '';
        let rowCart = '';
        this.cart.items.forEach(product => {
            rowCart += `
            <tr>
                <td class="colum-cart">${product.nameProduct}</td>
                <td class="colum-cart">${product.quantity}</td>
                <td class="colum-cart">${product.price}</td>
                <td class="colum-cart">${product.subtotal}</td>
            </tr>
            `
        });
        let HTML = `
        <div class="container-table-cart">
            <table class="table-cart">
                <tbody>
                    <tr>
                        <th class="colum-cart">Producto</th>
                        <th class="colum-cart">Cantidad</th>
                        <th class="colum-cart">Precio</th>
                        <th class="colum-cart">SubTotal</th>
                    </tr>
                </tbody>
                ${rowCart}
                <tfoot>
                    <tr>
                        <td colspan="3">Total</td>
                        <td>${this.cart.total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        `;
        modal.innerHTML = HTML;
    }

}