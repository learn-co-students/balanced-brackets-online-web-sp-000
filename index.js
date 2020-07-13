function isBalanced(string)
{
  if(string === '')
  {
    return true
  }
  else if(isOdd(string.length))
  {
    return false
  }
  else if(string[0] === string[1])
  {
    let edgeCase = string.slice(1)
    let index = partnerTest(edgeCase)
    let resolved = edgeCase.slice(0, 1) + edgeCase.slice(index + 1, edgeCase.length)
    if(isBalanced(resolved))
    {
      return true
    }
  }
  else
  {
    let inside = insideBrackets(string)
    if(isBalanced(inside))
    {
      let next = removeBalancedBrackets(string)
      if(isBalanced(next))
      {
        return true
      }
      else
      {
        return false
      }
    }
    else
    {
      return false
    }
  }
}


function removeBalancedBrackets(string)
{
  if(string[0] == '{')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == '}')
      {
        return string.substring(j + 1)
      }
    }
  }
  else if(string[0] == '(')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ')')
      {
        return string.substring(j + 1)
      }
    }
  }
  
  else if(string[0] == '[')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ']')
      {
        return string.substring(j + 1)
      }
    }
  }
}


function insideBrackets(string)
{
  if(string[0] == '{')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == '}')
      {
        return string.slice(1, j)
      }
    }
  }
  
  else if(string[0] == '(')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ')')
      {
        return string.slice(1, j)
      }
    }
  }
  
  else if(string[0] == '[')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ']')
      {
        return string.slice(1, j)
      }
    }
  }
}

function isOdd(length)
{
  if(length % 2 === 0)
  {
    return false
  }
  else
  {
    return true
  }
}

function partnerTest(string)
{
  if(string[0] == '{')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == '}')
      {
        return j
      }
    }
  }
  
  else if(string[0] == '(')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ')')
      {
        return j
      }
    }
  }
  
  else if(string[0] == '[')
  {
    for(let j = 0; j < string.length; j++)
    {
      if(string[j] == ']')
      {
        return j
      }
    }
  }
  else if (string === '')
  {
    return true
  }
}

function edgeCase(string)
{
  if((string[0] === '(' || string[0] === '{' || string[0] === '[') && string[0] === string[1])
  {
    return true
  }
  else
  {
    return false
  }
}