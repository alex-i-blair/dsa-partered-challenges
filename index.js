const sent = 'Reverse the words sentence';

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
// eslint-disable-next-line no-console
console.log(reverseWords(sent));

function oddishOrEvenish(number) {
  const reducer = (acc, curr) => acc + curr;
  const numSum = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce(reducer);

  return numSum % 2 === 0 ? 'Evenish' : 'Oddish';
}

const number = 122;

// eslint-disable-next-line no-console
console.log(oddishOrEvenish(number));

const fizzBuzzInput = 16;

function fizzBuzz(number) {
  const res = [];
  for (let i = 1; i < number + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('Fizzbuzz');
    } else if (i % 3 === 0) {
      res.push('Fizz');
    } else if (i % 5 === 0) {
      res.push('buzz');
    } else {
      res.push(i);
    }
  }
  return res;
}

// eslint-disable-next-line no-console
console.log(fizzBuzz(fizzBuzzInput));
