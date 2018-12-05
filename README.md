Anagram Solver - JavaScript
====

Imagine you are in a work environment, and a colleague has asked you to create a simple interactive application which can solve anagrams.

For a word entered by the user, generate a list of all possible anagrams contained in this [wordlist](http://codekata.com/data/wordlist.txt).

For instance, if the user enters paste, your program should produce the results pates, peats, septa, spate, tapes, and tepas.

Consider especially how we will know if your code is correct, without having to run it exhaustively against the entire word list.

You may also wish to consider how your code handles edge cases such as hyphenated words. 

## _User Stories_

---

```
As a player

```

```
As a player

```

```
As a player

```

## _Discussion_  

---

### _How I approached the problem?_

As you are looking for familiarity with javascript I decided that I would create an initial solution in node.js with jasmine for testing. This would allow me to generate a simple CLI interpretation in the time allotted. I then intended to produce a second interpretation in React, to demonstrate my ability to use frontend frameworks.

First code written was the test for ordering characters in a word.

### _Key design decisions and alternatives did considered_

I spent some time thinking about the challenge before I started, I wanted to consider some different options before following the TDD path. I considered:

- create a shuffle alogorithm to generate every possible combination of characters and then test each against the allowed wordlist - this sounded painfully inefficient!
- amend the allowed wordlist to a key value pair combination with the key being the word sorted alphabetically by character. That would allow me to apply a similar sorting to the submitted word and just extract matches from the wordlist - sounds better...

I also needed to decide how to deal with non-alphanumeric characters such as hyphens and apostrophes. In the short term I decided it might be sensible to exclude these from consideration.


### _How do I envision the solution evolving in the future?_

Future refactoring would relate to performance improvements. Ideally looping would be minimised over such a large dataset. Funtional methods are likely to be more efficient.

If I kept to similar approach of reordering the wordlist by sorted characters, there might be a further efficiency gain if I split further into word length, thereby minimising the dataset for matching.

My immediate next step is to create an interactive GUI.

To Use
---

- Clone or fork this project `git clone https://github.com/Whatapalaver/anagram_solver_node.git`
- Change into the directory `cd anagram_solver_node`
- Install dependencies `npm install`
- You can run from the command line using the test word as an argument eg: `node ./src/Main.js cat` This would return the anagrams for "cat"

To test
---

- `npm run test` (runs jasmine in CLI for Node.js)
