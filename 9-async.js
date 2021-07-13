'use strict';
(async () => {
	const fibonacci1 = async n => {
		if (n <= 2) return 1;
		return await fibonacci1(n - 1) + await fibonacci1(n - 2);
	};

	console.log('recursion:', await fibonacci1(14));
})();

(async () => {
	const fibonacci2 = async n => {
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

	console.log('circle', await fibonacci2(14));
})();