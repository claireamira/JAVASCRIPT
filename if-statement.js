{//Assignment if statement

    let maths = "pass";
    let english = "pass";
    let chemistry = "pass";
    let physics = "pass";
    let kiswahili = "pass";
    let geography = "pass";
    let history = "pass";

    if ((maths == "pass") && (english == "pass") && (kiswahili == "pass") && (chemistry == "pass") && (physics == "pass") && (history == "pass") && (geography == "pass")) {
        console.log("You can choose a course of your choice.")
    }

    else if ((maths == "pass") && (english == "pass") && (kiswahili == "pass") && ((history == "pass") || (geography == "pass"))) {
        console.log("You can do journalism.")
    } else if ((maths == "pass") && ((history == "pass") || (geography == "pass")) && ((chemistry == "pass") || (physics == "pass")) && ((english == "pass") || (kiswahili == "pass"))) {
        console.log("You can do engineering.")
    } else if ((maths == "pass") && (chemistry == "pass") && ((english == "pass") || (kiswahili == "pass")) && ((history == "pass") || (geography == "pass"))) {
        console.log("You can do medicine.")
    } else if ((maths == "pass") && ((english == "pass") || (kiswahili == "pass")) && ((physics == "pass") || (chemistry == "pass"))) {
        console.log("You can do computer science.")
    }
    else {
        console.log("You are not able to do any course")
    }

    //Sum of numbers between 1 and an integer n

    {
        function integerSum(n) {
            let intSum = (n * (n + 1)) / 2;
            return (intSum)
        }
        let ans = integerSum(5)
        console.log(ans)
    }
}
{
    let age = 9

    if (age <= 3) {
        console.log("Home")
    } else if (age < 6) {
        console.log("Kindergarten")
    } else if (age < 10) {
        console.log("Lower Primary")

    } else if (age < 14) {
        console.log("Upper Primary")

    } else if (age < 18) {
        console.log("Highschool")

    }else if (age < 24) {
        console.log("Campus")

    } else if (age < 60) {
        console.log("Employed")

    } else if (age < 100) {
        console.log("Retired")

    } else { console.log("Enter an age between zero and a hundred") }

}