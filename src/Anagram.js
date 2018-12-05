const tempDictionary = ['zone', 'zone', 'act', 'cat', 'tac', 'art', 'rat', 'tar', 'spar', 'rasp', 'pars', 'raps', 'shed']

function Anagram(word) {
  this.word = word;
  this.anagrams = [];
}

Anagram.prototype.dictionaryGrouper = function(wordlist) {
  const groupedDictionary = {};
  wordlist.forEach((word) => {
    const orderedWord = this.alphabeticOrder(word);
    if (groupedDictionary[orderedWord]) {
      return groupedDictionary[orderedWord].push(word);
    }
    groupedDictionary[orderedWord] = [word];
  });
  return groupedDictionary;
}

Anagram.prototype.alphabeticOrder = function(word) {
  if (!word) { return; }
    orderedWord = word.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  return orderedWord;
};


// test = new Anagram('')
// group = test.dictionaryGrouper(tempDictionary)

// console.log(group)
// console.log(group['enoz'])

module.exports = Anagram;
