let isBalanced = (string) => {
  // if theres an odd number of elements it will never be balanced
  if (string.length % 2 !== 0) return false

  const PAIRS = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  const closing = Object.keys(PAIRS)
  let openingStack = [];

  let arr = string.split('');

  while (arr.length > 0) {
    // remove the first item
    let first = arr.shift();

    if (!closing.includes(first)) {
      // if its an opening bracket add it to opening stack
      openingStack.push(first);
    } else if (openingStack.length === 0) {
      // we got a closing bracket before an opening, it's unbalanced
      return false
    } else {
      // check if this closing bracket correspons to the last opening bracket
      if (PAIRS[first] !== openingStack.pop()) {
        return false
      }
    }
  }

  return true
}
