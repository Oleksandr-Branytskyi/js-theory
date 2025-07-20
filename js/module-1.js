// Використовуючи два console.log() напиши код, який виведе в консоль інструментів розробника два значення: рядок "Jacob Mercer" та число 26.

// У коді є два console.log()
// Перший console.log() виводе рядок "Jacob Mercer"
// Другий console.log() виводе число 26

// console.log('Jacob Mercer');
// console.log(26);

// За допомогою ключового слова const оголоси дві змінні: productName - для зберігання назви товару, pricePerItem - для зберігання ціни за одиницю товару.

// При оголошенні змінних надай їм наступні значення:

// назва товару - рядок "Droid";
// ціна за одиницю товару - число 2000.
// Оголошена змінна productName
// Змінна productName оголошена за допомогою const
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Змінна pricePerItem оголошена за допомогою const
// Значення змінної pricePerItem - це число 2000

// const productName = 'Droid';
// const pricePerItem = 2000;

// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// Змінна pricePerItem оголошена за допомогою let
// При оголошенні змінної pricePerItem присвоєно значення — число 2000
// Змінній pricePerItem присвоєно нове значення — число 3500
// Змінна productName оголошена за допомогою let
// При оголошенні змінної productName присвоєно значення — рядок "Droid"
// Змінній productName присвоєно нове значення — рядок "Repair droid"

// let productName = 'Droid';
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem = 3500;

// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160
// distance - число 617.54
// login - рядок "mango935"
// isOnline - буль true
// isAdmin - буль false
// Оголошена змінна topSpeed
// Значення змінної topSpeed - це число 160
// Оголошена змінна distance
// Значення змінної distance - це число 617.54
// Оголошена змінна login
// Значення змінної login - це рядок "mango935"
// Оголошена змінна isOnline
// Значення змінної isOnline - це буль true
// Оголошена змінна isAdmin
// Значення змінної isAdmin - це буль false

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну за одиницю товару, а orderedQuantity - кількість одиниць товару в замовленні.

// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 3500
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 4
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 14000
// Використаний оператор *

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

// Заміни у виразах стандартні математичні оператори на комбіновані оператори присвоєння з додаванням, відніманням, множенням і діленням відповідно.

// Значення змінної a дорівнює 7
// Використаний оператор +=
// Значення змінної b дорівнює 6
// Використаний оператор -=
// Значення змінної c дорівнює 45
// Використаний оператор *=
// Значення змінної d дорівнює 2
// Використаний оператор /=

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// Оголоси змінну message. Використовуючи конкатенацію рядків, задай їй наступне значення — рядок привітання користувача зі зверненням по імені. Ім'я зберігається в змінній username.

// Повідомлення привітання має виглядати так: "Welcome Poly!", де Poly — це значення змінної username. Зверни увагу, що пробіл має відноситися до рядка "Welcome "

// Оголошена змінна username
// Значення змінної username - це рядок "Poly"
// Оголошена змінна message
// Значення змінної message - це рядок "Welcome Poly!"
// Використаний оператор +

// const username = 'Poly';
// const massage = 'Welcome ' + username + '!';

// console.log(massage);

// Оголоси змінну message і запиши в неї повідомлення про покупку.

// Це буде рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits", де

// <назва товару> — це значення змінної productName
// <ціна товару> — це значення змінної pricePerItem
// Використовуй синтаксис шаблонних рядків. Уникай зайвих символів (пробілів, коми або крапки, що не передбачені вмістом рядка).

// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 3500
// Оголошена змінна message
// Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"

// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати (ціна одного дроїда помножена на кількість дроїдів у замовленні, плюс вартість доставки)
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits"
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 6
// Оголошена змінна pricePerDroid
// Значення змінної pricePerDroid - це число 800
// Оголошена змінна deliveryFee
// Значення змінної deliveryFee - це число 50
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 4850
// Оголошена змінна message

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// console.log(totalPrice);

// const message = `You ordered droids worth ${totalPrice} credits`;

// console.log(message);

// Змінна username зберігає рядок з іменем користувача. Оголоси змінну message та за допомогою синтаксису шаблонних рядків доповни код так, щоб в ній зберігався рядок наступного формату: "Username <name> is <length> characters long", в якому <name> це ім'я користувача зі змінної username, а <length> це його довжина.

// Оголошена змінна username
// Оголошена змінна message
// Якщо значення username це "Poly", значення message буде "Username Poly is 4 characters long"
// Якщо значення username це "Harambe", значення message буде "Username Harambe is 7 characters long"
// Якщо значення username це "Billy", значення message буде "Username Billy is 5 characters long"
// Якщо значення username це "Joe", значення message буде "Username Joe is 3 characters long"
// Використовується синтаксис шаблонних рядків

// const username = 'Poly';
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// Додай код, який записує у змінні наступні значення:

// courseTopicLength - довжина рядка
// firstElement - перший символ рядка
// lastElement - останній символ рядка (використовуй змінну courseTopicLength)
// Оголошена змінна courseTopic
// Значення змінної courseTopic - це рядок "JavaScript essentials"
// Оголошена змінна courseTopicLength
// Значення змінної courseTopicLength - це число 21
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "J"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "s"

// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = 21;
// const firstElement = 'J';
// const lastElement = 's';

// Оголоси змінну isAdult та задай їй результат перевірки значення змінної age. Використай оператори порівняння та доповни код так, щоб значенням isAdult було true, якщо вік користувача більше або дорівнює 18 та false, якщо менше 18.

// Оголошена змінна age
// Оголошена змінна isAdult
// Якщо значення age дорівнює 8, то значення isAdult буде false
// Якщо значення age дорівнює 14, то значення isAdult буде false
// Якщо значення age дорівнює 20, то значення isAdult буде true
// Якщо значення age дорівнює 37, то значення isAdult буде true

// const age = 19;
// const isAdult = age >= 18;
// console.log(isAdult);

// Оголоси змінну isValid і задай їй значенням результат перевірки рівності паролей в змінних correctPassword і userPassword.

// Якщо паролі співпадають (сувора рівність), значення isValid має бути true
// Якщо паролі не співпадають, значення isValid має бути false
// Оголошена змінна correctPassword
// Оголошена змінна userPassword
// Оголошена змінна isValid
// Якщо значення userPassword дорівнює "mangodab3st", значення isValid буде false
// Якщо значення userPassword дорівнює "kiwirul3z", значення isValid буде false
// Якщо значення userPassword дорівнює "jqueryismyjam", значення isValid буде true

// const correctPassword = 'jqueryismyjam';
// const userPassword = 'mangodab3st';
// const isValid = correctPassword === userPassword;

// console.log(isValid);

// Змінна value містить величину у вигляді рядка, що складається з числової частини та одиниці виміру. Наприклад, 24.5px, 14cm, 20.3vh тощо.

// Оголоси змінну numerical і доповни код таким чином, щоб:

// Якщо це можливо, значенням змінної numerical буде число з плаваючою крапкою, що утворилось з рядка змінної value
// В іншому випадку, значенням numerical буде NaN.
// Оголошена змінна value
// Оголошена змінна numerical
// Якщо значення value дорівнює "24.5px", значення numerical буде 24.5
// Якщо значення value дорівнює "14cm", значення numerical буде 14
// Якщо значення value дорівнює "20.3vh", значення numerical буде 20.3
// Якщо значення value дорівнює "Poly16", значення numerical буде NaN

// const value = '24.5px';
// const numerical = Number.parseFloat(value);

// console.log(numerical);

// Оголоси функцію sayHi. У тілі функції sayHi додай console.log() з рядком "Hello, this is my first function!".

// Після оголошення виклич функцію sayHi.

// Очікується оголошення функції
// Функції присвоєно ім'я sayHi
// В тілі функції sayHi є console.log("Hello, this is my first function!")
// Після оголошення є виклик функції sayHi

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }

// sayHi();

// Функція add повинна вміти додавати три числа і виводити результат у консоль. Оголоси для функції add три параметри: a, b і c, які будуть отримувати значення з аргументів, під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// Оголошена функція add(a, b, c)
// Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
// Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
// Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// Оголошена функція add(a, b, c)
// У функції add є оператор return
// Виклик add(15, 27, 10) повертає 52
// Виклик add(10, 20, 30) повертає 60
// Виклик add(5, 10, 15) повертає 30
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function add(a, b, c) {
//   return a + b + c;
// }

// add();

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Функція makeMessage(name, price) створює і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб вона повертала рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Дуже зручно зробити цей рядок з використанням синтаксису шаблонних рядків.

// Оголошена функція makeMessage(name, price)
// Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
// Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
// Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
// Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
// pricePerItem - другий параметр, ціна одиниці товару.
// Функція повинна повертати загальну суму покупки - результат множення кількості товарів на ціну одного.

// Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик calculateTotalPrice(1, 3500) повертає 3500
// Виклик calculateTotalPrice(12, 70) повертає 840
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   return orderedQuantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику:
// • quantity— перший параметр, число, що містить кількість замовлених дроїдів
// • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
// "You ordered <quantity> droids worth <totalPrice> credits!", де:
// • <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.
// function makeTransaction(quantity, pricePerDroid) {
//   return `You ordered ${quantity} droids worth ${pricePerDroid} credits!"`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// • country — перший параметр, рядок, що містить країну доставки
// • price — другий параметр, число, що містить загальну вартість товару
// • deliveryFee — третій параметр, число, що містить вартість доставки товару

// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:
// • <country> — це країни доставки
// • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику:
// • content— перший параметр, ширина контенту
// • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
// • border — третій параметр, значення товщини бордера для кожної зі сторін
// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

// Доповни код функції так, щоб вона повертала число — загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function getElementWidth(content, padding, border) {
//   const contentValue = parseFloat(content);
//   const paddingValue = parseFloat(padding);
//   const borderValue = parseFloat(border);

//   return contentValue + paddingValue * 2 + borderValue * 2;
// }

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200
