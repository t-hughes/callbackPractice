/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });



and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



//Code Here for first
function first(arr, cb) {
    cb(arr[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName) {
    console.log('The first name in names is ' + firstName);
});

/*names.forEach(function(item){
  console.log(item);
}) */ //this is an example of why you would use a callback. This will print each name out in the array without using a traditional for loop///////////////

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for last
function last(arr, cb) {
    cb(arr[arr.length - 1]);
} ///this is the resuable function///

last(names, function(lastName) {
    console.log('The last name in names is ' + lastName);
}); ///this is the invocation of the above function///





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



//Code Here for multiply
function multiply(num1, num2, cb) {
    cb(num1 * num2);
}

multiply(4, 3, function(answer) {
    console.log('The answer is ' + answer); //should console.log 12
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];



//Code Here for contains
function contains(arr, str, cb) {
    var itsThere = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            itsThere = true;
        }
    }
    cb(itsThere);
}

contains(names, 'Colt', function(result) {
    if (result === true) {
        console.log('Colt is in the array');
    } else {
        console.log('Colt is not in the array');
    }
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];


  //Code Here for uniq
  function uniq(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
      for (var x = 0; x < arr.length; x++) {
        if (i !== x) {
          if (arr[i] === arr[x]) {
          arr.splice(x, 1);
          }
        }
      }
    }
      cb(arr);
  }




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];



//Code Here for each
function each(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i); ///calling below function for each item that is in the array///
    }
}
each(names, function(item, indice) {
    console.log('The item in the ' + indice + ' position is ' + item);///this is doing the loop///
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



//code here for getUserById

var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
}, {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
}, {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
}, ];

function getUserById(arr, str, cb){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].id === str){
      return cb(arr[i]);
    }
  }
}

getUserById(users, '16t', function(user) {
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
