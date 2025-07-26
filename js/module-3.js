// Оголоси змінну fruits. Надай змінній fruits наступне значення:
// масив фруктів - рядків "apple", "plum", "pear" і "orange".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

// const fruits = ['apple', 'plum', 'pear', 'orange'];
//******************************************************* */
// Оголоси три змінні і надай кожній змінній відповідне значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
//********************************************************************************************* */
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
//*********************************************** */

// Функція getOrderQuantity(order) приймає один параметр order
// - масив рядків, які описують продукти в замовленні клієнта. Доповни код функції таким чином, щоб вона повертала число,
// що дорівнює кількості елементів масиву.

// Оголошена функція getOrderQuantity(order)
// Виклик getOrderQuantity(["apple", "peach", "pear", "banana"]) повертає 4
// Виклик getOrderQuantity(["apple", "banana"]) повертає 2
// Виклик getOrderQuantity(["apple", "banana", "pear"]) повертає 3
// Виклик getOrderQuantity([]) повертає 0

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana', 'pear']));
// console.log(getOrderQuantity([]));
//******************************************************** */

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.Доповни код функції таким чином,
// щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
// Оголошена функція getLastElementMeta(array)
// Виклик getLastElementMeta(["apple", "peach", "pear", "banana"]) повертає [3, "banana"]
// Виклик getLastElementMeta(["apple", "peach", "pear"]) повертає [2, "pear"]
// Виклик getLastElementMeta(["apple", "peach"]) повертає [1, "peach"]
// Виклик getLastElementMeta(["apple"]) повертає [0, "apple"]

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastValue = array[lastIndex];
//   return [lastIndex, lastValue];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));
//************************************************************ */

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
// Доповни код функції таким чином, щоб вона повертала масив з двох елементів
//   - першого і останнього елементів параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];
//   return [firstElement, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
//****************************************************************************** */
// Функція getLength(array) очікує один параметр array - масив довільних значень.Доповни код функції так,
//     щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// Оголошена функція getLength(array)
// Виклик getLength(["Mango", "hurries", "to", "the", "train"]) повертає 22
// Виклик getLength(["M", "a", "n", "g", "o"]) повертає 5
// Виклик getLength(["top", "picks", "for", "you"]) повертає 14

// function getLength(array) {
//   const numbers = array.join('');
//   return numbers.length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));
//**************************************************************************************************** */
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
// залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок,
// що складається зі слів, розділених лише пробілами (параметр message) та другим параметром
// - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// function calculateEngravingPrice(message, pricePerWord) {
//   const letters = message.split(' ');
//   return letters.length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));
//************************************************************************ */

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

//***************************************************************************************** */

// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив,
//     що складається з усіх елементів масивів oldClients і newClients.Спочатку мають іти елементи з масива oldClients,
//         а потім з newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//********************************************************************* */

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
// Оголошена функція getSlice(array, value)
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає []
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає []

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   }
//   return array.slice(0, index + 1);
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));

//************************************************************************ */

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());
//************************************************************************************** */

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//******************************************************************************************* */

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.Доповни функцію так,
//   щоб вона повертала загальну суму елементів з масиву order.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([12, 85, 37, 4, 5, 6, 7, 8, 9]));

//************************************************************************************** */

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.Доповни код функції так,
//   щоб вона повертала масив усіх парних чисел від start до end.Якщо жодного парного числа немає, то масив має бути пустим.
//   Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл for.

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers(9, 9));

//**************************************************************************************** */

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені
// у масиві ["apple", "plum", "pear"].

// Оголошена функція checkStorage(storage, item)
// Виклик checkStorage(["apple", "plum", "pear"], "plum") повертає "plum is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "pLuM") повертає "plum is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "pear") повертає "pear is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "pEAr") повертає "pear is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "orange") повертає "Sorry! We are out of stock!"
// Виклик checkStorage(["apple", "plum", "pear"], "carrot") повертає "Sorry! We are out of stock!"

// function checkStorage(storage, item) {
//   const normalizadeItem = item.toLowerCase();
//   if (storage.includes(normalizadeItem)) {
//     return `${normalizadeItem} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));

//***************************************************************************************** */

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають
// ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2)
// довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив

// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements());

//************************************************************************************ */

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

//********************************************************************************* */

// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (number of order) {
//     total += number;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice());

//*************************************************************************** */

// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
//   Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].
//   Використовуй цикл або метод масиву toReversed(), який застосовується до масиву
//   і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// Оголошена функція createReversedArray()
// Виклик функції createReversedArray(12, 85, 37, 4) повертає [4, 37, 85, 12]
// Виклик функції createReversedArray(164, 48, 291) повертає [291, 48, 164]
// Виклик функції createReversedArray(412, 371, 94, 63, 176) повертає [176, 63, 94, 371, 412]
// Виклик функції createReversedArray() повертає []

