//Assignment if statement

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