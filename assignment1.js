{
    function fizzBuzz(n) {
        for (let i = 0; i <= n; i++) {
            if (i % 3 === 0 && i % 7 === 0) {
                console.log("fizzBuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 7 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzBuzz(50)
}