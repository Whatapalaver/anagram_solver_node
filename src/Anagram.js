function Anagram(word) {
  this.word = word;
  this.anagrams = [];
}

Anagram.prototype.alphabeticOrder = (word) => {
  if (!word) { return; }
  sortedWord = word.split('').sort().join('');
  return sortedWord;
}

module.exports = Anagram;
