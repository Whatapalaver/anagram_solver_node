
describe("Anagram", function() {
  const Anagram = require('../src/Anagram.js');
  let newWord;
  let word1 = 'chopsticks';

  beforeEach(function() {
    newWord = new Anagram(word1);
  });

  it("should be able to put word in alphabetical order", function() {
    expect(newWord.alphabeticOrder(word1)).toEqual('cchikopsst');
  });
});
