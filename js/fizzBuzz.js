function fizzBuzz () {
    for(var i = 0; i <= 100; i++){
        console.log(fizzBuzzGame(i));
    }
}

function fizzBuzzGame (i) {

	if (i%5===0) {
	return ("Buzz");
	}else if (i%15===0) {
	return ("fizzBuzz");
	}
	else if (i%3===0) {
	return ("Fizz");
	}else {
	return (i)
	};
}

module.exports = {
    fizzBuzz : fizzBuzz,
    FizzBuzzGame : fizzBuzzGame,
}