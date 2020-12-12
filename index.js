function isBalanced(str) {
    let pairs = {
        "[" : "]",
        "(" : ")",
        "{" : "}",
        "]" : "[",
        ")" : "(",
        "}" : "{"
    }

    let brackets = []

    for (let i = 0; i < str.length; i++) {
        let pair = pairs[str[i]];
        
        if (brackets.length === 0 || brackets[brackets.length-1] !== pair) {
            brackets.push(str[i]);
        } else {
            brackets = brackets.slice(0, brackets.length-1);
        }
    }

    return brackets.length === 0;
}

console.log(isBalanced("([])[{}]{(([))}"));