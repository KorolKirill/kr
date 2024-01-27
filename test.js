
const crypto = require('crypto');

// Функція декодування
function decryptData(encryptedData, key, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedData, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

// Зашифровані дані та ключ
const encryptedData = "4eDyOHzO92YUGz25QvCL4v2qOO/nUCCx5M3DVEnwZiigEHUjdOvDd7ZUw3hes+Hl";
const key = "9432c3bd8b625de7490deb0b5469db06";
const iv = Buffer.alloc(16, 0); // Ініціалізаційний вектор (IV)

// Декодуємо дані
const decryptedData = decryptData(encryptedData, key, iv);

console.log(decryptedData);