// function createReversedArray() {
//   const argsArray = Array.from(arguments);
//   return argsArray.reverse();
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());

//***************************************************************************************** */

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// Оголошена функція calculateTax(amount, taxRate)
// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20
// Виклик функції calculateTax(200, 0.2) повертає 40
// Виклик функції calculateTax(100, 0.3) повертає 30
// Виклик функції calculateTax(200, 0.3) повертає 60
// Виклик функції calculateTax(100) повертає 20
// Виклик функції calculateTax(200) повертає 40

// function calculateTax(amount, taxRate = 0.2) {
//   let total = amount * taxRate;
//   return total;
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(200, 0.2));
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(200, 0.3));
// console.log(calculateTax(100));
// console.log(calculateTax(200));

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));

// const courses = ['HTML', 'CSS', 'JavaScript', 'React'];
// const str = courses.join(' ');

// console.log(str);

// const array = str.split('-');
// console.log(array);

// const slice = courses.slice(0, 2);
// console.log(slice);

// const newArray = courses.concat(['CSS', 'Java']);
// console.log(newArray);

// const courses = ['JS', 'CSS', 'React', 'React'];
// const value = courses.indexOf('React');
// console.log(value);

// const courses = ['JS', 'HTML'];
// courses.push(1);
// console.log(courses);

// const courses = ['JS', 'HTML'];
// const deletedValue = courses.pop();
// console.log(deletedValue);
// console.log(courses);

// const array = ['JS', 'HTML', 'CSS'];
// for (let i = 0; i < array.length; i++) {
//   console.log(`${i}-${array[i]}`);
// }

// const array = ['JS', 'HTML', 'CSS'];

// const item = array.includes('JS');
// console.log(item);
// const array = ['JS', 'HTML', 'CSS'];
// for (const value of array) {
//   console.log(value);
// }

//********************************************************************* */
// Напиши скрипт для обчислення  площі зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = '8 11';

// const arr = values.split(' ');
// const res = arr[0] * arr[1];
// console.log(res);

// const values = '8 11';
// const arr = values.split(' ');

// const res = (Number(arr[0]) + +Number(arr[1])) * 2;

// console.log(res);

//******************************************************************************** */

//Напиши скрипт для перебору масиву fruits.
//Для кожного елемента масиву виведи в консоль рядок
//у форматі номер_елемента: значення_елемента.
//Нумерація елементів повинна починатися з 1.

// const fruits = ['apple', 'grapes', 'orange', 'banana', 'lemon'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

//********************************************************************************** */

//Напиши скрипт, який підрахує суму всіх парних чисел у масиві.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (const number of numbers) {
//   if (!(number % 2)) {
//     total += number;
//   }
// }
// console.log(total);

//**************************************************************************************** */

// Напиши скрипт, який виводить у консоль ім'я та телефонний номр користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів.
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001234568,89001234569,89001234560';
// const arrayNames = names.split(',');
// const arrayPhones = phones.split(',');
// for (let i = 0; i < arrayNames.length; i++) {
//   console.log(`${arrayNames[i]} : ${arrayPhones[i]}`);
// }

//******************************************************************** */

// Напиши скрипт який виводить у консоль усі слова рядка
// крім першого і останнього. Результуючий рядок не повинен починатися
// або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь якого рядка

// const string = '   Welcome to the java future';
// const arr = string.trim().split(' ');
// const result = arr.slice(1, -1).join(' ').trim();
// console.log(result);

//************************************************************************************************** */

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
//для будь якого масиву чисел.Використовуй цикл для розв'язання задачі.

// const values = [2, 17, 94, 1, 23, 37];
// let min;
// for (let i = 0; i < values.length; i++) {
//   if (i === 0) {
//     min = values[i];
//   } else if (values[i] < min) {
//     min = values[i];
//   }
//   //   if (values[i] < min) {
//   //     min = values[i];
//   //   }
// }
// console.log(min);

// const values = [2, 17, 94, 1, 23, 37];
// let min;
// for (const number of values) {
//   min = number > min ? min : number;
// }

// console.log(min);

//*************************************************************************** */

//task1

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function slugify(title) {
//   return title.split(' ').join('-').toLowerCase();
// }

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
//************************************************************** */

// task 2

// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray(масив),
//     secondArray(масив) і maxLength(число).
//     Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength,
//     функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else return newArray;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
//*************************************************************************************** */

// task 3

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(numbers) та значення(value) як параметри.
// Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
