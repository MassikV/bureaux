const fs = require('fs');
const path = require('path');

// Шлях до папки з фотографіями
const mainFolderPath = './src/api/ФІНІШ_бережанський';

// Функція для отримання масиву імен файлів з фотографіями усередині папок
function getPhotosInFolders(folderPath) {
  try {
    // Отримуємо список файлів у поточній папці
    const files = fs.readdirSync(folderPath);

    // Створюємо порожній масив для зберігання імен фотографій
    const photoArray = [];

    // Проходимось по всіх файлах у поточній папці
    for (const file of files) {
      const filePath = path.join(folderPath, file);

      // Перевіряємо, чи є це папкою
      if (fs.statSync(filePath).isDirectory()) {
        // Якщо це папка, викликаємо цю функцію рекурсивно для папки
        const subFolderPhotos = getPhotosInFolders(filePath);

        // Додаємо фотографії з підпапки до загального масиву
        photoArray.push(...subFolderPhotos);
      } else {
        // Якщо це файл, перевіряємо розширення і додаємо до масиву, якщо це фотографія
        const extname = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(extname)) {
          photoArray.push(file);
        }
      }
    }

    return photoArray;
  } catch (error) {
    console.error('Помилка при отриманні масиву імен файлів:', error);
    return [];
  }
}

// Викликаємо функцію та виводимо результат
const photoArray = getPhotosInFolders(mainFolderPath);
console.log('Масив імен файлів з фотографіями:', photoArray);
