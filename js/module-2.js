// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult",
// якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.

// Оголошена функція checkAge(age)
// Виклик checkAge(20) повертає рядок "You are an adult"
// Виклик checkAge(17) повертає undefined
// Виклик checkAge(10) повертає undefined
// Виклик checkAge(30) повертає рядок "You are an adult"
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
// }

// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"
// Оголошена функція checkStorage(available, ordered).
// Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Not enough goods in stock!';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення
// про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок
// "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок
// "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".
// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(70, 0)повертає "There are no products in the order!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(150, 0) повертає "There are no products in the order!"
// Виклик checkStorage(80, 80) повертає "The order is accepted, our manager will contact you"

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора
// (correctPassword) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"
// Оголошена функція checkPassword(password)
// Використано тернарний оператор
// Виклик checkPassword("jqueryismyjam") повертає "Access granted"
// Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
// Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return password === correctPassword
//     ? 'Access granted'
//     : 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type),
// перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну,
// або повідомлення про неправильний тип передплати.

// Якщо значення параметра type — це рядок:

// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

// Використай оператор switch для розв'язання цієї задачі!

// Оголошена функція getSubscriptionPrice(type)
// Використано оператор switch
// Виклик getSubscriptionPrice("professional") повертає число 20
// Виклик getSubscriptionPrice("organization") повертає число 50
// Виклик getSubscriptionPrice("starter") повертає число 0
// Виклик getSubscriptionPrice("random") повертає рядок "Invalid subscription type!"
// Виклик getSubscriptionPrice("premium") повертає рядок "Invalid subscription type!"

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//       break;
//     case 'professional':
//       return 20;
//       break;
//     case 'organization':
//       return 50;
//       break;
//     default:
//       return 'Invalid subscription type!';
//   }
// }

// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));
// console.log(getSubscriptionPrice('random'));
// console.log(getSubscriptionPrice('premium'));

// const globalVar = 'Global';

// console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// Немає доступу до aVar, bVar і cVar

// if (true) {
//   const aVar = 'A';
//   console.log(globalVar); // Доступ до globalVariable з блоку A
//   console.log(aVar); // Доступ до aVar з блоку A
// Немає доступу до bVar і cVar

//   if (true) {
//     const bVar = 'B';
//     console.log(globalVar); // Доступ до globalVariable з блоку B
//     console.log(aVar); // Доступ до aVar з блоку B
//     console.log(bVar); // Доступ до bVar з блоку B
// Немає доступу до cVar
//   }
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar

// if (true) {
//   const cVar = 'C';
//   console.log(globalVariable); // Доступ до globalVar з блоку C
//   console.log(cVar); // Доступ до cVar з блоку C
// Немає доступу до aVar і bVar
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar

//  Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином,
// щоб вона повертала результат входження number у числовий проміжок від start до end включно.
// Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end.
// Результатом виклику функції має бути буль true або false.

// Оголошена функція isNumberInRange(start, end, number)
// Використано оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false

// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   } else return false;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати. Використовуючи оператор "АБО",
// доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip",
// то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

// Оголошена функція checkAccess(subType)
// Використано оператор ||
// Виклик checkAccess("pro") повертає true
// Виклик checkAccess("starter") повертає false
// Виклик checkAccess("vip") повертає true
// Виклик checkAccess("free") повертає false

// function checkAccess(subType) {
//   return subType === 'pro' || subType === 'vip';
// }

// console.log(checkAccess('pro'));
// console.log(checkAccess('starter'));
// console.log(checkAccess('vip'));
// console.log(checkAccess('free'));

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна.
// У параметрі isVisible вона очікує буль true або false. Доповни код функції так,
// щоб вона повертала протилежне значення цього параметра.

// Оголошена функція toggleModalVisibility(isVisible)
// Виклик toggleModalVisibility(true) повертає false
// Виклик toggleModalVisibility(false) повертає true
// Використано оператор !

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію).
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 5) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 5));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

// function getFirstName(fullName) {
//   const spaceIndex = fullName.indexOf(' ');
//   return fullName.slice(0, spaceIndex);
// }

// console.log(getFirstName('John Smith')); // "John"
// console.log(getFirstName('Anna Petrova')); // "Anna"

// Напиши функцію cutStart(text, n), яка повертає перші n символів рядка text.

