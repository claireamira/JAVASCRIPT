 {  //Getting element by ID
    //Returns objects

    //const my_Par = document.getElementById("myPar")
    //console.log(my_Par)

    //Getting elements by tag name
    //Returns a list

    const my_Par2 = document.getElementsByTagName("myPar")
    console.log(my_Par2)

    //Getting elements by class name
    //Returns a list

    const my_Title = document.getElementsByClassName("myTitle")
    console.log(my_Title)

    const elementsByQuery = document.querySelectorAll("p#myPar")
    console.log(elementsByQuery)

    const my_Par = document.getElementById("myPar")
    my_Par.innerHTML ="Some Paragraph"
    my_Par.innerHTML ='<h1>Same Paragraph</h1>'

    

    {
        function changeStyle(){
            const myH1= document.getElementById("myPar")
            myH1.style.color='violet'
            const myImage = document.getElementById("sample_image")
    myImage.src = "pinkGwagon.avif"
        }
    }
}