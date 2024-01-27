const crypto = require('crypto');
const dataToHash = "13 Korol Kirill kirilltht@gmail.com";
const hashedData = crypto.createHash('sha256').update(dataToHash).digest('hex');
console.log(hashedData)