// function cutStart(text, n) {
//   return text.slice(0, n);
// }

// console.log(cutStart('JavaScript', 4)); // "Java"

// Напиши функцію cutEnd(text, n), яка повертає останні n символів рядка.

// function cutEnd(text, n) {
//   return text.slice(-n);
// }

// console.log(cutEnd('Programming', 3)); // "ing"

// Напиши функцію cutMiddle(text, start, end), яка повертає підрядок з індексів start до end.

// function cutMiddle(text, start, end) {
//   return text.slice(start, end);
// }

// console.log(cutMiddle('FrontEnd', 1, 5)); // "ront"

// Функція removeStart(text, n) повертає рядок без перших n символів.

// function removeStart(text, n) {
//   return text.slice(n);
// }

// console.log(removeStart('Hello world', 6)); // "world"

// Створи функцію getFirstLetter(string), яка повертає першу літеру переданого рядка.

// function getFirstLetter(string) {
//   return string.slice(0, 1);
// }

// console.log(getFirstLetter('JavaScript')); // "J"
// console.log(getFirstLetter('Hello')); // "H"

// Створи функцію getFirstTwoWords(text), яка повертає тільки перші два слова з рядка.

// function getFirstTwoWords(text) {
//   const words = text.split(' ');
//   const firstTwo = words.slice(0, 2);
//   return firstTwo.join(' ');
// }

// console.log(getFirstTwoWords('Learn JavaScript step by step')); // "Learn JavaScript"
// console.log(getFirstTwoWords('Front End Developer')); // "Front End"

// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower",
// що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі
// Оголошена функція normalizeInput(input, to)
// Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
// Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
// Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
// Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
// Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
// Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"

// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else return input.toLowerCase();
// }

// console.log(normalizeInput("This ISN'T SpaM", 'lower'));
// console.log(normalizeInput("This ISN'T SpaM", 'upper'));
// console.log(normalizeInput('Big SALE', 'lower'));
// console.log(normalizeInput('Big SALE', 'upper'));
// console.log(normalizeInput('Stay Awhile and Listen', 'lower'));
// console.log(normalizeInput('Stay Awhile and Listen', 'upper'));

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false -
// результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName),
// у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий.
// Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// Оголошена функція checkForName(fullname, firstName)
// Виклик функції checkForName("Jason Neis", "Jason") повертає true
// Виклик функції checkForName("Jason Neis", "jAsOn") повертає true
// Виклик функції checkForName("Jason Neis", "Jacob") повертає false
// Виклик функції checkForName("Caty Stars", "Caty") повертає true
// Виклик функції checkForName("Caty Stars", "cAtY") повертає true
// Виклик функції checkForName("Caty Stars", "Andromeda") повертає false

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// console.log(checkForName('Jason Neis', 'Jason'));
// console.log(checkForName('Jason Neis', 'jAsOn'));
// console.log(checkForName('Jason Neis', 'Jacob'));
// console.log(checkForName('Caty Stars', 'Caty'));
// console.log(checkForName('Caty Stars', 'cAtY'));
// console.log(checkForName('Caty Stars', 'Andromeda'));

// Напиши функцію isUserInList(userList, name), яка приймає рядок зі списком імен,
// розділених пробілами(наприклад: "Alice Bob Charlie"), і перевіряє, чи входить name у список(регістр ігнорується).

// function isUserInList(userList, name) {
//   return userList.toLowerCase().includes(name.toLowerCase());
// }

// console.log(isUserInList('Alice Bob Charlie', 'bob')); // true
// console.log(isUserInList('Alice Bob Charlie', 'david')); // false

// Напиши функцію containsSpam(message), яка повертає true,
//   якщо в рядку є слово "spam" або "sale"(у будь - якому регістрі), інакше — false.

// function containsSpam(message) {
//   const lowerMessage = message.toLowerCase();
//   return lowerMessage.includes('spam') || lowerMessage.includes('sale');
// }

// console.log(containsSpam('Super SALE today!')); // true
// console.log(containsSpam('Nothing suspicious here.')); // false
// console.log(containsSpam('Buy now! Best spam ever')); // true

// Напиши функцію startsWithName(fullText, name), яка повертає true,
//   якщо fullText починається з імені name(регістр не має значення).

// function startsWithName(fullText, name) {
//   return fullText.toLowerCase().startsWith(name.toLowerCase());
// }

