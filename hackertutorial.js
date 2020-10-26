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