function foo() {
	var x = window.localStorage.getItem('score');

	// x * 1 - чтобы преобразовать строку в число
	x = x * 1 + 1;

	window.localStorage.setItem('score', x);

	alert(x);
}