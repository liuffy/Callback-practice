
// Timing is Everything
//
// Use setInterval to build a small clock in your terminal. It should display the current
// time every second. However, you can only query the system time once. Your clock must
// store that time, increment it, and display it in HH:MM:SS (use 24hr format).
//
// Make a Clock class. Calling new Date() will give us an object that represents the current
// system time. Because you can only do this once, do it in your Clock constructor. Don't
// bother keeping this Date object around because you won't need it anymore. Just store the
// hours, minutes, and seconds. Look at the Date docs for help here.
//
// You'll also need to schedule a Clock.prototype._tick callback that updates the time and
// calls printTime method. Don't worry about padding zeroes in the format. Just focus on the
// basic logic and functionality.
//
class Clock {
  constructor() {
    // 1. Create a Date object.
    const currentTime = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    // 3. Call printTime.

    this.printTime();
    // 4. Schedule the tick at 1 second intervals.

    // SET intervals
    // EX: setInterval(function(){ alert("Hello"); }, 3000);
    // does function every X millliseconds
    setInterval(this._tick.bind(this), 1000); // bind...what are you?
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = [this.hours, this.minutes, this.seconds].join(":");
    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();
    // 2. Call printTime.
    this.printTime();
  }

  _incrementSeconds(){

    this.seconds += 1
    if (this.seconds === 60){
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes(){
    this.minutes += 1
    if (this.minutes === 60){
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours(){
    this.hours = (this.hours + 1) % 24; // smart way to loop time
  }
}

// const clock = new Clock();



// addNumbers
//
// Let's write a function that will read several numbers, one after another, and sum up the
// total. After each number, let's print out the partial sums along the way, and pass the
// total sum to a callback when done.
//
// First off, use readline.createInterface to create a global variable, reader. Use
// process.stdin/process.stdout like I do in my examples.

  const readline = require('readline');

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // If numsLeft > 0, then:
  // Prompt the user for a number (use reader).
  function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0){
      reader.question('Give me a number: ', function(number){
        // Uses parseInt to parse the input.
        const num = parseInt(number);
        sum += num;
        console.log(`Partial sum: ${sum}`);

        // Recursively calls addNumbers again, passing in:
        // the increased sum,
        // the decreased numsLeft,
        // and the same completionCallback.
        addNumbers(sum, numsLeft - 1, completionCallback); // recursively call itself
      });
    } else {
      // If numsLeft === 0, call completionCallback(sum) so that the total sum can be used.
      completionCallback(sum);
      reader.close();
    }

  }

// Testing
// console.log(addNumbers(2,4,function(sum){
//   console.log(`Here's your final sum: ${sum}`)
// }));



// absurdBubbleSort
//
// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.

  reader.question(`Is ${el1} greater than ${el2}?`, function(answer){
    if (answer === "yes"){
      callback(true);
    } else {
      callback(false);
    }
  });
}
// Next, write a method innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop).
// This recursive function should:
  // If i < arr.length - 1, it should call askIfGreaterThan, asking the user to compare arr[i] and arr[i + 1].
  // For a callback to askIfGreaterThan, pass in an anonymous helper function. This should:
  // Take in a single argument: isGreaterThan; askIfGreaterThan will pass either true or false as this argument.
  // Perform a swap of elements in the array if necessary.
  // Call innerBubbleSortLoop again, this time for i + 1. It should pass madeAnySwaps. Update madeAnySwaps if you did swap.
  // Call outerBubbleSortLoop if i == (arr.length - 1). It should receive madeAnySwaps as an argument.
  function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1){
      outerBubbleSortLoop(madeAnySwaps); // at the end of the array, if we've made any swaps, we'll
      // (madeAnySwaps = true) either restart the innerloop;
      // (madeAnySwaps = false) OR we'll call the completionCallback and yield the result
    } else { // anywhere else in the array
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
        // isGreaterthan will pass either true or false from the
        if (isGreaterThan){ // if true
          const actualBigger = arr[i]; // swap
          arr[i] = arr[i + 1]; // set el1 as the smaller variable
          arr[i+1] = actualBigger; // set el2 as the earlier variable

          madeAnySwaps = true; // a swap has been made
        }
          innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
      };
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps){ // restart for another round
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else{
      sortCompletionCallback(arr);
      reader.close();
    }
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}


// Test it out
// absurdBubbleSort([2,5,3,7,6,9,1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });
//


// Function Calling
//
// Write your own myBind(context) method. Add it to Function.prototype. You'll want to:
//
// In the anonymous function, call Function.prototype.apply on this, passing the context.
// Assume the method you're binding doesn't take any arguments; we'll see tomorrow how to
// use the rest and spread operators to fix this.


Function.prototype.myBind = function (context){
  // Return an arrow function.
  // The arrow function captures this and context.
  return () => this.apply(context); // apply is one of many ways to apply functions
}
// How would you test your "bind" method out? Try out this example code:

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
