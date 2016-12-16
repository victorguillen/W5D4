const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}? eg('yes or no')`, function(answer) {
    if (answer == "yes") {
      callback(true);
    }
    else {
      callback(false);
    }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i === arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  if(i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if(isGreaterThan) {
        let temp = arr[i];

        console.log(`swapping...${i} ${arr}`);

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }

      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
    // console.log(`i: ${i} inside else`);
  }
}
// innerBubbleSortLoop([2,3,1,5], 0, true);

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  // console.log(`beginning bubble sort ${arr}`);
  function outerBubbleSortLoop(madeAnySwaps) {
    // console.log(`entering outerBubbleSortLoop ${arr}`);
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}




absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
//
// askIfGreaterThan(2, 3, function(arg) {
//   if(arg) {
//     console.log("We got a true");
//   }
//   else {
//     console.log("We got false");
//   }
// });
