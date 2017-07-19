const util = require('util');

function Animal () {
	this.color = "negro";
	this.crecer = function () {	
		this.edad = (this.edad || 0) + 1;
		return this.edad;
	};
}

util.inherits(Felino, Animal);

function Felino () {
	Animal.call(this);
	this.raza = "angora";
	this.maullar = function () {
		console.log('meowwwww');
	};
}

// Felino.prototype = new Animal();
// Felino.prototype.constructor = Felino;

// Felino.prototype.maullar = function () {
	// console.log("maullar:", this)
	// console.log('meowwwww');
// };

var iris = new Felino();

// console.log(iris instanceof Animal); // true
// console.log(Felino.super_ === Animal); // true

console.log("iris:", util.inspect(iris, { colors: true }))
iris.crecer();
console.log("edad:", iris.edad)
iris.maullar();

