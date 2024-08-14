const burgerIcon = document.getElementById('burger-icon');
const burgerMenu = document.getElementById('nav-links');

const productsElem = document.querySelectorAll('.product');
const productViewer =  document.querySelector('.product-viewer')
const productContainer =  document.querySelector('.products-container')
const productViewerCloser =  document.querySelector('.cross')


burgerIcon.addEventListener('click',() => {
    burgerMenu.classList.toggle('active');
})

const products = [
    {
        name: 'RAPTOR 1',
        type: 'engine',
        description: 'Raptor 1 is a rocket engine that helps rocket to blah blah',
        price: 50,
        image_path : "media/DreamShaper_v6_a_weather_balloon_in_dark_space_vector_styled_1.png",
        id:1,
        available: true,
    },
    {
        name: 'RAPTOR 2',
        type: 'engine',
        description: 'Raptor 2 is a rocket engine that helps rocket to blah blah',
        price: 100,
        image_path : "media/DreamShaper_v6_a_weather_balloon_in_dark_space_vector_styled_1.png",
        id:2,
        available: true,
    },
    {
        name: 'RAPTOR 3',
        type: 'engine',
        description: 'Raptor 3 is a rocket engine that helps rocket to blah blah',
        price: 150,
        image_path : "media/DreamShaper_v6_a_weather_balloon_in_dark_space_vector_styled_1.png",
        id:3,
        available: false,
    },
    {
        name: 'ABC-II',
        type: 'parachute',
        description: 'ABC-II is a rocket parachute that helps it to blah blah',
        price: 10,
        image_path : "media/DreamShaper_v6_a_weather_balloon_in_dark_space_vector_styled_1.png",
        id:4,
        available: true,
    },
];

const RenderProducts = (products, container) => {
    products.forEach(product => {
        let newProductElem = document.createElement('div');
        newProductElem.classList.add('product');
        newProductElem.id = product.id;
        let productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.setAttribute('src', product.image_path);
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        let productTitle = document.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.innerText = product.name;
        productType = document.createElement('p');
        productType.innerText = "product type : ";
        productTypeSpan = document.createElement('span');
        productTypeSpan.classList.add('product-type');
        productTypeSpan.innerText = product.type;

        productType.append(productTypeSpan);
        productInfo.append(productTitle, productType);
        newProductElem.append(productImg, productInfo);
        container.appendChild(newProductElem);

        newProductElem.addEventListener('click', () => {
            enableViewer(product.name, product.type, product.description, product.price, product.image_path, product.available);
        })

    })
}
RenderProducts(products,productContainer);


// productsElem.forEach(product => {
//     product.addEventListener('click', (e) => {
//         productViewer.classList.add('active');
//         console.log(e.target.id);
//     })
// })

const enableViewer = (productTitle, productType, productDesc, productPrice, productImg, stockStatus) => {
    let title = document.querySelector('.Vtitle');
    title.innerText = productTitle;
    let desc = document.querySelector('.Vdesc');
    desc.innerText = productDesc;
    let price = document.querySelector('.Vprice');
    price.innerText = "$" + productPrice;
    let type = document.querySelector('.Vtype');
    type.innerText = productType;
    let img = document.querySelector('.Vimg')
    let status = document.querySelector('.Vstatus')
    img.src = productImg;
    if(stockStatus == false){
        status.innerText = "out of stock";
        status.classList.add('unavailable');
    } else {
        status.innerText = "available";
        status.classList.remove('unavailable');
    }
    productViewer.classList.add('active');
}

productViewerCloser.addEventListener('click', () => {
    productViewer.classList.remove('active');
})

// products