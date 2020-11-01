function rotLeft(a, d) {
    console.log(`---- rotation left ----`);

    var count = 0;
    while (count != d) {
        a = rotOnce(a);
        console.log("Array: " + a);
        count++;
    }

    function rotOnce(a) {
        let last = a[0];
        for (let i = 0; i < a.length; i++) {

            console.log(`last = ${last}`);

            if (i == (a.length - 1)) {
                a[i] = last;
                console.log(`this is the case: a[length-1]; i= ${i} a[i] = ${a[i]}`);
            } else {
                a[i] = a[i + 1];
                console.log(`i= ${i} a[i] = ${a[i]}`);
            }
        }

        console.log("nach Schleife: " + a);
        return a;
    }

    output1.innerHTML = a;
    return a;

}


//EXERCISE 2 
function minimumBribes(q) {

    console.log("--minimum Bribes --");

    var countBribes = 0;
    var swappedNumbers = [];

    //getting start array
    //not necessary - sorting array ascending! 
    // var start = [];
    // for (let i = 0; i < q.length; i++) {
    //     start.push(i + 1);
    // }
    // console.log("startArray: " + start);

    console.log(q);


    function swap(q) {

        for (let i = 0; i < q.length; i++) {
            if (q[i] > q[i + 1]) {
                swappedNumbers.push(q[i]);
                //swappedNumbers.push(q[i + 1]);
                let x = q[i];
                q[i] = q[i + 1];
                q[i + 1] = x;
                countBribes++;
                console.log(swappedNumbers);
            }
            console.log("after swap: " + q + " countBribes: " + countBribes);
        }


        for (let i = 0; i < q.length; i++) {
            if (q[i] > q[i + 1]) {
                swap(q);
            }
        }


    }


    swap(q);



    console.log("swappedNumbers: " + swappedNumbers.sort());


    

    var numberCounts = swappedNumbers.reduce(function(obj, number) {
        console.log(obj, number);
        if (!obj[number]) {
            obj[number] = 1;
        } else {
            obj[number]++;
        }
        return obj;
    }, {});


    //  console.log("numberCounts: " + numberCounts);

    var data = Object.values(numberCounts);

    console.log("MAX von " + data);
    var max = data.reduce(function(a, b) {
        return Math.max(a, b);
    });

    console.log(max);


        if (max > 2) {
        output2.innerHTML = "Too chaotic";
        console.log("Too chaotic");

    } else {
        output2.innerHTML = countBribes;
        console.log(countBribes);
    }


}