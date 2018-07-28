let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	thanks = document.querySelector('.thanks'),
	back = document.getElementsByClassName('back')[0],
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];

//Ф-ция 1 - изменения текста
function hover() {
	heading.textContent = 'Действительно все!';
};

//Вызов ф-ции 1 по клику
heading.addEventListener("click", hover);
//Вызов ф-ции 1 по двойному клику
heading.addEventListener("dblclick", function() {
	heading.textContent = "Все включено!";
});
//Назначение обработчика событий для изменения св-ва модального окна
receiveBtn.addEventListener('click', function() {
	modal.style.display = 'block';
});
//Назначение обработчика событий для изменения св-ва модального окна
close.addEventListener('click', function() {
	modal.style.display = 'none';
});
//Назначение обработчика событий для изменения св-ва эл-та textarea
nameInput.addEventListener('input', function() {
	text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить: ";
	if (nameInput.value == '') {
		text.value = '';
	}
});

// heading.onmouseenter = hover;
// heading.style.fontSize = "36px"