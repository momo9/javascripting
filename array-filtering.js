var numbers = [];
for (var i = 0; i < 10; i++) {
	numbers.push(i + 1);
};

var filtered = numbers.filter(function(number) {
	return number %2 === 0;
});

console.log(filtered);