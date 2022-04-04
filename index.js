const sent = 'Reverse the words sentence';

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
console.log(reverseWords(sent));
