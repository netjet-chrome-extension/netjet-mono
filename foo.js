// Complete the braces function below.


const isOpening = function(v){
  return ['(', '{', '['].includes(v);
};


const isClosing = function(v){
  return [']', '}', ')'].includes(v);
};


const isOpposite = function(a, b){
   if(a === '(' ){
     return b === ')';
   }
   
   if(a === '{'){
     return b === '}';
   }
   
   if(a === '['){
     return b === ']';
   }
};


function braces(values) {
  

  return values.map(v => {
    
    const stack = [];
    
    for (let c of v) {
      
      if(isOpening(c)){
        stack.push(c);
        continue;
      }
      
      if(isClosing(c)){
        const last = stack[stack.length - 1];
        console.log('zzzz',last,c);
        if(isOpposite(last,c)){
          console.log('popping');
          stack.pop();
        }
        else{
          console.log('nein');
          return 'NO';
        }
      }
    }
    
 
    console.log('stack:',stack);
    return stack.length ? 'NO' : 'YES';
    
  });
}

console.log(braces(['{}[]()', '{[}]']));

console.log(braces([
  '{[()]}',
  '{[(])}',
  '{{[[(())]]}}'
]));