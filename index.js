
function isBalanced(expr){
  var S = [];
  var len = expr.length;
  if((len%2) != 0){
    return false
  }else{

    let prevChar = '';
  for(let i=0;i<expr.length;i++){
    var currentChar = expr[i];
    var prevChar = expr[i-1];

    if(currentChar === '{' || currentChar === '(' || currentChar === '[' ){
      S.push(currentChar);
    }

    if(currentChar === '}' || currentChar === ')' || currentChar === ']' ){
      if(currentChar === '}'){
        if(prevChar === '{' || expr[i-3] === '{' || expr[i-5] === '{'){
          S.push(currentChar);
          continue
        }else{
          return false
          break
        }
      }else if(currentChar === ')'){
        if(prevChar === '(' || expr[i-3] === '(' || expr[i-5] === '('){
          S.push(currentChar);
          continue
        }else{
          return false
          break
        }
      }else if(currentChar === ']'){
        if(prevChar === '[' || expr[i-3] === '[' || expr[i-5] === '['){
          S.push(currentChar);
          continue
        }else{
          return false
          break
        }
      }
}
    }
    return true
  }
}


// Algorithm:
// 1) Declare a character stack S.
// 2) Now traverse the expression string exp.
//     a) If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
//     b) If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else parenthesis are not balanced.
// 3) After complete traversal, if there is some starting bracket left in stack then “not balanced”
