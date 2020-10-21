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
    function getMin(arr) {
        for (let i = 0; i < arr.length; i++) {
            // if ((arr[i] < arr[i+1]) && (arr[i] < min) || (min == 0 )){ wrong
            if (((arr[i] < min) && (arr[i] != 0)) || (min == 0)) {
                min = arr[i];
                console.log("min: " + min + "arr[i] " + arr[i]);
            }
        }
        //console.log("min:" + min);
        return min;
    }

    //check if there is still one element not null
    /*
    console.log("---TEST FUNCTION MIN START---");

    var min = 4;
    var test1 = getMin([3, 2, 2, 0, 0, 6]);
    console.log("SOLL: " + 2);
    console.log("IST:" + test1);

    console.log("---TEST FUNCTION MIN END---");
    */

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

    while (min > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                delta = (arr[i] - min);
                amountArr.push(delta);
            }
            if ((delta != 0) && (arr[i] != 0)) {
                count++;
            }

        }
        console.log("amountArr:" + amountArr);

        min = 0; // reset to 0 - otherwise it stays with last min if all = 0 
        min = getMin(amountArr);
        console.log("new Min: " + min);
        arr = amountArr;
        amountArr = [];
        if (min != 0) {
            console.log("count: " + count);
            countArr.push(count);
        }
        console.log("countArr: " + countArr);
        count = 0;
        console.log(arr);
        console.log(amountArr);

    }

    for (let i = 0; i < countArr.length; i++) {
        output18.innerHTML += countArr[i] + "<br>";
    }

    console.log(countArr);

}


//Exercise 19
function findDigits(n) {
    console.log(" -- FIND Digits --");
    output19.innerHTML = "";
    var outputArr = [];
    var output;

    for (let i = 0; i < n.length; i++) {
        //console.log(n[i]);
        // console.log("digits length: " + getlength(n[i]));
        output = getDigits(n[i]);
        console.log("ROUND: " + i);
        console.log("digits amount modnull: " + output);
        output19.innerHTML += output + "<br>";
        outputArr.push(output);

    }


    //get length of number
    function getlength(number) {
        return number.toString().length;
    }


    //get digits
    function getDigits(number) {

        string = number.toString();

        //  res = [];
        modnull = 0;

        for (let i = 0; i < string.length; i++) {
            //res.push(string.charAt(i));

            /*
                        console.log("digit:");
                        console.log(string.charAt(i));

                        console.log("modulo:");
                        console.log(number % string.charAt(i));
                        */

            if ((number % string.charAt(i)) == 0) {
                modnull++;
                console.log("modnull: " + modnull);
            }

        }
        //console.log("ausgabe: " + modnull); //umgehungsvariante for hackerrank:?
        return modnull;


    }

    //console.log(outputArr);
    for (let i = 0; i < outputArr.length; i++) {
        console.log("end" + outputArr[i]);
    }
}


//FUCK HACKERRANK 
//Version working with Hackerrank
function findDigitsHack(n) {


    //get digits
    function getDigits(number) {

        var string = number.toString();

        var modnull = 0;

        for (let i = 0; i < string.length; i++) {


            if ((number % string.charAt(i)) == 0) {
                modnull++;
                //  console.log("modnull: " + modnull);
            }

        }
        console.log(modnull); //VARIANTE 2 not defined
        return modnull;


    }


    return getDigits(n);
}



//Exercise 20
//Picking Numbers

function pickingNumbers(a) {

    console.log("Picking Numbers");

    var arr = a.sort();
    console.log(arr);

    var outputArr = [];
    var output = 0;
    var subArray = [];
    console.log("subArray.length: " + subArray.length);

    sliceMaxArray([5, 5, 5, 5, 6]);

    function sliceMaxArray(inputArray) {

        var arrNeu = [];

        for (let i = 0; i < inputArray.length; i++) {
            //   console.log("i " + i + "arr[i] "+  inputArray[i] + " end: " + inputArray[(inputArray.length)-1]);

            if (inputArray[i] == inputArray[(inputArray.length) - 1]) {
                arrNeu.push(inputArray[i]);

            }
        }
        //  console.log("after help" + arrNeu);
        return arrNeu;
    }

    function getMaxArr(inputArray) {
        var max = 0;
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] > max) {
                max = inputArray[i];
            }

        }
        return max;
    }

    for (let i = 0; i < arr.length; i++) {

        if ((Math.abs(arr[i] - arr[i + 1]) <= 1)) {

            if (((subArray.length == 0)) || ((Math.abs(subArray[0] - arr[i]) <= 1) &&
                    (Math.abs(subArray[(subArray.length - 1)]) - arr[i] <= 1))) {
                console.log("neues subarray: " + arr[i]);
                subArray.push(arr[i]);
                console.log("subarray after push01 " + subArray);
            } else {
                console.log("end Subarray + arr[i]" + arr[i]);
                //subArray.push(arr[i]);
                console.log("Subarray: " + subArray);
                console.log("Subarray.length: " + subArray.length);
                outputArr.push(subArray.length);
                console.log("Outputarray: " + outputArr);
                console.log("next not bigger than 1 --> slice ");
                console.log("Funktion um eines wegzutun: " + arr[i]);
                subArray = sliceMaxArray(subArray);
                console.log("subArray neu after splice: " + subArray);
                subArray.push(arr[i]);
                console.log("subArray neu after splice + push: " + subArray);
                outputArr.push(subArray.length);
                console.log("Outputarray after push: " + outputArr);


            }
        }
        /* else if ((i == (subArray.length - 1)) && (arr[i] == arr[i-1])){
                console.log("alternative path last element");
                subArray.push(arr[i]);
                outputArr.push(subArray.length);

        }*/
        else {
            console.log("next bigger than 1: " + arr[i]);
            outputArr.push(subArray.length); //empty pushings possible but shouldnt do any harm
            subArray = []; //initialize it with zero
        }

    }

    console.log("outputarr: " + outputArr);
    var max = getMaxArr(outputArr);
    console.log("MAX = " + max);

    output20.innerHTML = max;
}


//Back to School
//21
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Numbertype) on a new line.
    console.log(firstInteger + Number(secondInteger));


    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + Number(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
    console.log(firstString + secondString);

}

//22
function getFactorial(n) {
    console.log("Get Factorial");

    var output = [];


    // base case 1! n*1
    // 1! = 1*1; 
    // 2! = 2 * 1! = 2 --> n * (n-1)*(n-1) 
    // 3! = 3 * 2! = 3 * 2 = 6 --> n*  (n-1)*
    // 4! = 4 * 3! = 24
    // 5! = 5 * 4! = 5 * 24 =  120
    // n! = n * (n-1)

    for (let i = 0; i < (n + 1); i++) {

        if (i == 0) {
            output.push(0);
            console.log("round: " + i + "output" + output[i]);
        } else if (i == 1) {
            output.push(1);
            console.log("round: " + i + "output" + output[i]);
        } else {


            output.push(i * output[(i - 1)]);
            console.log("round: " + i + "output" + output[(i)]);
        }


    }

    console.log("finish:" + output);
    console.log(output[n]);
    output22.innerHTML = output[n];

    //hackerrank: return (output[n]);
}


function vowelsAndConsonants(s) {

    var consonants = "";
    var vowels = "";

    for (let i = 0; i < s.length; i++) {

        if ((s.charAt(i) == "a") || (s.charAt(i) == "e") || (s.charAt(i) == "i") || (s.charAt(i) == "o") || (s.charAt(i) == "u")) {

            vowels += s.charAt(i) + " ";
        } else {
            consonants += s.charAt(i) + " ";
        }

    }
    console.log(vowels);
    console.log(consonants);

    output23.innerHTML = "";
    output23.innerHTML += vowels + consonants;

}

function vowelsAndConsonants(s) {

    console.log("VOWELS AND CONSONANTS");

    var consonants = "";
    var vowels = "";

    for (let i = 0; i < s.length; i++) {

        if ((s.charAt(i) == "a") || (s.charAt(i) == "e") || (s.charAt(i) == "i") || (s.charAt(i) == "o") || (s.charAt(i) == "u")) {

            vowels += s.charAt(i) + " ";
        } else {
            consonants += s.charAt(i) + " ";
        }

    }
    console.log(vowels);
    console.log(consonants);

    output23.innerHTML = "";
    output23.innerHTML += vowels + consonants;

}


function getSecondLargest(nums) {

    console.log("getSecondLargest");

    // var arr = nums.sort();  // NOT CORRECT gives out [0, 1, 10, 11, 8, 8, 8, 9, 9, 9]...
    var arr = nums.sort(function(a, b) {
        return a - b;
    });
    console.log(arr);

    var max = nums[nums.length - 1];
    console.log(max);

    var second = -66;

    for (let i = (arr.length - 1); i >= 0; i--) {

        //  console.log("i: " + i);
        //  console.log ("arr[i]: " + arr[i]);

        if ((arr[i] < max) && (second == -66)) {
            second = arr[i];
            console.log("2ndLargest: " + second);
        } else {
            console.log("i: " + i);
            console.log("nums[i]: " + nums[i]);
        }
    }

    output24.innerHTML = second;

}


function reverseString(s) {

    console.log("REVERSE STRINGS: TRY, CATCH, FINALLY");




    //Try Catch Block
    try {
        //part split:
        var splitString = s.split("");
        console.log(splitString);

        //part reverse
        var reverseArray = splitString.reverse();
        console.log(reverseArray);

        //part join
        var joinArray = reverseArray.join("");
        console.log(joinArray);
        output25.innerHTML = joinArray;
    } catch (e) {
        console.log(e.message);
        console.log(s);
        output25.innerHTML = e.message + "<br>" + s;
    }

    // console.log("The program continued executing!");

}
/*
function readLine() {
var input = "";
var index = 0;

 return +(input[index++]); 
} */

function isPositive(a) {
    // console.log("---isPositive and THROW---");

    var output = "";

    for (let i = 0; i < a.length; i++) {

        try {
            //console.log(isPositive(a));

            if (a[i] == 0) {
                throw new Error("Zero Error");
            }

            if (a[i] < 0) {
                throw new Error("Negative Error");
            }

            console.log("YES");
            output += "YES" + "<br>";




        } catch (e) {
            console.log(e.message);
            output += e.message + "<br>";
        }
    }

    output26.innerHTML = output;

}

function Rectangle(a, b) {

    //object:
    var length = a;
    var width = b;
    var perimeter = 2 * (a + b);
    var area = a * b;

    var Viereck = { length, width, perimeter, area };




    console.log(Viereck);

    //Hackerrank:
    // return Viereck;

    //output27.innerHTML = JSON.stringify(Viereck);
    output27.innerHTML = Viereck.length + " " + Viereck.width + " " + Viereck.perimeter + " " + Viereck.area;
}


function getCount(objects) {

    const fruits = {
        apple: 28,
        orange: 17,
        pear: 54,
    }

    const keys = Object.keys(fruits);
    console.log(keys); // [apple, orange, pear]

    const values = Object.values(fruits);
    console.log(values); // [28, 17, 54]

    const entries = Object.entries(fruits);
    console.log(entries);

    /*
        const keysO = Object.keys(objects);
        console.log(keysO); // [apple, orange, pear]

        const valuesO = Object.values(objects);
        console.log(valuesO[0]); // [28, 17, 54]
        console.log(valuesO[1]);


        const entriesO = Object.entries(objects);
        console.log(entriesO);


        var count = 0;

        for (let i = 0; i < objects.length; i++) {

            if ((valuesO[0] == valuesO[1])) {

              count++;

            }
        }
        
        console.log("count: " + count);


    for (const [objects] of entriesO) {

       if (valuesO[0] == valuesO[0]){
         console.log("help");
         count++
       }
      //console.log(`There are ${objects}s`);
    }

    */

    //good example
    // see https://medium.com/chingu/looping-over-arrays-and-objects-in-javascript-57e1188c1ba2

    storeItems = {
        eggs: { price: 3.77, quantity: 30 },
        milk: { price: 2.22, quantity: 23 },
        butter: { price: 2.00, quantity: 22 },
        carrots: { price: 3.00, quantity: 11 },
        beef: { price: 6.18, quantity: 34 },
        chicken: { price: 5.44, quantity: 34 }
    };

    input = {
        0: { x: 1, y: 1 },
        1: { x: 2, y: 3 },
        2: { x: 3, y: 3 },
        3: { x: 3, y: 4 },
        4: { x: 4, y: 5 }
    };


    // ???? oje.. too much
    Object.keys(input).forEach(item =>
        console.log(`${input[item].x} vs ${input[item].y}`));


    //VERSION WORKING - INPUT 
    var countNew = 0;


    for (let item in input) {
        // console.log(`${input[item].x} vs ${input[item].y}`);

        console.log(input[item].x + " vs " + input[item].y);

        if ((input[item].x) == (input[item].y)) {
            countNew++;
        }
    }

    console.log(countNew);
    output28.innerHTML = countNew;

}


//29 Classes and polygon

function Polygon() {


    class Polygon {

        constructor(sides) {

            this.sides = sides;

        }

        perimeter() {
            var perimeter = 0;
            for (let i = 0; i < this.sides.length; i++) {

                perimeter += this.sides[i];

            }
            return perimeter;
        }
    }

    // Create a polygon with side lengths 3, 4, and 5
    let triangle = new Polygon([3, 4, 5]);

    //some testcases
    const rectangle = new Polygon([10, 20, 10, 20]);
    const square = new Polygon([10, 10, 10, 10]);
    const pentagon = new Polygon([10, 20, 30, 40, 43]);

    console.log(rectangle.perimeter());
    console.log(square.perimeter());
    console.log(pentagon.perimeter());


    // Print the perimeter
    console.log(triangle.perimeter());
    output29.innerHTML = triangle.perimeter();
}


//30 INHERITANCE

function Rectangle2(a, b) {

    console.log("-- INHERITANCE --");

    class Rectangle2 {


        constructor(a, b) {
            this.a = a;
            this.b = b;
        }

        /* area() {

             return this.a * this.b;
         } */
    }


    /*
     *  Write code that adds an 'area' method to the Rectangle class' prototype
     */
    Rectangle2.prototype.area = function() {

        return (this.a * this.b);
    }

    /*

        class Square extends Rectangle2 {

            constructor(c){
                  super(a,b);
                  this.a = c;
                  this.b = c;

        }
    } */

    class Square extends Rectangle2 {

        constructor(c) {
            super(c, c);

        }
    }


    /*

       const rectangle1 = new Rectangle2(7,5);
       console.log(rectangle1.area());

          const square1 = new Square(4,7);
       console.log(square1.area());
       */

    const rec = new Rectangle2(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());

    output30.innerHTML = rec.area() + "<br>" + sqr.area();

    // output27.innerHTML = Viereck.length + " " + Viereck.width + " " + Viereck.perimeter + " " + Viereck.area;
}


/* 31
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(a, b) {

    console.log("Template literals");

    console.log(
        'The sum of a and b is ' + (a + b) + '.\n' +
        'The product of a and b is ' + (a * b) + '.'
    );


    console.log('The area is: ' + (a * b) + '.\nThe perimeter is: ' + 2 * (a + b) + '.');

    console.log(`The sum of a and b is ${a + b}. 
The product of a and b is ${a * b}.`);

    console.log(`The area is ${a * b}.
The perimeter is ${2*(a+b)}.`);

}


//32
//ARROW FuNCTIONS

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    console.log("ARROW FuNCTIONS");

    const makeArray = (...values) => { return values };
    console.log('Array:', makeArray(1, 2, 3, 4));
    console.log('Array:', makeArray(1, 2, 3, 4, 5, 6));

    const getSum = (a, b) => { return a + b };
    console.log('1 + 2 =', getSum(1, 2, 3, 4, 5, 6));

    const greeting = 'Hello, World.';
    const capitalize = (myString) => { return myString.toUpperCase() };
    console.log(greeting, '=>', capitalize(greeting));


    //VAR1

    const arr = [1, 2, 3, 4, 5];

    const sum = arr.reduce(function(a, b) {
        return a + b;
    }, 0);

    console.log('Array:', arr);
    console.log('Sum:', sum);


    //VAR2

    const arr2 = [1, 2, 3, 4, 5];

    const sum2 = arr2.reduce((a, b) => { return a + b }, 0);

    console.log('Array:', arr2);
    console.log('Sum:', sum2);


    //VAR3
    const arr3 = [1, 2, 3, 4, 5];

    const sum3 = arr3.reduce((a, b) => a + b, 0);

    console.log('Array:', arr3);
    console.log('Sum:', sum3);


    console.log(nums);

    const makeTriple = (...values) => { return (values * 3) };

    const double = nums.reduce((a) => a * 3, 0);
    console.log("double" + double);

    console.log(makeTriple(nums));


    const getTriple = (a) => { return (a * 3) };
    console.log("getTriple(4): " + getTriple(4));

    const getDouble = (b) => { return (b * 2) };
    console.log("getDouble(4): " + getDouble(4));

    var arrayNew = [];
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 == 0) {
            arrayNew.push(getDouble(nums[i]));
        } else {
            arrayNew.push(getTriple(nums[i]));
        }
    }

    console.log(arrayNew);
    output32.innerHTML = arrayNew.join(" ");
}



//33
function tryBitwise(pairs) {

    console.log("bitwise whatever");


}


//34
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

function getDayName(dateString) {
    let day;
    //  = new Date(dateString);
    // Write your code here
    output34.innerHTML = "";


    for (let i = 0; i < dateString.length; i++) {
        let date = new Date(dateString[i]);
        //console.log(`date.getDay(${i}): ${date.getDay()}`);

        output = date.getDay();


        switch (output) {
            case 0:
                day = "Sunday";
                console.log(day);
                output34.innerHTML += day + "<br>";
                break;
            case 1:
                day = "Monday";
                console.log(day);
                output34.innerHTML += day + "<br>";
                break;
            case 2:
                day = "Tuesday";
                console.log(day);
                output34.innerHTML += day + "<br>";
                break;
            case 3:
                day = "Wednesday";
                console.log(day);
                output34.innerHTML += day + "<br>";
                break;
            case 4:
                day = "Thursday";
                console.log(day);
                output34.innerHTML += day + "<br>";
                break;
            case 5:
                day = "Friday";
                console.log(day);
                output34.innerHTML += day + "<br>";
                break;
            case 6:
                day = "Saturday";
                console.log(day);
                output34.innerHTML += day + "<br>";
        }

    }

    // dateString.
    return 0;
}


//
function regexVar(str) {

    console.log("REGULAR EXPRESSIONS - PART ONE");
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    var re = /^learn/;
    var str1 = 'learn regular expressions';
    var str2 = 'write regular expressions';

    console.log(re.test(str1));
    console.log(re.test(str2));

    var re1 = /^[aeiou]/; //is start of string vowl
    var re2 = /[aeiou]$/; //end of string
    var re3 = /^[aeiou].*[aeiou]$/; //start and end of string with a vowl
    var re4 = /^(.).*\1$/; //check if first and last character is the same
   // var re5 = 
    var str3 = 'hhfe';
    var str4 = 'ihehe';
    var str5 = 'phap';
    var str6 = 'abcda';
    console.log("start of string a vowel? " + re1.test(str3));
    console.log("start of string a vowel? " + re1.test(str4));
    console.log("start and end of string a vowel? " + re3.test(str3));
    console.log("start and end of string a vowel? " + re3.test(str4));
    console.log("start and end the same? [true]" + re4.test(str5));
    console.log("start and end the same? [true]" + re4.test(str6));

    console.log(`ES6`);
    console.log("start and end the same and a vowl? [false]" + re4.test(str5));
    console.log("start and end the same and a vowl? [true]" + re4.test(str6));
    console.log(`start and end the same and a vowl? [false] ${re4.test(str5)}`);
    console.log(`start and end the same and a vowl? [false] ${re4.test(str6)}`);

    /*
     * Do not remove the return statement
     */



    //traditional
    /*
    if ((re4.test(str6) == true) && (re3.test(str6) == true)){
        re = true;
    } else {
        re = false;
    } */

    //ES6


    re = ((re4.test(str) == true) && (re3.test(str) == true)) ? true : false; 


    console.log(` FINAL OUTPUT: start and end the same and a vowl?` + re);

    output35.innerHTML = re;
    return re;
}


//VERSION HACKERRANK
function regexVarHackerrank() {

  var re = new RegExp(/^(.).*\1$/); //alle Testfälle korrekt 

}


///36 RegExpr 2
function regexVar2(string){
    console.log("-- REGEXPR 2--");

    var re1 = /^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)/; //is start of string String
     var re2 = /^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/; //is start of string String, so space and endString


      console.log(re1.test(string));
      console.log(re2.test(string));

    //hackerrank
    // const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);

    output36.innerHTML = re2.test(string);
    return re2;

}

function regexVar3(string){

    console.log("-- REGEXPR 3--");


    console.log(string.match(/[0-9]+/gm));
    console.log(string.match(/[0-9]+/g));
     //console.log(string.match(/[0-9]/));

/*
     g: global match.
    i: ignore case.
    m: multiline. Treats beginning (^) and end ($) characters as working over multiple lines.
    u: unicode. Treat pattern as a sequence of unicode code points.
    y: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.
*/
    //hackerrank
    //const re = new RegExp(/[0-9]+/gm);

    output37.innerHTML = string.match(/[0-9]+/gm);
}


/* Create a button element */
            var clickMeButton = document.createElement('button');
            /* Set the button's text label */
            clickMeButton.innerHTML = 'I\'m a JavaScript button!';
            /* Set the button's id */
            clickMeButton.id = 'jsButton';
            /* Set the button's style class */
            clickMeButton.className = 'button';
            /* Add the button to the page */
            // document.body.appendChild(clickMeButton);

            /* Add the button to a certain div */
           document.getElementById("buttonland").appendChild(clickMeButton);

          

            
            /* Get the element with id='htmlButton2' */
            var htmlButton = document.getElementById('htmlButton2');
            /* Modify the text label for htmlButton2 */
            htmlButton.innerHTML = 'I\'m a modified HTML button!';


//exercise 38
var btnincrement = document.getElementById('btnincrement');

/* This sets the action to perform on a click event */
btnincrement.onclick = function() {
    /* This changes the button's label */
    btnincrement.innerHTML ++;
};

//exercise 39

// btn5.onclick = function() {
//     /* This changes the button's label */
    
//     //console.log(`btn1.innerHTML =  ${btn1.innerHTML}`);
//     if ((btn1.innerHTML ==1) || (btn1.innerHTML ==4)) {
//       /*  var output1 = Number(btn1.innerHTML);
//         output1 += 3;
//         btn1.innerHTML = output1;
//           console.log(`btn1.innerHTML =  ${btn1.innerHTML}`); */
//           btn1.innerHTML = Number(btn1.innerHTML)+3;
//     }
//     else if((btn1.innerHTML ==7) || (btn1.innerHTML == 8)){
//         btn1.innerHTML = Number(btn1.innerHTML)+1;
//     //console.log(`btn1.innerHTML =  ${btn1.innerHTML}`);
//     }
//     else if((btn1.innerHTML ==9) || (btn1.innerHTML == 6)){
//         btn1.innerHTML = Number(btn1.innerHTML)-3;
//      //console.log(`btn1.innerHTML =  ${btn1.innerHTML}`);
//     }
//     else if((btn1.innerHTML ==3) || (btn1.innerHTML == 2)){
//         btn1.innerHTML = Number(btn1.innerHTML)-1;
//      //console.log(`btn1.innerHTML =  ${btn1.innerHTML}`);
//     }


//     if ((btn2.innerHTML ==1) || (btn2.innerHTML ==4)) {

//           btn2.innerHTML = Number(btn2.innerHTML)+3;
//     }
//     else if((btn2.innerHTML ==7) || (btn2.innerHTML == 8)){
//         btn2.innerHTML = Number(btn2.innerHTML)+1;

//     }
//     else if((btn2.innerHTML ==9) || (btn2.innerHTML == 6)){
//         btn2.innerHTML = Number(btn2.innerHTML)-3;

//     }
//     else if((btn2.innerHTML ==3) || (btn2.innerHTML == 2)){
//         btn2.innerHTML = Number(btn2.innerHTML)-1;

//     }

//     if ((btn3.innerHTML ==1) || (btn3.innerHTML ==4)) {

//           btn3.innerHTML = Number(btn3.innerHTML)+3;
//     }
//     else if((btn3.innerHTML ==7) || (btn3.innerHTML == 8)){
//         btn3.innerHTML = Number(btn3.innerHTML)+1;

//     }
//     else if((btn3.innerHTML ==9) || (btn3.innerHTML == 6)){
//         btn3.innerHTML = Number(btn3.innerHTML)-3;

//     }
//     else if((btn3.innerHTML ==3) || (btn3.innerHTML == 2)){
//         btn3.innerHTML = Number(btn3.innerHTML)-1;

//     }


//     if ((btn4.innerHTML ==1) || (btn4.innerHTML ==4)) {

//           btn4.innerHTML = Number(btn4.innerHTML)+3;
//     }
//     else if((btn4.innerHTML ==7) || (btn4.innerHTML == 8)){
//         btn4.innerHTML = Number(btn4.innerHTML)+1;

//     }
//     else if((btn4.innerHTML ==9) || (btn4.innerHTML == 6)){
//         btn4.innerHTML = Number(btn4.innerHTML)-3;

//     }
//     else if((btn4.innerHTML ==3) || (btn4.innerHTML == 2)){
//         btn4.innerHTML = Number(btn4.innerHTML)-1;

//     }

//     if ((btn6.innerHTML ==1) || (btn6.innerHTML ==4)) {

//           btn6.innerHTML = Number(btn6.innerHTML)+3;
//     }
//     else if((btn6.innerHTML ==7) || (btn6.innerHTML == 8)){
//         btn6.innerHTML = Number(btn6.innerHTML)+1;

//     }
//     else if((btn6.innerHTML ==9) || (btn6.innerHTML == 6)){
//         btn6.innerHTML = Number(btn6.innerHTML)-3;

//     }
//     else if((btn6.innerHTML ==3) || (btn6.innerHTML == 2)){
//         btn6.innerHTML = Number(btn6.innerHTML)-1;

//     }
    
//     if ((btn7.innerHTML ==1) || (btn7.innerHTML ==4)) {

//           btn7.innerHTML = Number(btn7.innerHTML)+3;
//     }
//     else if((btn7.innerHTML ==7) || (btn7.innerHTML == 8)){
//         btn7.innerHTML = Number(btn7.innerHTML)+1;

//     }
//     else if((btn7.innerHTML ==9) || (btn7.innerHTML == 6)){
//         btn7.innerHTML = Number(btn7.innerHTML)-3;

//     }
//     else if((btn7.innerHTML ==3) || (btn7.innerHTML == 2)){
//         btn7.innerHTML = Number(btn7.innerHTML)-1;

//     }


//     if ((btn8.innerHTML ==1) || (btn8.innerHTML ==4)) {

//           btn8.innerHTML = Number(btn8.innerHTML)+3;
//     }
//     else if((btn8.innerHTML ==7) || (btn8.innerHTML == 8)){
//         btn8.innerHTML = Number(btn8.innerHTML)+1;

//     }
//     else if((btn8.innerHTML ==9) || (btn8.innerHTML == 6)){
//         btn8.innerHTML = Number(btn8.innerHTML)-3;

//     }
//     else if((btn8.innerHTML ==3) || (btn8.innerHTML == 2)){
//         btn8.innerHTML = Number(btn8.innerHTML)-1;

//     }

//     if ((btn9.innerHTML ==1) || (btn9.innerHTML ==4)) {

//           btn9.innerHTML = Number(btn9.innerHTML)+3;
//     }
//     else if((btn9.innerHTML ==7) || (btn9.innerHTML == 8)){
//         btn9.innerHTML = Number(btn9.innerHTML)+1;

//     }
//     else if((btn9.innerHTML ==9) || (btn9.innerHTML == 6)){
//         btn9.innerHTML = Number(btn9.innerHTML)-3;

//     }
//     else if((btn9.innerHTML ==3) || (btn9.innerHTML == 2)){
//         btn9.innerHTML = Number(btn9.innerHTML)-1;

//     }

// };



//easiest version
btn5.onclick=function(){ 
    var start=btn1.innerHTML; 
    btn1.innerHTML=btn4.innerHTML; 
    btn4.innerHTML=btn7.innerHTML; 
    btn7.innerHTML=btn8.innerHTML; 
    btn8.innerHTML=btn9.innerHTML; 
    btn9.innerHTML=btn6.innerHTML; 
    btn6.innerHTML=btn3.innerHTML; 
    btn3.innerHTML=btn2.innerHTML; 
    btn2.innerHTML=start;
}


//Version with unshift:
// const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
// let numsA = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order
// let btn5 = document.getElementById("btn5");

// btn5.onclick = function() {
//   numsA.unshift(numsA.pop());
//   for (i = 0; i <= 7; i++) {
//     //document.getElementById("btn" + ids[i]).innerHTML = numsA[i];
//     console.log (document.getElementByid("btn" + ids[i]).innerHTML);
//   }
// };