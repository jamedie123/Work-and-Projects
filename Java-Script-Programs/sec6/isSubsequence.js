/*
Determine if characters in string1, form a subsequence of the characters in string2

isSubsequence('hello', 'hello world') - True
isSubsequence('sing', 'sting') - True
isSubsequence('abc', 'acb') - False, order matters

*/
//Time Complexity: O(n+m)
// Space Complexity: O(1)
// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}