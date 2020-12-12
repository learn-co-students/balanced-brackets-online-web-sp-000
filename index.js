function isBalanced(str) {
    let pairs = {
        "[" : "]",
        "(" : ")",
        "{" : "}",
    }

    let brackets = [];

    for (let char of str) {
        if (pairs[char]) {
            brackets.push(char);            
        } 
        else if (char === pairs[brackets[brackets.length-1]]) {
            brackets.pop();
        }
    }

    return brackets.length === 0;
}