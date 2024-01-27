const moment = require('moment');
// Поточний час
let now = moment();
// Час іспиту
let examTime = moment('2024-01-26T00:00:00');
// День народження
let birthday = moment('2024-11-19T00:00:00');
// Кількість днів до дня народження з початку року
let startOfYear = moment().startOf('year');
let daysBirthday = birthday.diff(startOfYear , 'days');
console.log("days counter ", daysBirthday)
// Обчислення значень
let iat = Math.floor(now.valueOf() / 1000);
let nbf = Math.floor(examTime.valueOf() / 1000);
let exp = nbf + daysBirthday * 24 * 60 * 60;
// Виведення результатів
console.log('iat:', iat);
console.log('nbf:', nbf);
console.log('exp:', exp);
