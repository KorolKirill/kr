function createBasicAuthHeader(username, password) {
    // Кодуємо ім'я користувача та пароль у формат base64
    const base64Credentials = btoa(username + ':' + password);

    // Формуємо заголовок авторизації
    const authHeader = 'Basic ' + base64Credentials;

    return authHeader;
}

// Використання функції
const username = 'Korol';
const password = '13';
const header = createBasicAuthHeader(username, password);

console.log(header); // Виведе заголовок, який можна використовувати у запитах

// const base64Credentials = "S29yb2w6MTM=";
// const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
//
// const expectedLogin = 'Korol';
// const expectedPassword = '13';
//
// const [login, password] = decodedCredentials.split(':');
//
// if (login === expectedLogin && password === expectedPassword) {
//     console.log("Авторизация успешна!");
// } else {
//     console.log("Ошибка авторизации");
// }