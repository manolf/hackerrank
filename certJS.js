function fizzBuzz(n) {
    // Write your code here
    console.log("FizzBuzz-TEST");

    var output = [];

    //console.log(9%3);

    for (let i = 1; i < (n + 1); i++) {

        if (((i % 3) == 0) && (i % 5 != 0)) {
            output.push("Fizz");
            console.log("Fizz");
            //return "Fizz";
        } else if (((i % 5) == 0) && (i % 3 != 0)) {
            output.push("Buzz");
            console.log("Buzz");
            //return "Buzz";
        } else if (((i % 5) == 0) && (i % 3 == 0)) {
            output.push("FizzBuzz");
            //return "FizzBuzz";
            console.log("FizzBuzz");
        } else {
            output.push(i);
            //return i;
            console.log(i);
        }
    }

    for (let i = 0; i < output.length; i++) {
        // return output;

        console.log(output[i]);
    }

    solution.innerHTML = output;
}


function test(arr) {
    console.log("JavaScript Certification: 1.10.2020")
}


class NotesStore {

    addNote(state, name) {

    }



}

function createAnagram(inputstring) {
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

function uniqueArray(inputArray) {
    let unique = {};
    inputArray.forEach(function(i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}




function anagram(dictionary, query) {
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


    for (let i = 0; i < query.length; i++) {

        comparison = createAnagram(query[i]);
        comparison = uniqueArray(comparison);

        console.log(comparison.length);
        console.log(comparison);

        for (let j = 0; j < dictionary.length; j++) {
            for (let l = 0; l < comparison.length; l++) {
                // console.log(dictionary[j] + "== " + comparison[l]);
                if (dictionary[j] == comparison[l]) {

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
    output3.innerHTML = output;

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

}

//PART TWO 

function getMostActiveTraders(customers) {
    console.log("Part two!");

    //first try
    //   function uniqueArray(inputArray) {
    //       let unique = {};
    //       inputArray.forEach(function(i) {
    //           if (!unique[i]) {
    //               unique[i] = true;
    //           }
    //       });
    //       return Object.keys(unique);
    //   }

    //   var customersUnique = uniqueArray(customers);
    //   console.log("customers unique: " + customersUnique);

    //   //create objekt 
    //   var customerList = new Object();


    //   //initialise object with 0 
    //   customerList.Abc = 0;
    //   customerList.Firma2 = 0;

    //   for (let i = 0; i < customersUnique.length; i++) {

    //   	let a = customersUnique[i];
    //       const details = {a: 0 };

    //       // Merge the object with the spread operator
    // customerList = {...customerList, ...details};

    //   }



    //   console.log(Object.keys(customerList) + ": " + Object.values(customerList));

    // Write your code here
    // var count = 0;
    // var output = [];

    // for (let i = 0; i < customers.length; i++) {
    //     for (let j = 0; j < customersUnique.length; j++) {
    //         if (customersUnique[j] == customers[i]) {
    //             count++;

    //         }
    //         output.push(count);
    //         count = 0;
    //     }


    // }

    //second try 
    var customerCounts = customers.reduce(function(obj, customer) {
        console.log(obj, customer);
        if (!obj[customer]) {
            obj[customer] = 1;
        } else {
            obj[customer]++;
        }
        return obj;
    }, {});

    console.log(customerCounts);

    var sumTrades5 = customers.length * 0.05;
    console.log(`5% are ${sumTrades5}`);
    console.log(Object.keys(customerCounts) + ": " + Object.values(customerCounts));


    Object.keys(customerCounts).forEach(key => {
        if (customerCounts[key] < sumTrades5) delete customerCounts[key];
    });

    console.log(customerCounts);




    var output = (Object.keys(customerCounts)).sort();

    //hier kommen die values?!?
    // Object.keys(customerCounts).forEach(key => {
    //         output.push(customerCounts[key]);
    //     });
    console.log(output);

    output4.innerHTML = output;


        //const companiesMinFive = customerCounts.filter(Object.values(customerCounts) => Object.values(customerCounts)> sumTrades5);

        //console.log(companiesMinFive);

        //const evens = numbers2.filter(item => item % 2 === 0);
        //const studentGrades = students.filter(student => student.grade >= 90);
    }


    let allProducts = [{
            "unique_id": "102",
            "currency": "$",
            "price": "529.99",
            "watt": 150
        },
        {
            "unique_id": "11",
            "currency": "$",
            "price": "323",
            "watt": 150
        },
        {
            "unique_id": "13",
            "currency": "$",
            "price": "23",
            "watt": 77
        }
    ]


    function extraLesson() {
        const sum = allProducts.reduce((a, { watt }) => a + watt, (0));
        console.log(sum);

        // var allProducts2 = [{ unique_id: "102", currency: "$", price: "529.99", watt: 150 }, { unique_id: "11", currency: "$", price: "323", watt: 150 }, { unique_id: "13", currency: "$", price: "23", watt: 77 }],
        //     getWatt = _.sumBy(allProducts2, 'watt');

        // console.log(getWatt);


        //example for maps:
        const numbers = [1, 2, 3, 4];
        const doubled = numbers.map(item => item * 2);
        console.log(doubled); // [2, 4, 6, 8]

        const numbers2 = [1, 2, 3, 4];
        const evens = numbers2.filter(item => item % 2 === 0);
        console.log(evens); // [2, 4]

        const students = [
            { name: 'Quincy', grade: 96 },
            { name: 'Jason', grade: 84 },
            { name: 'Alexis', grade: 100 },
            { name: 'Sam', grade: 65 },
            { name: 'Katie', grade: 90 }
        ];

        const studentGrades = students.filter(student => student.grade >= 90);
        console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]


        const numbers3 = [1, 2, 3, 4];
        const sum3 = numbers3.reduce(function(result, item) {
            return result + item;
        }, 0);
        console.log(sum3); // 10


        var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

        var petCounts = pets.reduce(function(obj, pet) {
            console.log(obj, pet);
            if (!obj[pet]) {
                obj[pet] = 1;
            } else {
                obj[pet]++;
            }
            return obj;
        }, {});

        console.log(petCounts);


        /*
        Output:
         { 
            dog: 2, 
            chicken: 3, 
            cat: 1, 
            rabbit: 1 
         }
         */


        var obj = {
            propA: true,
            propB: true,
            propC: false,
            propD: true,
        };

        Object.keys(obj).forEach(key => {
            if (!obj[key]) delete obj[key];
        });

        console.log(obj);

    }