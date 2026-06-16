// document.getElementById("heading")
// document.getElementsByClassName("heading")
// document.getElementsByTagName("h1")

// document.querySelector("h1")
// document.querySelector("#heading") //id
// document.querySelector(".heading") //class

// document.querySelectorAll("h1")


function changeText(){
    let para = document.querySelector("#heading");
    para.innerText = "Welcome";
    para.style.color = "Red";

    document.body.bgColor = "yellow";
}
