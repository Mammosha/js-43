//todo Коллбек функции
/*
 * createProduct(obj, callback) - принимает объект товара без id, а также коллбек. Функция создаёт объект товара, добавляя ему уникальный идентификатор в свойство id и вызывает коллбек передавая ему созданный объект.
 * logProduct(product) - коллбек принимающий объект продукта и логирующий его в консоль
 * logTotalPrice(product) - коллбек принимающий объект продукта и логирующий общую стоимость товара в консоль
 *
 */

// function createProduct(object, callback) {
//     const product = {
//         id: Date.now(),
//         ...object,
//     };

//     return callback(product);
// }

// function logProduct(element) {
//     console.log(element);
// }

// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
// }

// const createProduct = (object, callback) => {
//     const product = {
//         id: Date.now(),
//         ...object,
//     };

//     return callback(product);
// };

// const logProduct = element => console.log(element);

// const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);

// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
