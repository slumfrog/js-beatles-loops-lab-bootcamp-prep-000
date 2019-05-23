function theBeatlesPlay(musicians, instruments) {
    var empty = [];
    for (var i = 0; i < musicians.length; i++) {
        empty.push(musicians[i] + " plays " + instruments[i]); 
    }
    return empty
}


function johnLennonFacts(arr) {
    var result= [];        // create an empty array called result
    var i = 0;              // set our counter to 0
    while(i < arr.length) { // if our counter is less than the number of quotes
    result.push(arr[i] + '!!!') // store in array called results, and add '!!!'
    i++;                        // loops to beginning
  }
  return result;            // returns result
}


function iLoveTheBeatles(num){
  var love = []
  do { 
    love.push("I love the Beatles!")
  }
    while (var i = 0; i < num; i++)
  return love;
}


