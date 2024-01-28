// Создайте функцию checkAge(), которая запрашивает имя пользователя, затем возраст, а затем статус (администратор, модератор, пользователь) и генерирует ошибку, если:
// Возраст пользователя меньше 18 или больше 70 лет (ошибка типа RangeError)
// Пользователь не ввел данные ни в одно поле (Тип ошибки с сообщением «Поле пусто!»)
// В поле статуса было введено неверное слово (тип ошибки EvalError)
// В поле возраста введено нечисловое значение (тип ошибки TypeError)
// Во всех остальных случаях пользователь получит доступ к просмотру фильма (отображение модального окна с сообщением «Вы можете посмотреть фильм!»).

// Не выводите сообщения на консоль в своем коде!
//************************************************************************************************************************************************************************

// Test	Result
// setInputValues("Bob", "18", "user");
// checkAge();
// You can watch a movie!
// setInputValues("Bob", "ten", "user");
// try {
//   checkAge();
// } 
// catch (e) {
//   console.log(e.name);
// }
// TypeError
// setInputValues("Bob", "22", "guest");
// try {
//   checkAge();
// } 
// catch (e) {
//   console.log(e.name);
// }
// EvalError



function checkAge() {
//СОДАТЬ ТРИ ПЕРЕМЕННЫЕ КОТОРЫЕ БУДУТ ВЫЗЫВАТЬ МОДАЛЬНЫЕ ОКНА Promt
const name = prompt("enter your name");
const age = prompt("enter your age");
const status = prompt("администратор, модератор, пользователь");
//проверка на пустое поле
    if (!name || !age || !status) {
        throw new Error ('The field is empty!');
    } 
//проверка на возрас
    const ageNum = parsInt(age);
if (age < 18 || age > 70) {
        throw new RangeError("не совершеннолетний");
    } 
//проверка на веедение только чисел
    
    if(isNaN(age)) {
        throw new TypeError();
    }
//проверка статуса на неверное слово
if (status !== "admin" || status !== "moderator" || status !== "user") {
    throw new EvalError();
    }
    alert("your can wach tv");
}



function checkAge() {

    const name = prompt("Enter your name:");
    const ageInput = prompt("Enter your age:");
    const status = prompt("Enter your status (admin, moderator, user):");
    
    if (!name || !ageInput || !status) {
        throw new Error ('The field is empty!');
        } 
    
    const age = parseInt(ageInput);  
    
    if (isNaN(age)) {
        throw new TypeError();
    }
    
    if (age < 18 || age > 70) {
        throw new RangeError();
    } 
    
    if (status !== "admin" && status !== "moderator" && status !== "user") {
        throw new EvalError();
        }
        alert("You can watch a movie!");
    }

















function sumSliceArray(arr, first, second) {
let sum = [];
sum = first + second;
  if (!Number(first) || !Number(second)) {
  throw new Error("Is not number type");  
  }  

if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
  throw new RangeError("Index out of range");
}
return sum ;
}




function sumSliceArray(arr, first, second) {
    let sum = [];
    sum = first + second;
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    throw new TypeError('Both positions must be integers.');
  }

  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new RangeError('Positions are out of range of the array.');
  }
    return sum;
}
    
//const arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(sumSliceArray(arr, 3, 5)); // Виведе 8

try {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  sumSliceArray(arr, 8, "five");
} catch (e) {
  console.log("Error"); // Виведе "Error"
}








// Реализуйте функциюcalcRectangleArea(width, height), которая принимает два параметра: ширину и высоту прямоугольника и вычисляет его площадь. 
// Обеспечить прекращение выполнения программы и генерацию исключения, если в функцию переданы нечисловые параметры.
// Напишите код, который использует эту функцию и обрабатывает возможные исключения.
// Не выводите сообщения на консоль в своем коде!
// Например:

// Результат испытаний
// console.log(calcRectangleArea(2, 7));
// 14
// пытаться {
//    CalcRectangleArea("два", "семь");
// }
// поймать (е) {
//    console.log(e.name);
// }
// Ошибка
// пытаться {
//    CalcRectangleArea("2", "7");
// }
// поймать (е) {
//    console.log(e.name);
// }
// Ошибка

//проверка на число а не строка
function calcRectangleArea(width, height) {
   if(isNaN(width) || isNaN(height)) {
    throw new Error();
   }
   return area = parseFloat(width) * parseFloat(height);
}