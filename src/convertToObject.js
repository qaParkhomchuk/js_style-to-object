'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';') // Поділяємо рядок на окремі CSS-властивості
    .map(item => item.trim()) // Видаляємо зайві пробіли
    .filter(item => item !== ''); // Видаляємо порожні елементи

  const stylesObject = {};

  stylesArray.forEach(style => {
    const [key, value] = style.split(':');
    if (key && value) {
      stylesObject[key.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
