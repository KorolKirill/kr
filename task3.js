const CryptoJS = require('crypto-js');
const key = CryptoJS.lib.WordArray.random(16);
const iv = CryptoJS.lib.WordArray.random(16);
const dataToEncrypt = "13 Korol Kirilo kirilltht@gmail.com";
const encryptedData = CryptoJS.AES.encrypt(dataToEncrypt, key, { iv: iv });
console.log("Encrypted Data:", encryptedData.toString());
console.log("Encryption Key:", key.toString());
