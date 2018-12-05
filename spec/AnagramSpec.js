
describe("Anagram", function() {
  const Anagram = require('../src/Anagram.js');
  let newAnagram;
  let word1 = 'chopsticks';
  let hyphenWord = 'chop-sticks';
  let capitalisedWord = 'Chopsticks';
  const testWordlist = ['zone', 'zone', 'act', 'cat', 'tac', 'art', 'rat', 'tar', 'spar', 'rasp', 'pars', 'raps', 'shed']
  const groupedWordlist = { enoz: [ 'zone', 'zone' ],
                            act: [ 'act', 'cat', 'tac' ],
                            art: [ 'art', 'rat', 'tar' ],
                            aprs: [ 'spar', 'rasp', 'pars', 'raps' ],
                            dehs: [ 'shed' ] 
                          }

  beforeEach(function() {
    newAnagram = new Anagram(word1);
  });

  describe("alphabeticOrder", function() {
    it("should be able to put word in alphabetical order", function() {
      expect(newAnagram.alphabeticOrder(word1)).toEqual('cchikopsst');
    });
  
    it("should ignore non alphanumeric characters", function() {
      expect(newAnagram.alphabeticOrder(hyphenWord)).toEqual('cchikopsst');
    });
  
    it("should downcase all characters", function() {
      expect(newAnagram.alphabeticOrder(capitalisedWord)).toEqual('cchikopsst');
    });
  })

  describe("dictionaryGrouper", function() {
    it("creates an object of ordered keys with associated array of anagrams", function() {
      expect(newAnagram.dictionaryGrouper(testWordlist)).toEqual(groupedWordlist);
    });
  })
 

});
