/*let s1 = "hello world";
// ardaas ni hewleh

const lengthOfLastWord = function (s) {
  let lastWordLength = 0;
  let isFindLAstWord = false;
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (char !== " ") {
      isFindLAstWord = true;
      lastWordLength++;
      console.log(s[i]);
    } else {
      if (isFindLAstWord) {
        return lastWordLength;
      }
    }
  }
};
console.log(lengthOfLastWord(s));

const lengthOfLastWord2 = (s) => {
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};*/
let s = "A man, a plan, a canal: Panama";

const isPalindrome = function (s) {
  const num = s.trim().split(" ");
  let palindrome = " ";
  for (let i = s.length - 1; i >= 0; i--) {
    palindrome === s[i];

    if (num === palindrome) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isPalindrome(s));
