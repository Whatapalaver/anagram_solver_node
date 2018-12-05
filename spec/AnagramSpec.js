
describe("Anagram", function() {
  const Anagram = require('../src/Anagram.js');
  let newWord;
  let word1 = 'chopsticks';
  let hyphenWord = 'chop-sticks';
  let capitalisedWord = 'Chopsticks';

  beforeEach(function() {
    newWord = new Anagram(word1);
  });

  it("should be able to put word in alphabetical order", function() {
    expect(newWord.alphabeticOrder(word1)).toEqual('cchikopsst');
  });

  it("should ignore non alphanumeric characters", function() {
    expect(newWord.alphabeticOrder(hyphenWord)).toEqual('cchikopsst');
  });

  it("should downcase all characters", function() {
    expect(newWord.alphabeticOrder(capitalisedWord)).toEqual('cchikopsst');
  });

});
