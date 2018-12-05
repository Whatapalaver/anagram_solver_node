function Anagram(word) {
  this.word = word;
  this.anagrams = [];
}

Anagram.prototype.alphabeticOrder = (word) => {
  if (!word) { return; }
  sortedWord = word.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  return sortedWord;
}


// test = new Anagram('')
// console.log(test.alphabeticOrder("Angela's coat"))

module.exports = Anagram;
