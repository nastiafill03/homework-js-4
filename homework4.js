// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }
// checkAge(1);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }
// console.log(min(4, 2));

//  ---3---
// Перепишіть з використанням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) { if (confirm(question)) yes();
// else no(); }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); }, function() { alert("Ви скасували виконання."); }
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );
