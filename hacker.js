// Complete the compareTriplets function below.
//a = [5, 6, 7];
//b = [3, 6, 10];

//compareTriplets(a,b);

function compareTriplets(a, b) {

    console.log("--COMPARE TRIPLETS--");

    //Testoutput Start: check inputarray
    console.log("ARRAY a: ")
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    console.log("ARRAY b: ")
    for (let i = 0; i < b.length; i++) {
        console.log(b[i]);

    }

    var sumA = 0;
    var sumB = 0;

    var outputArray = new Array();

    for (let i = 0; i < a.length; i++) {

        if (a[i] > b[i]) {
            sumA += 1;
            console.log(sumA);

        } else if (a[i] < b[i]) {
            sumB += 1;
            console.log(sumB);
        } else {
            sumA += 0;
            sumB += 0;
        }

    }

    outputArray.push(sumA);
    outputArray.push(sumB);

    console.log("Output Array A: " + outputArray[0]);
    console.log("Output Array B: " + outputArray[1]);

    outputB.innerHTML = outputArray[0] + " " + outputArray[1];

    //return outputArray;
}

// EXERCISE 2

/*
  arr = [];
arr[0] = 3;
arr[1] = [11, 2, 4];
arr[2] = [4, 5, 6];
arr[3] = [ 10, 8, -12];

console.log(arr);
*/

//arr_neu= [arr[0], arr[1][0], arr[1][1], arr[1][2], arr[2][0], arr[2][1], arr[2][2], arr[3][0], arr[3][1], arr[3][2]];

/*
arr_neu= [arr[0]];

for (i=1; i<(arr[0]+1); i++){
  for (j=0; j<arr[0]; j++){
  arr_neu.push(arr[i][j]);
}
} */

/*for (i = 0; i< arr.length; i++){
  for (j= 0; j< arr[j].length;j++){
    arr_neu.push(arr[i][j]);
  }
} */

/*
console.log("outputnew");
console.log(arr_neu[0]);
console.log(arr_neu[1]);
console.log(arr_neu[2]);
console.log(arr_neu);
*/

array2 = [3,
    11, 2, 4,
    4, 5, 6,
    10, 8, -12
];
//console.log(array2);

function diagonalDifference(array2) {
    console.log("--DIAGONAL DIFFERENCE--");
    var len = array2[0];
    console.log("matrix: " + len + "x" + len);

    var sumLeft = 0;
    var sumRight = 0;


    for (let i = 1; i < array2.length; i += (len + 1)) {
        sumLeft += array2[i];

        console.log(sumLeft);
    }

    console.log("sumLeft= " + sumLeft);

    for (let i = len; i < (array2.length - len + 1); i += (len - 1)) {
        sumRight += array2[i];

        console.log(sumRight);
    }

    console.log("sumRight= " + sumRight);

    sumAbs = Math.abs(sumRight - sumLeft);
    console.log("sumAbs= " + sumAbs);

    output15.innerHTML = sumAbs;

    return sumAbs;


}


//EXERCISE 3

var n;

function buildStairway(n) {

    console.log("--STAIRCASE EXERCISE--");
    console.log("n = " + n);

    let i = 1;

    while (i < (n + 1)) {

        for (i = 1; i < (n + 1); i++) {
            console.log((n - i) + " * -");
            console.log(i + " * #");
        }
    }

    console.log("test");
    for (i = 1; i < 5; i++) {
        for (j = 5; j > 0; j--) {
            console.log('#');
        }
        console.log('*');
    }

    /*

     for (let j= n; j>0; j--){
       console.log('-');
    }
    for (let i = 0; i< n; i++){
      console.log('*');
    } */

}

//EXERCISE 4 Plus Minus
//array4 =[-4, 3, -9, 0, 4, 1];

function plusMinus(array4) {
    console.log("--CALCULATE PLUS MINUS DISTRIBUTION--");

    /*
    //Testoutput
      for(let x = 0; x < array4.length; x++){
        console.log (array4[x]);
      }
      */

    var sumPlus = 0;
    var sumMinus = 0;
    var sumZero = 0;


    for (let i = 0; i < array4.length; i++) {
        if (array4[i] > 0) {
            //console.log(sumPlus);
            sumPlus++;
        } else if (array4[i] < 0) {
            sumMinus++;
        } else {
            sumZero++;
        }
    }

    console.log((sumPlus / array4.length).toFixed(6));
    console.log((sumMinus / array4.length).toFixed(6));
    console.log((sumZero / array4.length).toFixed(6));

    output4.innerHTML = (sumPlus / array4.length).toFixed(6) + "<br>" + (sumMinus / array4.length).toFixed(6) + "<br>" + (sumZero / array4.length).toFixed(6);
}



//EXERCISE 5
// Complete the miniMaxSum function below.
function miniMaxSum(array5) {
    console.log("--CALCULATE MIN and MAX--");

    //all possible sums of 4 elements
    var sumw1 = array5[1] + array5[2] + array5[3] + array5[4];
    var sumw2 = array5[0] + array5[2] + array5[3] + array5[4];
    var sumw3 = array5[0] + array5[1] + array5[3] + array5[4];
    var sumw4 = array5[0] + array5[1] + array5[2] + array5[4];
    var sumw5 = array5[0] + array5[1] + array5[2] + array5[3];

    //calculate min and max

    var min = Math.min(sumw1, sumw2, sumw3, sumw4, sumw5);
    var max = Math.max(sumw1, sumw2, sumw3, sumw4, sumw5);

    console.log(min + " " + max);
    output5.innerHTML = (min + " " + max);

}


//EXERCISE 6
/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    console.log("--birthdayCakeCandles--");
    // Write your code here

    //  console.log(candles[0]);



    var xtall = 0;
    //calculate Max:

    for (let i = 0; i < candles.length; i++) {

        if (candles[i] > xtall) {
            xtall = candles[i];
            console.log("aktuelles xtall: " + xtall);
        }
    }

    //calculate count
    var count = 0;
    for (let i = 0; i < candles.length; i++) {

        if (candles[i] == xtall) {
            count++;
            console.log("aktueller count: " + count);
        }
    }

    console.log(count);
    output6.innerHTML = count;

}

//EXERCISE 7
function timeConversion(s) {
    console.log("--TIME CONVERSION--");

    //STEP1 : AM oder PM --> substring
    /*
       Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
    */
    // var stringA = '07:11:45PM';

    // console.log(stringA.substring(8,10));
    // console.log(stringA.slice(0,8));

    // console.log("Time: " + stringA.slice(0,2));

    if ((s.substring(8, 10) == 'AM') && (s != '12:00:00AM')) {
        console.log(s.slice(0, 8));
        output7.innerHTML = (s.slice(0, 8));
    } else if ((s.substring(8, 10) == 'PM') && (s != '12:00:00AM')) {
        // console.log("schöpfen!");
        //String -> Number + 12 h
        var hour = Number(s.slice(0, 2)) + 12;

        // console.log(hour);
        var stringhour = hour.toString();
        console.log(stringhour + s.slice(2, 8));
        output7.innerHTML = (stringhour + s.slice(2, 8));
    } else if (s == '12:00:00AM') {
        console.log('00:00:00');
        output7.innerHTML = ('00:00:00');
    } else if (s == '12:00:00PM') {
        console.log('24:00:00');
        output7.innerHTML = ('24:00:00');
    } else {
        console.log("invalid input");
    }


}


//Exercise 8: APPLES AND ORANGES

function countApplesAndOranges(s, t, a, b, apples, oranges) {

    console.log("--COUNT APPLES AND ORANGES--");

    // input: ('7, 11, 5, 15, [-2, 2, 1], [5, -6]')

    var goal = t - s; //4
    var applesInReach = 0;
    var orangesInReach = 0;
    console.log(goal);

    for (let i = 0; i < apples.length; i++) {
        if ((a + apples[i] >= s) && (a + apples[i] <= t)) {
            applesInReach++;
        }
    }

    for (let j = 0; j < oranges.length; j++) {
        if ((b + oranges[j] >= s) && (b + oranges[j] <= t)) {
            orangesInReach++;
        }
    }

    console.log("apples: " + applesInReach + " oranges: " + orangesInReach);
    output8.innerHTML = applesInReach + " " + orangesInReach;

}

//EXERCISE 9: KANGAROO
// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    // kangaroo(0 3 4 2)

    console.log("-- DO THE KANGAROOs MEET?! --");

    var output = 'NO';
    var count = 0;
    var k1 = x1;
    var k2 = x2;


    while ((output == 'NO') && (count < 100)) {

        if (k1 == k2) {
            output = 'YES';

        } else if (k1 != k2) {
            k1 += v1;
            k2 += v2;
            count++;
            console.log("Durchgang: " + count + " Känguruh 1 bei " + k1 + ", Känguruh 2 bei " + k2);
        }

    }


    console.log(output);
    output9.innerHTML = output;

}


//EXERCISE 10: grading Students
function gradingStudents(grades) {

    output10.innerHTML = " <br>";
    let output = [];

    console.log("--GRADING gradingStudents --");

    console.log(73 % 5);

    for (let i = 0; i < grades.length; i++) {
        if ((grades[i] < 38) || ((grades[i] % 5) < 3)) {
            console.log(grades[i]);
            output10.innerHTML += grades[i] + "<br>";
            output.push(grades[i]);
        } else if ((grades[i] >= 38) && (grades[i] % 5) >= 3) {
            console.log(Math.round((grades[i]) / 5) * 5);
            output10.innerHTML += (Math.round((grades[i]) / 5) * 5) + "<br>";
            output.push(Math.round((grades[i]) / 5) * 5);

        }
    }
}

//EXERCISE 11: MAGIC SQUARE 3x3

function magicSquare([
    [a, b, c],
    [d, e, f],
    [g, h, i]
]) {

    console.log("--Calculate MIN COST to TURN SQUARE into a MAGIC SQUARE");

    // input Square([[5, 3, 4], [1, 5, 8], [6, 4, 2]]

    var input = [a, b, c, d, e, f, g, h, i];

    console.log("Input Array: ");

    for (let i = 0; i < input.length; i++) {
        console.log("i: " + i + " " + input[i]);
    }

    //Existing 8 permutations of 3x3 magic squares:

    /*
    ms_eight = 
                [[8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ]], 
                [[6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ]], 
                [[4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ]], 
                [[2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ]], 
                [[8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ]], 
                [[4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ]], 
                [[6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ]], 
                [[2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ]] 

    ;
    */


    //necessary for Hacker: 
    // var ms_eight_9 = new Array();

    ms_eight_9 = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ]

    ;

    //console.log("input square 3x3: " + [a, b, c ] + " " +  [d,e,f ] + " " + [ g, h, i ]);

    /*
    console.log("8 magic squares 1 : " + ms_eight[0][0] + " " +  ms_eight[0][1] + " " +  ms_eight[0][2] + " "+ ms_eight[1][0] + " " +  ms_eight[1][1] + " " +  ms_eight[1][2] + " "+ ms_eight[2][0] + " " +  ms_eight[2][1] + " " +  ms_eight[2][2] );
    console.log("<hr>");
    console.log("[a, b, c ] - ms_eight[0][0] : " + ([a, b, c ] - ms_eight[0][0]) ); //nan
    console.log("[a, b, c ] - [d , e ,f ] : " + ([a, b, c ] - [d , e , f ] ));      //nan
    console.log("ms_eight[0][0] - ms_eight[0][1] : " + (Number(ms_eight[0][0]) - Number(ms_eight[0][1]) )); //nan

    console.log("Number(a) - Number(b): " + ( Number(a) - Number(b)));

    */

    //neue Matrix mit 9 elementen
    console.log("Matrix 9:");


    //test
    /*
    console.log(ms_eight_9[0]);
    console.log(ms_eight_9[1]);
    console.log(ms_eight_9[0][0]);
    console.log(ms_eight_9[0][7]);
    console.log(ms_eight_9[7][7]);
    console.log(ms_eight_9[7][8]);
    */

    var delta = [];

    for (let i = 0; i < ms_eight_9.length; i++) {
        for (let j = 0; j < 9; j++) {

            //all magic eights
            console.log("MS i " + i + " j: " + j + " :" + ms_eight_9[i][j] + " delta: " + Math.abs(input[j] - ms_eight_9[i][j]));

            // console.log("MS" + i + ": " + ms_eight[i][j] + " " +  ms_eight[i][1] + " " +  ms_eight[i][2] );

            //difference to all magic eights
            /*console.log("delta to input array");

            console.log (Math.abs(input[j] - ms_eight_9[i][j]));
            */

            //push all deltas in array
            delta.push(Math.abs(input[j] - ms_eight_9[i][j]));
        }
        //console.log("MS" + i + ": " + ms_eight[i][0]  + " " +  ms_eight[i][1] + " " +  ms_eight[i][2] )


    }


    //calculate Min_DELTA
    console.log("Calculate Min Delta to input array: ");
    console.log("length array: " + delta.length);

    var sumDelta1 = 0;
    var sumDelta2 = 0;
    var sumDelta3 = 0;
    var sumDelta4 = 0;
    var sumDelta5 = 0;
    var sumDelta6 = 0;
    var sumDelta7 = 0;
    var sumDelta8 = 0;


    for (let i = 0; i < 9; i++) {
        sumDelta1 += delta[i]
        console.log(delta[i]);
    }

    for (let i = 9; i < 18; i++) {
        sumDelta2 += delta[i]
    }

    for (let i = 18; i < 27; i++) {
        sumDelta3 += delta[i]
    }

    for (let i = 27; i < 36; i++) {
        sumDelta4 += delta[i]
    }

    for (let i = 36; i < 45; i++) {
        sumDelta5 += delta[i]
    }

    for (let i = 45; i < 54; i++) {
        sumDelta6 += delta[i]
    }

    for (let i = 54; i < 63; i++) {
        sumDelta7 += delta[i]
    }

    for (let i = 63; i < 72; i++) {
        sumDelta8 += delta[i]
    }



    console.log("sumDelta1: " + sumDelta1);
    console.log("sumDelta2: " + sumDelta2);
    console.log("sumDelta3: " + sumDelta3);
    console.log("sumDelta4: " + sumDelta4);
    console.log("sumDelta5: " + sumDelta5);
    console.log("sumDelta6: " + sumDelta6);
    console.log("sumDelta7: " + sumDelta7);


    console.log("MINIMUM Delta: " + Math.min(sumDelta1, sumDelta2, sumDelta3, sumDelta4, sumDelta5, sumDelta6, sumDelta7, sumDelta8));

    output11.innerHTML = Math.min(sumDelta1, sumDelta2, sumDelta3, sumDelta4, sumDelta5, sumDelta6, sumDelta7, sumDelta8);

}


//EXERCISE 12
//birthday([1,2,1,3,2], 3, 2)
function birthday(s, d, m) {

    console.log("--HAPPY BIRTHDAY--");

    //SUM: 3 = d
    // PIECES: 2 = m

    //calculation of pieces and sum

    var fittingBars = 0;

    for (let i = 0; i < s.length; i++) {

        //Cases pieces
        //so sure that can be done much more efficient ;-)
        if ((m == 1) && (s[i] == d)) {
            fittingBars++;
        } else if ((m == 2) && (s[i] + s[i + 1] == d)) {
            fittingBars++;
        } else if ((m == 3) && (s[i] + s[i + 1] + s[i + 2] == d)) {
            fittingBars++;
        } else if ((m == 4) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] == d)) {
            fittingBars++;
        } else if ((m == 5) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] == d)) {
            fittingBars++;
        } else if ((m == 6) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5] == d)) {
            fittingBars++;
        } else if ((m == 7) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5] + s[i + 6] == d)) {
            fittingBars++;
        } else if ((m == 8) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5] + s[i + 6] + s[i + 7] == d)) {
            fittingBars++;
        } else if ((m == 9) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5] + s[i + 6] + s[i + 7] + s[i + 8] == d)) {
            fittingBars++;
        } else if ((m == 10) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5] + s[i + 6] + s[i + 7] + s[i + 8] + s[i + 9] == d)) {
            fittingBars++;
        } else if ((m == 11) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5] + s[i + 6] + s[i + 7] + s[i + 8] + s[i + 9] + s[i + 10] == d)) {} else if ((m == 12) && (s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5] + s[i + 6] + s[i + 7] + s[i + 8] + s[i + 9] + s[i + 10] + s[i + 11] == d)) {
            fittingBars++;
        }

    }

    console.log("fittingBars: " + fittingBars);
    output12.innerHTML = fittingBars;
}


//13 ENCRYPTION 

function encryption(input) {
    console.log("--ENCRYPTION--");

    //delete all empty spaces
    var input_wspace = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] != " ") {
            input_wspace += input[i];
        }
    }

    input = input_wspace;

    console.log("input without space: " + input_wspace);

    console.log("length: " + input.length);
    console.log("√length: " + Math.sqrt(input.length));

    var row = Math.floor(Math.sqrt(input.length));
    var columns = Math.ceil(Math.sqrt(input.length));

    console.log("row: " + row);
    console.log("columns: " + columns);

    if ((row * columns) < input.length) {

        row++;
        console.log("ACHTUNG: neue dimension: row * columns: " + row + " * " + columns);

    }



    /*    var string = [
    ['f','e','e','d'],
    ['t','h', 'e','d'],
    ['d','o','g']
        ]

        console.log(string[0][0] + string[0][1]);
            console.log(string[0][0] + string[1][0] + string[2][0]);
            console.log(string);
    */

    //YEAH, construction for twodimensional arrays:
    var output = [];
    var line = [];

    for (let i = 0; i < input.length; i++) {

        line.push(input[i]);

        if (((i + 1) % columns) == 0) {
            output.push(line);
            line = [];
        }


    }
    output.push(line); // for the last line

    console.log("output 0 " + output[0][0] + output[0][1] + output[0][2] + output[0][3]);
    console.log("output 1 " + output[1][0] + output[1][1] + output[1][2] + output[1][3]);
    console.log("output 2 " + output[2][0] + output[2][1]);

    var outputstring = "";

    console.log("output.length" + output.length);
    console.log("row" + row);
    console.log("columns" + columns);


    //output not encrypted
    /*
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < columns; j++) {

               if((output[i][j]) != undefined){ 
                console.log(output[i][j]);
                outputstring += output[i][j];
                if (((j+1) % columns) == 0){
                  outputstring += "<br>";
                  console.log("BR");
                }
                } 
           
            }
        }
        */

    //output encrypted
    for (let j = 0; j < columns; j++) {
        for (let i = 0; i < row; i++) {

            if ((output[i][j]) != undefined) {
                console.log(output[i][j]);
                outputstring += output[i][j];
                if (((i + 1) % row) == 0) {
                    outputstring += " ";
                    console.log(" ");
                } else if (((output[i + 1][j]) == undefined)) {
                    outputstring += " ";
                    console.log(" ");
                }
            }

        }
    }


    console.log(outputstring);
    output13.innerHTML = outputstring;

    /*
    for (let i = 0; i < 3; i++){
      console.log(output[i]);
    }*/

}

//14
function designerPdfViewer(h, word) {

    console.log("Designer PDF Viewer");

    // buchstabenarray
    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wordInheigh = [];

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if (word[i] == alphabets[j]) {
                wordInheigh.push(h[j]);
                console.log(word[i] + " :" + alphabets[j]);
            }
        }
    }
    console.log(wordInheigh);

    var maximum = 0;
    for (let i = 0; i < wordInheigh.length; i++) {
        if (wordInheigh[i] > maximum) {
            maximum = wordInheigh[i];
            console.log("max = " + maximum);
        }
    }

    console.log("return: " + maximum * word.length);

    output14.innerHTML = maximum * word.length;

}


//exercise utopianTree(n)

function utopianTree(n) {
    console.log("- - utopian Tree --");

    //building of the function
    var output = [];
    for (let i = 0; i < 60; i++) {

        if (i == 0) {
            output[i] = 1;
        } else if ((i > 0) && (i % 2 != 0)) {
            output[i] = (output[i - 1] * 2);
            console.log("output " + i + " :" + output[i]);
        } else if ((i > 0) && (i % 2 == 0)) {
            output[i] = (output[i - 1] + 1);
            console.log("output " + i + " :" + output[i]);
        }
    }

    console.log(output);

    //getting return of n
    var outputstring15 = "";
    for (let i = 0; i < n.length; i++) {

        console.log("n[i]: " + n[i] + " output[i]" + output[(n[i])]);
        outputstring15 += output[(n[i])] + "<br>";

    }


    console.log(outputstring15);

    output16.innerHTML = outputstring15;

    //Variante funktioniert auf hackerrank:
    // return output[n]; weil hier n als 0 1 ... eingegeben wird?
}

/*
Period  Height
0          1
1          2
2          3
3          6
4          7
5          14
*/


//Exercise 16
function angryProfessor(k, a) {

    console.log("-- ANGRY PROFESSOR -- ");

    var sumInTime = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            sumInTime++;
            console.log("in time: " + a[i]);
        }
    }

    console.log("sum students in time:" + sumInTime);
    var result = "START";
    if (sumInTime >= k) {
        result = "NO"; //class is not cancelled

    } else {
        result = "YES";
    }

    outputprof.innerHTML = result;
    console.log("result: " + result);

    // return k; // 3            2 
    //return a; // -1,-3,4,2     0,-1,2,1
}


//Exercise 17
function circularArrayRotation(a, k, queries) {

    console.log("-- Watsons circularArrayRotation -- ");

    console.log("a = " + a);
    //console.log("a.length = " + (a.length -1));


    for (let j = 0; j < k; j++) {

        var b = [];
        console.log("b Start: " + b);
        for (let i = 0; i < a.length; i++) {
            if (i == (a.length - 1)) {
                b[0] = a[i];
                console.log("Ende Array: b[0]) = " + a[i]);
                console.log("b nach Ende:" + b);
                a = b; //a ist das neue b
                console.log("a nach Ende:" + a);
            } else {
                b[i + 1] = a[i];
                console.log("MITTE Array: b[i+1] = " + a[i]);
                console.log(a[i]);
            }
        }
        console.log("round " + j + ": b = " + b);

    }

    console.log("b ENDE: " + b);

    //output of the new array with specified elements:

    output17.innerHTML = "";
    for (let i = 0; i < queries.length; i++) {
        console.log(b[queries[i]]);
        output17.innerHTML += b[queries[i]] + "<br>";
    }

    //output17.innerHTML = b;
}

//Exercise 18
function cutTheSticks(arr) {
console.log("-- Cut the Stick -- ");
output18.innerHTML = "";
var min = 0;

//get Minimum of arr
function getMin(arr){
for (let i = 0; i < arr.length; i++){
   if ((arr[i] < arr[i+1]) && (arr[i] < min) || (min == 0 )){
     min = arr[i];
   }
}
//console.log("min:" + min);
return min;
}

//check if there is still one element not null

min = getMin(arr);
console.log(min);

var amount = arr.length;
console.log(arr);

//the cutting
var amountArr = [];
var delta = 0;
var countArr = [];
countArr.push(arr.length);
var count = 0;

while(min > 0){
for (let i = 0; i < arr.length; i++){
  if (arr[i] != 0){
   delta = (arr[i] - min);
   amountArr.push(delta);
   }
   if(delta != 0){
     count++;
   }

}
console.log("amountArr:" + amountArr);

min = 0; // reset to 0 - otherwise it stays with last min if all = 0 
min = getMin(amountArr);
console.log("new Min: " + min);
arr = amountArr;
amountArr=[];
if (min != 0){
console.log("count: " + count);
countArr.push(count);
}
console.log("countArr: " + countArr);
count = 0;
console.log(arr);
console.log(amountArr);

}

for (let i = 0; i < countArr.length; i++){
  output18.innerHTML += countArr[i] + "<br>";
}

console.log(countArr);

}