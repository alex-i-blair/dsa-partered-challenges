const sent = 'Reverse the words sentence';

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
// console.log(reverseWords(sent));

function oddishOrEvenish(number) {
  const reducer = (acc, curr) => acc + curr;
  const numSum = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce(reducer);

  return numSum % 2 === 0 ? 'Evenish' : 'Oddish';
  // if (numSum % 2 === 0) {
  //   return 'evenish';
  // } else {
  //   return 'oddish';
  // }
}

const number = 122;
console.log(oddishOrEvenish(number));
