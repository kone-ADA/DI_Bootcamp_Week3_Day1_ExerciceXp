let NewDiv = document.querySelector('div')
console.log(NewDiv.style)

let background = getComputedStyle(NewDiv).backgroundColor
// console.log(background)
let users = document.querySelectorAll("li")
console.log(users)
if(background == "rgb(173, 216, 230)")
{
    console.log("hello " +users[0].textContent +" and " + users[1].textContent)
}