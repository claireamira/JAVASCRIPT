//nested if statement
let maths = "pass";
let english = "fail";
let chemistry = "fail";
let physics = "pass";
let kiswahili = "fail";

if ((maths == "pass") && (english == "pass") && (kiswahili == "pass") && (chemistry == "pass") && (physics == "pass")) {
    console.log("You can choose a course of your choice.")
}

else if ((maths == "pass") && (english == "pass") && (kiswahili == "pass")) {
    console.log("You can do journalism.")
} else if ((maths == "pass") && (physics == "pass") && ((english == "pass") || (kiswahili == "pass"))) {
    console.log("You can do engineering.")
} else if ((maths == "pass") && (chemistry == "pass") && ((english == "pass") || (kiswahili == "pass"))) {
    console.log("You can do medicine.")
} else if ((maths == "pass") && ((english == "pass") || (kiswahili == "pass"))) {
    console.log("You can do computer science.")
}
else {
    console.log("You are not able to do any course")
}

