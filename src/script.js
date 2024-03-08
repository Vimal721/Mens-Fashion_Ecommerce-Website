// Scroll event
document.addEventListener('DOMContentLoaded', function () {
    var navHeight = 140; 
    
    var clothingButton = document.querySelector('.top-nav ul li:nth-child(2) a');
    var clothingSection = document.getElementById('clothing');

    var accessoriesButton = document.querySelector('.top-nav ul li:nth-child(3) a');
    var accessoriesSection = document.getElementById('accessories');

    var footerButton = document.querySelector('.top-nav ul li:nth-child(4) a');
    var footerSection = document.getElementById('footer');

    clothingButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        var sectionTop = clothingSection.offsetTop - navHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    });

    accessoriesButton.addEventListener('click', function (event) {
        event.preventDefault();
        var sectionTop = accessoriesSection.offsetTop - navHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    });

    footerButton.addEventListener('click', function (event) {
        event.preventDefault();
        var sectionTop = footerSection.offsetTop - navHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    });
});


// show cart toggle
const cartButton = document.querySelector(".cart-button");
const cartContainer = document.querySelector(".show-cart");
const closeCart = document.querySelector('.close-cart');

cartButton.addEventListener("click", function() {
    cartContainer.classList.toggle("show-cart-active");
});
closeCart.addEventListener("click", function() {
    cartContainer.classList.remove("show-cart-active");
});

// adding clothing and accessories products in showCart
document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.clothing-cart-btn, .accessories-cart-btn');
    const cartContainer = document.querySelector('.show-cart');
    const itemsAdded = document.getElementById('items-added');
    const cartTotal = document.querySelector('.cart-total');

    let itemCount = 0;
    let totalPrice = 0;
    const itemQuantities = {};

    // when add to cart button is clicked
    cartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const itemSection = button.closest('.clothing-list, .accessories-list');
            const itemName = itemSection.querySelector('.clothing-detail h3, .accessories-detail h3').textContent;
            const itemPriceString = itemSection.querySelector('.clothing-detail span, .accessories-detail span').textContent;
            const itemPrice = parseFloat(itemPriceString.replace('Rs ', ''));

            if (itemQuantities[itemName]) {
                itemQuantities[itemName]++;
            } else {
                itemQuantities[itemName] = 1;
            }

            itemCount++;
            itemsAdded.textContent = itemCount;

            totalPrice += itemPrice;
            cartTotal.textContent = totalPrice.toLocaleString();

            const existingCartItem = cartContainer.querySelector(`[data-item="${itemName}"]`);
            if (existingCartItem) {
                const itemQuantityElement = existingCartItem.querySelector('.item-num');
                itemQuantityElement.textContent = itemQuantities[itemName];
            } else {
                const itemBrand = itemSection.querySelector('.clothing-detail p, .accessories-detail p').textContent;
                const itemImageSrc = itemSection.querySelector('.clothing-list-item img, .accessories-list-item img').getAttribute('src');

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.setAttribute('data-item', itemName);
                cartItem.innerHTML = `
                    <div class="item-image">
                        <img src="${itemImageSrc}" alt="${itemName}">
                    </div>
                    <div class="item-details">
                        <div class="item-name">${itemName}</div>
                        <div class="item-brand">${itemBrand}</div>
                        <div class="item-price">${itemPriceString}</div>
                        <div class="item-quantity">
                            <div class="item-minus"> - </div>
                            <div class="item-num">${itemQuantities[itemName]}</div>
                            <div class="item-plus"> + </div>
                        </div>
                    </div>
                `;

                cartContainer.appendChild(cartItem);

                const itemMinus = cartItem.querySelector('.item-minus');
                const itemPlus = cartItem.querySelector('.item-plus');

                itemMinus.addEventListener('click', ()=>{
                    itemQuantities[itemName]--;
                    const itemQuantityElement = cartItem.querySelector('.item-num');
                    itemQuantityElement.textContent = itemQuantities[itemName];

                    if (itemQuantities[itemName] === 0) {
                        cartContainer.removeChild(cartItem);
                    }

                    itemCount--;
                    itemsAdded.textContent = itemCount;
                    
                    totalPrice -= itemPrice; 
                    cartTotal.textContent = totalPrice.toLocaleString();
                });

                itemPlus.addEventListener('click', ()=>{
                    itemQuantities[itemName]++;
                    const itemQuantityElement = cartItem.querySelector('.item-num');
                    itemQuantityElement.textContent = itemQuantities[itemName];

                    totalPrice += itemPrice; 
                    cartTotal.textContent = totalPrice.toLocaleString();
                });
            }
        });
    });
});
