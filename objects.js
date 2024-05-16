{
    const person1 = {
        firstName: "James",
        lastName: "Gitau",
        yob:2016,
        

    }

    const person2 = {
        firstName: "Mary",
        lastName: "Musyoka",
        yob: 2005,
        fullname: function () {
            console.log(this.firstName + " " + this.lastName)
        },
        age: function (currentYear) {
         return (currentYear - this.yob)
        }

    }

}