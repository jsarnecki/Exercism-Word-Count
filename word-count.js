
export const countWords = (str) => {

  let wordArr = str.split(" ");

  for (let i = 0; i < wordArr.length; i++) {

    wordArr[i] = wordArr[i].replaceAll("\n", " ");
    // Replace linebreaks with spaces to split and push later
    wordArr[i] = wordArr[i].replaceAll(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g, " ").trim();
    // Replace punctuation with a space, and remove the surrounding whitespace

    if (wordArr[i].includes(" ")) {
      // If space exists, there are words to be split and added to array individually
      const removedPunc = wordArr[i].split(" ").filter(Boolean);
      // Filter out falsy values
      wordArr.splice(i, 1);
      // Remove the current split string to replace

      for (const word of removedPunc) {
        wordArr.push(word);
      }
    }

    wordArr[i] = wordArr[i].replace(/^'|'$/g, '');
    // Removes quotations beginning and end of word
  }

  wordArr = wordArr.filter(Boolean);
  // Filter out falsy values
  const result = {};
  // Empty result object

  for (const word of wordArr) {
    // Loop thru arr, checking against object to see if key already exists
    if (result[word.toLowerCase()]) {
      // Add new word key with count value if non-exist, else up count on current word
      result[word.toLowerCase()]++;
    } else {
      result[word.toLowerCase()] = 1;
    }
  }

  return result;
};
