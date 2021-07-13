'use strict';

const fibonacci1 = n => {
	if (n <= 2) return 1;
	return fibonacci1(n - 1) + fibonacci1(n - 2);
};

console.log('recursion:', fibonacci1(14));

const fibonacci2 = n => {
	let a = 1;
	let b = 0;
	let c = 0;
	while (n > 1) {
		c = a + b;
		b = a;
		a = c;
		n--;
	}
	return a;
};

console.log('circle', fibonacci2(14));