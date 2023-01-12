//Retrieve the div and console.log it
let access = document.getElementById("container")
console.log(access)
//Change the name “Pete” to “Richard”.
let newWord  = document.getElementsByClassName("list")[0].innerHTML= "<ul><li>John</li><li>Richard</li></ul>"
console.log(newWord)
//Change each first name of the two <ul>'s to your name.
let elements = document.querySelectorAll('ul > li:first-child');
for (let elem of elements) {
    alert(elem.innerHTML = "kone"); // "test", "passed"
  }

//Delete the <li> that contains the text node “Sarah”.
let element = document.querySelectorAll(".list")[1].children[1].remove()
console.log(element)

//bonus
//Add a class called student_list to both of the <ul>'s.
let elts = document.querySelectorAll(".list")
for (let i of elts) {
  console.log(i.classList.add("student_list"))
}
//Add the classes university and attendance to the first <ul>.
 let bonus = document.querySelectorAll(".list")[0]
 bonus.classList.add("university","attendance")
 console.log(bonus)


