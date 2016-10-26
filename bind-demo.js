let dog = {
  sound: 'woof',
  talk: function(){
    console.log(this.sound)
  }
}

dog.talk() // woof
let talkFunction = dog.talk
// talkFunction(); // undefined because "this" has lost its binding to the dog object

// let us bind this connection

let boundFunction = talkFunction.bind(dog)
boundFunction(); // now this outputs "woof" as well