// console.log(startsWithName('Anna went to the store', 'anna')); // true
// console.log(startsWithName('Today John is at home', 'john')); // false

// Функція checkFileExtension(fileName, ext) приймає два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext,
// то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// Оголошена функція checkFileExtension(fileName, ext)
// Виклик функції checkFileExtension("styles.css", ".css") повертає "File extension matches"
// Виклик функції checkFileExtension("styles.css", ".js") повертає "File extension does not match"
// Виклик функції checkFileExtension("app.js", ".js") повертає "File extension matches"
// Виклик функції checkFileExtension("app.js", ".html") повертає "File extension does not match"
// Виклик функції checkFileExtension("index.html", ".html") повертає "File extension matches"
// Виклик функції checkFileExtension("index.html", ".css") повертає "File extension does not match"
// Виклик функції checkFileExtension("index.html", ".js") повертає "File extension does not match"

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else return 'File extension does not match';
// }

// console.log(checkFileExtension('styles.css', '.css'));
// console.log(checkFileExtension('styles.css', '.js'));
// console.log(checkFileExtension('app.js', '.js'));
// console.log(checkFileExtension('app.js', '.html'));
// console.log(checkFileExtension('index.html', '.html'));
// console.log(checkFileExtension('index.html', '.css'));
// console.log(checkFileExtension('index.html', '.js'));

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без,
// наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// Оголошена функція getFileName(file)
// Виклик функції getFileName("styles.css") повертає "styles"
// Виклик функції getFileName("app.js") повертає "app"
// Виклик функції getFileName("app") повертає "app"
// Виклик функції getFileName("index.js") повертає "index"
// Виклик функції getFileName("index.html") повертає "index"
// Виклик функції getFileName("index.css") повертає "index"
// Виклик функції getFileName("index") повертає "index"

// function getFileName(file) {
//   const dotIndex = file.indexOf('.');
//   if (dotIndex === -1) {
//     return file;
//   }
//   return file.slice(0, dotIndex);
// }

// console.log(getFileName('styles.css'));
// console.log(getFileName('app.js'));
// console.log(getFileName('app'));
// console.log(getFileName('index.js'));
// console.log(getFileName('index.html'));
// console.log(getFileName('index.css'));
// console.log(getFileName('index'));

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач.
// Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(),
// доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням,
// зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити
// зайвих пробілів на початку або наприкінці.

// Оголошена функція createFileName(name, ext)
// Виклик функції createFileName(" order ", "txt") повертає "order.txt"
// Виклик функції createFileName("report ", "csv") повертає "report.csv"
// Виклик функції createFileName(" presentation", "xml") повертає "presentation.xml"

// function createFileName(name, ext) {
//   return name.trim() + `.` + ext;
// }

// console.log(createFileName(' order ', 'txt'));
// console.log(createFileName('report ', 'csv'));
// console.log(createFileName(' presentation', 'xml'));

// Функція calculateTotal(number) приймає ціле число (параметр number).
// Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(0) повертає 0
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;
//   while (i <= number) {
//     total += i;
//     i++;
//   }
//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// let firstName = null;
// let nickName = 'Суперкодер';

// console.log(firstName ?? nickName ?? 'Анонім');

// for (let i = 6; i > 3; i--) {}
// console.log(i);

// let a = 6;
// let b = false;
// let c = '12';
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

// Функція calculateTotal(number) приймає ціле число (параметр number)
// Використовуючи цикл for, доповни код функції так,
// щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(0) повертає 0
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal(1));

// Функція calculateEvenTotal(number) приймає ціле число (параметр number).
// Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно.
// Парні числа — це ті, що можна поділити на 2 без остачі
// (як це зробити розглядалося у темі Арифметичні операції у модулі 1).
// Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// Оголошена функція calculateEvenTotal(number)
// Виклик функції calculateEvenTotal(1) повертає 0
// Виклик функції calculateEvenTotal(3) повертає 2
// Виклик функції calculateEvenTotal(7) повертає 12
// Виклик функції calculateEvenTotal(18) повертає 90
// Виклик функції calculateEvenTotal(27) повертає 182
// Виклик функції calculateEvenTotal() з випадковим числом повертає правильне значення

// function calculateEvenTotal(number) {
//   const sum = number--;
//   return number;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(27));
// console.log(calculateTotal(0));
