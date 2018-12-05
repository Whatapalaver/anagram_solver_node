//import the wordlist
const dictionary = require('./dictionary');
//convert wordlist string to array
const dictionaryArray = dictionary.strData.split(/\s/);


function Anagram(word = process.argv[2]) {
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
  let groupedDictionary = this.dictionaryGrouper(dictionaryArray)
  let potentialAnagrams = groupedDictionary[orderedTestWord]
  if (!potentialAnagrams || potentialAnagrams.length === 1) {
    console.log(`There are no anagrams for ${this.word}`)
    return '';
  } else {
    console.log(`Here are the anagrams for ${this.word}: `, potentialAnagrams.join(', '))
    return potentialAnagrams.join(', ')
  };
};

module.exports = Anagram;
