function isPalindrome(word) {

  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;