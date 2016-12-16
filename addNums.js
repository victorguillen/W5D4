const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  let acc = sum;
  if(numsLeft > 0) {
    reader.question("Give a number: ", function(answer) {
      let num = parseInt(answer);
      acc += num;
      console.log(`Your partial sum is ${acc}`);
      numsLeft -= 1;
      addNumbers(acc, numsLeft, completionCallback);
    });
  }
  else {
    reader.close();
    return completionCallback(acc);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
