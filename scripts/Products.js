export default class Products {

    constructor() {
        this.title = document.getElementById('main-name-article');
        this.price = document.getElementById('main-price-article');
        this.description = document.getElementById('main-text-description');
        this.divSizes = document.getElementById('sizes-select');
        this.divBigImages = document.getElementById('contenedor-2');
        this.divSmallImages = document.getElementById('contendor-1');
        this.divListProducts = document.getElementById('imagenes-opcion');
    }

    getProducts() {
        const products = [
            {
              id: 1,
              name: "Camiseta estilo zebra",
              price: 50000,
              description: "Camiseta  100% Algodón",
              images: [
                {
                  id: 1,
                  url: "https://images.unsplash.com/photo-1613591746786-4cc6e2e009a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNoaXJ0JTIwcG9sb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
                {
                  id: 2,
                  url: "https://images.unsplash.com/photo-1566786859080-6cffae6abf9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNoaXJ0JTIwcG9sb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
                {
                  id: 3,
                  url: "https://images.unsplash.com/photo-1604734028009-358d866d7c94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0JTIwemVicmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
              ],
              sizes: ["S", "M"],
            },
            {
              id: 2,
              name: "Camisa Slim Fit",
              price: 159900,
              description: "Camisa Slim Fit con botones",
              images: [
                {
                  id: 1,
                  url: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
                {
                  id: 2,
                  url: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                  description: "Foto del producto",
                },
                {
                  id: 3,
                  url: "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
                  description: "Foto del producto",
                },
              ],
              sizes: ["M", "L", "XL"],
            },
            {
              id: 3,
              name: "Chaqueta de plumas para hombre",
              price: 250000,
              description: "Una chaqueta ligera con aislamiento fabricada para mantenerte abrigado y ligero como una pluma",
              images: [
                {
                  id: 1,
                  url: "https://images.unsplash.com/photo-1610652604644-43951cd5edff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60e1",
                  description: "Foto del producto",
                },
                {
                  id: 2,
                  url: "https://images.unsplash.com/photo-1614031679232-0dae776a72ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
                {
                  id: 3,
                  url: "https://images.unsplash.com/photo-1602443276032-3dfd0f669041?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
              ],
              sizes: ["S", "M", "XL"],
            },
            {
              id: 4,
              name: "Saco de lana ",
              price: 142000,
              description: "Suéter elaborado en una delicada mezcla de lana alpaca con lana acrílica con tejito trenzado suave al tacto",
              images: [
                {
                  id: 1,
                  url: "https://images.unsplash.com/photo-1610901157620-340856d0a50f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3dlYXRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
                {
                  id: 2,
                  url: "https://images.unsplash.com/photo-1536992266094-82847e1fd431?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlYXRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
                {
                  id: 3,
                  url: "https://images.unsplash.com/photo-1610901157669-9c0fb8986f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                  description: "Foto del producto",
                },
              ],
              sizes: ["S", "M", "L"],
            },
        ];

        return products;
    }

    //Return details of a specific product
    getDetailsProduct(idProduct) {
        const products = this.getProducts()
        const [product] = products.filter( a => a.id === idProduct );
        return product;
    }

    //Show at view the details's product
    renderDetails(detailsProduct) {
        this.title.innerText = detailsProduct.name;
        this.price.innerText = `$ ${new Intl.NumberFormat().format(detailsProduct.price)}`;
        this.description.innerText = detailsProduct.description;

        //Show the sizes
        let sizes = '';
        detailsProduct.sizes.forEach(size => {
            sizes += `
            <span class="size size-inactive">${size}</span>
            `;
        });
        this.divSizes.innerHTML = sizes;

        //Show images photos
        let imagesSmall = '';
        let imagesBig = '';
        detailsProduct.images.forEach(image => {
            imagesSmall += `
            <div>
                <img class="img-small" src="${image.url}" alt="${image.description}">
            </div>
            `;
            imagesBig += `
            <div class="mySlides fade">
                <img class="img-big" src="${image.url}" alt="${image.description}">
            </div>
            `;
        });
        this.divBigImages.innerHTML = imagesBig;
        this.divSmallImages.innerHTML = imagesSmall;
    }

    renderListProducts() {
        const products = this.getProducts()
        let listProducts = '';
        products.forEach(product => {
            listProducts += `
            <div class="contenedor-product-list" key="${product.id}">
                <img class="img-list" src="${product.images[0].url}" alt="${product.images[0].description}">
                <h1 class="product-title-list">${product.name}</h1>
                <h1 class="product-title-list">$ ${new Intl.NumberFormat().format(product.price)}</h1>
            </div>
            `;
        });
        this.divListProducts.innerHTML = listProducts;
    }

}