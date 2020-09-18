function isBalanced(str){
  let testStr = str;
  let startingLen = str.length;
  let endingLen = -1;

  while (testStr.length > 0){
    if (startingLen === endingLen)
      return false;

    startingLen = testStr.length;
    testStr = testStr.replace(/\[\]/gi, '');
    testStr = testStr.replace(/\(\)/gi, '');
    testStr = testStr.replace(/\{\}/gi, '');
    endingLen = testStr.length;
  }
  return true;
}
