function forLoop(array) {
  for( var i = 0; i < 25; i++ ) {
    if( i === 1 ) {
      array.push(`I am 1 strange loop.`);      
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  var countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

var i = 0; 
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    incrementVariable(array);
  } while (array.length > 0 && incrementVariable());
  return array;
}