// Моделирование генерации и сохранения ключа (в реальности нужно обеспечить безопасное хранение)
const secretKey = "mysecretkey123"; 

// Функция для шифрования текста
function encryptText(text, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Функция для дешифрования текста
function decryptText(encryptedText, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

// Исходный текст
const originalText = "Hello, World!";

// Шифрование текста
const encryptedText = encryptText(originalText, secretKey);
console.log("Зашифрованный текст:", encryptText(originalText, secretKey));

console.log("Расшифрованный текст:", decryptText(encryptedText, secretKey));
