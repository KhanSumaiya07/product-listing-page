const productsData = {
    title: "Recommendation for you",
    isAddToCartShow: true,
    numberOfProducts: 9,
    products: [
        {
            id: 1,
            image: "https://www.chanel.com/images/w_0.51,h_0.51,c_crop/f_jpg,w_512,h_512/coco-mademoiselle-eau-de-parfum-spray-3-4fl-oz--packshot-default-116520-9539148054558.jpg",
            name: "itari",
            price: "₹539",
            description: "women paris eau de perfume",
            btnText: "Add to cart",
        },
        {
            id: 2,
            image: "https://bellavitaluxury.co.in/cdn/shop/files/1_402bde70-7bac-4e1f-a698-a374f6d5f12a.jpg?v=1714555988",
            name: "Bella Vita Organic",
            price: "₹539",
            description: "women paris eau de perfume",
            btnText: "Add to cart",
        },
        {
            id: 3,
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22364340/2024/6/10/70c8492d-499e-4f41-81fb-38dc5fbe34ae1717998670012-Bella-Vita-Organic-Date-Woman-Eau-De-Parfum---100-ml-5951717-1.jpg",
            name: "Bella Vita Organic",
            price: "₹539",
            description: "Date women eau de perfume",
        },
        {
            id: 3,
            image: "https://assets.ajio.com/medias/sys_master/root/20210216/cj4M/602ae0fd7cdb8c1f14413f6d/-473Wx593H-4914750230-multi-MODEL.jpg",
            name: "YVES ROCHER",
            price: "₹539",
            description: "Comme Une Evidence L'Eau De Perfume 100 ml",
        },
        {
            id: 4,
            image: "https://f.nooncdn.com/p/pzsku/Z5EBF51FD3F8B5A66EDD6Z/45/_/1698987753/40fa1c0f-be19-4c2f-8b3f-63ae26077046.jpg?format=jpg&width=310",
            name: "YVES ROCHER",
            price: "₹539",
            description: "Comme Une Evidence L'Eau De Perfume 100 ml",
        },
        {
            id: 4,
            image: "https://m.media-amazon.com/images/I/61rCL6ydFHL._SX679_.jpg",
            name: "YVES ROCHER",
            price: "₹539",
            description: "Comme Une Evidence L'Eau De Perfume 100 ml",
        },
        {
            id: 5,
            image: "https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750",
            name: "YVES ROCHER",
            price: "₹539",
            description: "Comme Une Evidence L'Eau De Perfume 100 ml",
        },
        {
            id: 6,
            image: "https://aemon.co.uk/11933-medium_default/lancome-idole-eau-de-parfum-5ml.jpg",
            name: "YVES ROCHER",
            price: "₹539",
            description: "Comme Une Evidence L'Eau De Perfume 100 ml",
        },
        {
            id: 7,
            image: "https://www.testerparfum.com/resimler/urunler/1024x1024/2_boucheron-ambre-d-39-alexandrie-edp-outlet-unisex-parfum-125-ml-375_3.jpg",
            name: "YVES ROCHER",
            price: "₹539",
            description: "Comme Une Evidence L'Eau De Perfume 100 ml",
        },
        {
            id: 8,
            image: "https://aemon.co.uk/11933-medium_default/lancome-idole-eau-de-parfum-5ml.jpg",
            name: "YVES ROCHER",
            price: "₹539",
            description: "Comme Une Evidence L'Eau De Perfume 100 ml",
        },

    ]
};


function displayProducts(productsData) {
    const productList = document.querySelector("#products-container");
    const productsHTML = productsData.products.slice(0, productsData.numberOfProducts).map(product => `
        <div class="product-card" id="product-${product.id}">
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="price">
                    <span>${product.price}</span>
                    <span> <strike>₹899</strike></span>
                </div>
                <div class="cart-button">
                ${productsData.isAddToCartShow ? `<button><i class="ri-shopping-cart-fill"></i></button>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    productList.innerHTML = productsHTML;
}

displayProducts(productsData);


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#products-container');
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');
    const scrollAmount = 270;
    leftButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    const titleInput = document.getElementById('title');
    const titleHeading = document.querySelector('.heading');
    const fontSizeSelect = document.querySelector("#font-size-select");

    const fontSizeOptions = {
        small: "24px",
        medium: "28px",
        large: "32px"
    };

    // Retrieve value from localStorage if available
    const savedTitle = localStorage.getItem('userTitle');
    const savedFontSize = localStorage.getItem('userFontSize');
    if (savedTitle) {
        titleInput.value = savedTitle;
        titleHeading.textContent = savedTitle;
    }
    if (savedFontSize) {
        titleHeading.style.fontSize = fontSizeOptions[savedFontSize];
        fontSizeSelect.value = savedFontSize;
    }
    console.log(savedFontSize);

    // Event listener for input changes
    titleInput.addEventListener('input', function () {
        const titleValue = titleInput.value; // Get the current value of the input
        titleHeading.textContent = titleValue; // Update the heading text
        localStorage.setItem('userTitle', titleValue); // Store in localStorage
    });

    // Event listener for font size changes
    fontSizeSelect.addEventListener('change', function () {
        const selectedFontSize = fontSizeSelect.value;
        console.log(selectedFontSize);
        titleHeading.style.fontSize = fontSizeOptions[selectedFontSize];
        localStorage.setItem('userFontSize', selectedFontSize); // Store in localStorage
    });


});

