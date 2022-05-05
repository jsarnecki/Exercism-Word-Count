
export const countWords = (str) => {

  // Split string into array of words
  let wordArr = str.split(" ");
  // **Check to see if extra punctuation/white space get their own elements..
  console.log("split", wordArr);


  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i].replaceAll("\n", " ");
    wordArr[i] = wordArr[i].replaceAll(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g, " ").trim();

    if (wordArr[i].includes(" ")) {
      const removedPunc = wordArr[i].split(" ").filter(Boolean);
      wordArr.splice(i, 1);
      for (const word of removedPunc) {
        wordArr.push(word);
      }
    }

    wordArr[i] = wordArr[i].replace(/^'|'$/g, '');
    // Removes quotations beginning and end of word
  }



  console.log("after", wordArr);





  // Remove punctuation if required
  // for (let i = 0; i < wordArr.length; i++) {

  //   const punc = /[.,\/#!$%\^&\*;:{}=\-_`~()]/;
  //   const lineBreak = "\n";

  //   if (punc.test(wordArr[i])) {

  //     console.log("here", wordArr[i]);
  //     wordArr[i] = wordArr[i].replaceAll(lineBreak, " ");
  //     wordArr[i] = wordArr[i].replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");

  //     const removedPunc = wordArr[i].split(" ").filter(Boolean);

  //     wordArr.splice(i, 1);

  //     for (const word of removedPunc) {
  //       wordArr.push(word);
  //     }
  //   }
  // }

  console.log(str, wordArr);

  // Empty result object
  const result = {};
  // Loop thru arr, checking against object to see if key already exists .toLowerCase()!!
  for (const word of wordArr) {
    // Add new word key with count value if non-exist, else up count on current word
    if (result[word.toLowerCase()]) {
      result[word.toLowerCase()]++;
    } else {
      result[word.toLowerCase()] = 1;
    }
  }

  console.log("result", result);
  return result;

};
