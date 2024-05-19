{
    function getAverage(students) {
        let studentAverages = []

        for (let i = 0; i < students.length; i++) {
            let student = students[i]
            let totalMarks = 0

            for (let j = 0; j < student.marks.length; j++) {
                totalMarks += student.marks[j]
            }

            let averageMarks = totalMarks / student.marks.length

            studentAverages.push({ name: student.name, average: averageMarks })
        }


        for (let i = 0; i < studentAverages.length; i++) {
            let student = studentAverages[i]
            console.log(student.name + ": " + student.average.toFixed(1))
        }
    }


    const arrayOfStudents = [
        { name: "Stephen", marks: [45, 78, 90, 32, 67] },
        { name: "Maryanne", marks: [89, 78, 10, 67, 47] },
        { name: "Kelvin", marks: [55, 88, 94, 52, 37] },
        { name: "Claire", marks: [44, 68, 88, 62, 77] },

    ];

    getAverage(arrayOfStudents)

}