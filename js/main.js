const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => 
    `<div class="products__item">
        <h3 class="products__header">${title}</h3>
        <p class="products__text">${price}</p>
        <button class="products__by-btn">Добавить в корзину</button>
    </div>`;


// Первичный код с улучшениями:

//const renderProducts = list => {
//    const productList = list.map( item => renderProduct(item.title, item.price)
//    );

//    document.querySelector('.products').innerHTML = productList;
//}

//renderProducts(products);


let productEl = document.querySelector('.products');

products.forEach(function(item) {
    productEl.insertAdjacentHTML("beforeend", renderProduct(item.title, item.price))
});