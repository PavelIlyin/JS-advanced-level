class CartItem extends ProductItem {
  //те же данные
  constructor(product, img='https://placehold.it/200x150') {
     super (this.title, this.price, this.id, this.img = img) 
  }
 
  // внешний вид может измениться, добавиться счетчик товаров
  render() {}

}

class CartList {

  constructor() {
      // В классе корзины массив с добавленными товарами
      this.addGoods = [];
      this.deletedGoods = []; // товары, которые были удалены из корзины, чтобы быстро вернуть в список если передумал
  }
  
  // Добавление товара в корзину 
  addProductInCart() {}

  // Удаление товара из корзины 
  deleteProductOffCart() {}

  // Cтоимость всех товаров в корзине
  tottalPriceCart() {}

  // Количество товаров в корзине
  countPriceCart() {}

  // Меняем количество товаров в корзине
  changeCount() {}

  // Определяем, добавлены ли в корзину какие-либо товары и при их наличии активирует кнопку "Оформить заказ"
  isOrder() {}
 
  // Динамическое содержимое корзины
  #render() {}

  // Очистка корзины
  clearCart() {}
  
  // Применение промокода со скидкой
  getTotalWithDiscount() {}

}