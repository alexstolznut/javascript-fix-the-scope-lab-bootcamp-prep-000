var animal = dog;

function myAnimal() {
  var animal = "dog";
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = "cat";
  return animal;
}

function add2(n) {
  const number= parseInt(n);
  var final = number + 2;
  console.log(final);
  return number + 2;

  // Feel free to move things around!

}

var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()()
