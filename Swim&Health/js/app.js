// Валидация
document.getElementById('formRegistration').addEventListener('login-in', function (event) {

const id = document.getElementById('id').value;

const password = document.getElementById('password').value;

if (!id || !password) {

alert('Все поля должны быть заполнены');

event.preventDefault(); // Предотвращаем отправку формы

} else if (!isValidId(id)) {

alert('Введите корректный id');

event.preventDefault();

}
});

function isValidId(id) {

// Регулярное выражение для проверки email

const idPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

return idPattern.test(email);

}