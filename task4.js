const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 2048 });
const publicKeyPEM = key.exportKey('public');
const privateKeyPEM = key.exportKey('private');
const dataToEncrypt = "13 Korol Kirill kirilltht@gmail.com";
const encryptedData = key.encrypt(dataToEncrypt, 'base64');
console.log("Public Key:", publicKeyPEM);
console.log("Private Key:", privateKeyPEM);
console.log("Encrypted:", encryptedData);
