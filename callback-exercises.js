
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
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();



// addNumbers
//
// Let's write a function that will read several numbers, one after another, and sum up the
// total. After each number, let's print out the partial sums along the way, and pass the
// total sum to a callback when done.
//
// First off, use readline.createInterface to create a global variable, reader. Use
// process.stdin/process.stdout like I do in my examples.
//
// Next, write a function, addNumbers(sum, numsLeft, completionCallback):
//
// If numsLeft > 0, then:
// Prompt the user for a number (use reader).
// Pass a callback that:
// Uses parseInt to parse the input.
// Increment the sum and console.log it.
// Recursively calls addNumbers again, passing in:
// the increased sum,
// the decreased numsLeft,
// and the same completionCallback.
// If numsLeft === 0, call completionCallback(sum) so that the total sum can be used.
// To test, try out:
//
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// This should prompt for three numbers, printing out the partial sums and then the final,
// total sum.
//




// absurdBubbleSort
//
// In this exercise, we write a method called absurdBubbleSort(arr, sortCompletionCallback).
// Instead of using the traditional >, we'll prompt the user to perform each comparison for
// us.

// >> Read Readme file





// Function Calling
//
// Write your own myBind(context) method. Add it to Function.prototype. You'll want to:
//
// Return an arrow function.
// The arrow function captures this and context.
// In the anonymous function, call Function.prototype.apply on this, passing the context.
// Assume the method you're binding doesn't take any arguments; we'll see tomorrow how to
// use the rest and spread operators to fix this.
//
// How would you test your "bind" method out? Try out this example code:
//
// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }
//
// const turnOn = function() {
//    console.log("Turning on " + this.name);
// }
//
// const lamp = new Lamp();
//
// turnOn(); // should not work the way we want it to
//
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
