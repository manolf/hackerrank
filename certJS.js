


function fizzBuzz(n) {
    // Write your code here
    console.log("FizzBuzz-TEST");
    
    var output = [];

    //console.log(9%3);

for (let i = 1; i < (n+1); i++){
    
        if (((i%3)== 0) && (i%5 != 0)){
        output.push("Fizz");
        console.log("Fizz");
        //return "Fizz";
    } else if (((i%5)== 0) && (i%3 != 0)){
        output.push("Buzz");
        console.log("Buzz");
         //return "Buzz";
    } else if (((i%5)== 0) && (i%3 == 0)){
       output.push("FizzBuzz");
       //return "FizzBuzz";
       console.log("FizzBuzz");
    } else {
        output.push(i);
        //return i;
        console.log(i);
    }
}

for (let i = 0; i < output.length; i++){
   // return output;

console.log(output[i]);
}

solution.innerHTML = output;
}


function test(arr){
	console.log("JavaScript Certification: 1.10.2020")
}


class NotesStore {

	   addNote(state,name){
        
    }

    
    
}

function createAnagram(inputstring){
      var arrayAnagram = [];

    if (inputstring.length == 1) {
    arrayAnagram.push(inputstring);
    return arrayAnagram;
  }

    for (let i = 0; i < inputstring.length; i++) {
    var firstChar = inputstring[i];
    var charsLeft = inputstring.substring(0, i) + inputstring.substring(i + 1);
    var innerPermutations = createAnagram(charsLeft);
    for (let j = 0; j < innerPermutations.length; j++) {
      arrayAnagram.push(firstChar + innerPermutations[j]);
    }
  }
  return arrayAnagram;
}

function uniqueArray(inputArray){
     let unique = {};
  inputArray.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}




function anagram (dictionary, query){
// return dictionary: 
/*heater
cold
clod
reheat
docl*/

//return query:
/*
codl
heater
abcd */

console.log("anagram");

console.log("dictionary: " + dictionary);
console.log("query: " + query);
var comparison = [];
var output = [];
var count = 0;


for (let i = 0; i < query.length; i++){

    comparison =createAnagram(query[i]);
    comparison = uniqueArray(comparison);

    console.log(comparison.length);
    console.log(comparison);

    for (let j = 0; j < dictionary.length; j++){
       for (let l = 0; l < comparison.length; l++){
          // console.log(dictionary[j] + "== " + comparison[l]);
        if (dictionary[j] == comparison[l]){

            count++;
            console.log(comparison[l] + " " + dictionary[j] + " count: " + count);
            
        }

        }    
   
    }
   
 output.push(count);
    count = 0;
 //   comparison = [];

 

}

console.log("soll: 3 2 0");
console.log(output);


/*
function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}*/


function mostActive(customers) {
    
    function uniqueArray(inputArray){
     let unique = {};
  inputArray.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}



var customersUnique = uniqueArray(customers);
    // Write your code here
    var count = 0;
    var output = [];
    
    for (let i = 0; i< customers.length;i++){
        for (let j = 0; j< customersUnique.length;j++){
            if(customersUnique[j] == customers[i]){
                count++;
                
            }
            output.push(count);
            count = 0;
        }
        
        
    }

}



}