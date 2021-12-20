/*
  @param {string} s
  @return {number}
 */

const lengthOfLastWord = (string) =>  {
  let splitWords = string.trim().split(' ')
  
  let lastWord = splitWords[splitWords.length - 1]
  
  return lastWord.length
      
};

/*
parameter is a string

separate each word by space?
  
Then we would have an array of words => capture last strings length

*/