// function calculateTotal(number) {
//   // Change code below this line
//    let sum = 0;
//    for (let i = 0; i <= number; i += 1) { 
//     sum += i;
//  }
//    return sum
//    // Change code above this line
//  }


// let result =  calculateTotal(3)
// console.log(result);





// const generes = ["Jazz", "Blues"];

// generes.push("Rok-N-Roll");
// console.table(generes);
// console.table(generes[0]);
// console.table(generes[generes.length-1]);
// // console.table(generes.shift());
// console.table(generes.splice(0, 1)[0]);

// // generes.unshift("County","Reggae");
// generes.splice(0, 0, "County","Reggae");



// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const valuesUn = values.split(" ");
// const a = Number(valuesUn[0]);
// const b = Number(valuesUn[1]);
// const summ = a * b;
// console.table(summ);



// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. 
// Для кожного елемента масиву виведи в консоль рядок у форматі 
// номер_елемента: значення_елемента. Нумерація елементів повинна 
// починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.table(`${i+1}:${fruits[i]}`);
// }
// for(const i in fruits) {
//   console.table(`${Number(i)+1}:${fruits[i]}`);
// }



// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер 
// користувача. У змінних names та phones зберігаються рядки імен та 
// телефонних номерів, розділені комами. Порядковий номер імен та 
// телефонів у рядках вказують на відповідність. Кількість імен та 
// телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';


// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і 
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const stringMass = string.split(" ");
// stringMass.shift();
// stringMass.pop();
// const nevstring = stringMass.join(" ");
// console.table(nevstring);


// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і 
// виводить його в консоль.

// const string = 'Welcome to the future';
// const stringRevers = string.split("").reverse().join("");
// console.log(stringRevers);

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою
// літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for(let i = 0; i < langs.length - 1; i += 1) {
//   // console.log(`El: ${langs[i]} | i: ${i}`)
//     for(let j = i+1; j < langs.length; j += 1) {
//       // console.log(`\tEl: ${langs[j]} | i: ${j}`)
//       if(langs[i][0] > langs[j][0]){
//         let temp = langs[i];
//         langs[i] = langs[j];
//         langs[j] = temp;
//       }
//     }
// }
// console.log(langs);
// console.log(langs.sort());


// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
// для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for(const nam of numbers){
//   if (nam < min) min = nam;
// }

// console.log(min); // 1



// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає 
// індекс маси тіла людини. Для цього необхідно розділити вагу в 
// кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа 
// можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник 
// дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//   weight = convertTo(weight);
//   height = convertTo(height);

//   const retult = weight / (height*height);

//   return getRund(retult)
// }

// function convertTo(str){
//     return Number(str.replace(",","."));
// }
// function getRund(num){
//   return Math.round(num * 10) / 10;
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi);

// const bmi2 = calcBMI('85,3', '1,90');
// console.log(bmi2);


// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b){
//   // Math.min(a, b);
//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));
// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (const num of numbers) {
//     if(num > numbers) {
//       max = num
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83



// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//   const amount =arguments.length;
//   let sum = 0;
//   for (const num of arguments) {
//     sum += num
//   }
//   return sum / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2




// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"



// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//   function addCourse(name){
//     if(courses.includes(name)) {
//       console.log('Ви вже маєте такий курс');
//       return
//     }
//     courses.push(name);
//   }
//   function removeCourse(name){
//     const index = courses.indexOf(name);
//     if(index === -1) console.log('Курс із таким ім\'ям не знайдено');
//     else courses.splice(index, 1);
//   }
//   function updateCourse(oldName, newName){
//     const index = courses.indexOf(oldName);
//     if(index === -1) console.log('Курс із таким ім\'ям не знайдено');
//     else if(courses.includes(newName)) console.log('Ви вже маєте такий курс');
//     else courses[index] = newName;
//     // else courses.splice(index, 1, newName);
//   }



// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']