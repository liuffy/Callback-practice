//EXAMPLE 1

function mySandwich(param1, param2, sandwichCallback){
  console.log(`Started eating a sandwich containing ${param1} and ${param2}`)
  sandwichCallback(); //call back
}

mySandwich('ham', 'cheese', function(){ // here's where sandwich callback is actually defined
  console.log('Finished eating my sandwich!')
});

//EXAMPLE 2

let calc = function(num1, num2, calcCallback){
  return calcCallback(num1, num2);
};

let add= function(a,b){
  return a + b;
}


// console.log(calc(2,3,add));
