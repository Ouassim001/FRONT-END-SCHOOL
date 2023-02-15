// program to generate fibonacci series up to a certain number

// take input from the user
let number = parseInt(prompt('Enter a positive number: '));

while (isNaN(number) || number <= 0) {
  alert('Invalid input. Enter a positive number:');
  number = parseInt(prompt('Enter a positive number: '));
}

let n1 = 0, n2 = 1, nextTerm = n1 + n2;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

while (nextTerm <= number) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
