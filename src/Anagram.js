const tempDictionary = ['zone', 'act', 'cat', 'tac', 'art', 'rat', 'tar', 'spar', 'rasp', 'pars', 'raps', 'shed']

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
  let orderedWord = word.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  return orderedWord;
};

Anagram.prototype.returnAnagram = function() {
  let orderedTestWord = this.alphabeticOrder(this.word)
  let groupedDictionary = this.dictionaryGrouper(tempDictionary)
  let potentialAnagrams = groupedDictionary[orderedTestWord]
  if (!potentialAnagrams || potentialAnagrams.length === 1) {
    console.log(`There are no anagrams for ${this.word}`)
    return '';
  } else {
    console.log('Here are the anagrams: ', potentialAnagrams.join(', '))
    return potentialAnagrams.join(', ')
  };
};



// test = new Anagram('act')
// group = test.dictionaryGrouper(tempDictionary)

// console.log(group)
// console.log(group['enoz'])
// test.returnAnagram()

module.exports = Anagram;
