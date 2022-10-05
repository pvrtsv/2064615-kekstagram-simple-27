function getRandomNumber (startNumber, endNumber) {
  if (startNumber && endNumber >= 0) {
    startNumber = Math.ceil(startNumber);
    endNumber = Math.floor(endNumber);
    return Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
  }
}
getRandomNumber();

/*
Функция для проверки максимальной длины строки.
Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
Пример использования функции:

  имя_функции(проверяемая_строка, максимальная_длина);
  // Результат: true, если строка проходит по длине, и false — если не проходит

  комментарий обязателен;
длина комментария не может быть меньше 20 символов;
длина комментария не может составлять больше 140 символов.
*/

const minCommentLength = 20;
const maxCommentLength = 140;

function getComment (str, textLength) {
  textLength(); //чтобы линтер не ругался
  if (str >= minCommentLength && str < maxCommentLength) {
    return str.length;
  }
}
getComment();
