function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа");

	function showSkills() {
		let skills = ['html', 'css', 'ps', 'sass'];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + '<br>');
		}
	}
	showSkills();

	function checkAge(age) {
		if(age > 18) {
			alert("Теперь ты можешь отвечать, что тебе есть 18 лет");
		} else {
			alert("Наслаждайся беззаботной жизнью, ты еще ребенок");
		}
	}
	checkAge(age);

	function calcPow(num) {
		num = Math.pow(num, 2);
			document.write("Ваше число в квадрате: " + num);
	}
	calcPow(4);
}
myFirstApp("Ivan", 32);