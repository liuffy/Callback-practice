
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
