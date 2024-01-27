const uuidv5 = require('uuid');
const namespace = '07a7ca60-bd0f-11ee-9b25-1542652062b8'; //UUID версії 1
const example = uuidv5.v5('kirill', namespace);
console.log('UUID v5:', example);
