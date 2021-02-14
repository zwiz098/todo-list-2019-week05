// Description:must have clear all button, must have clear completede,
// able to click on the todos and cross of then clear completed to delete
// crosed off. AShow in dom running totals of todo.
// When cliclk on element to complete add a class. Class = in li not ul






const ul = document.querySelector('.list')
const input = document.querySelector('#input')
document.querySelector('#addItem').addEventListener('click', addToList)
document.querySelector('#clearItems').addEventListener('click', clearSelectedItems)
document.querySelector('#clearAll').addEventListener('click', clearAll)
let count = document.querySelector('#itemCount')
//Create a function that crosses selesced items out
ul.addEventListener("click", function(e) {
  if (e.target.matches("li.item")) {
    e.target.className = "crossItem"; // new class name here
    console.log(e.target)

    let c = parseInt(count.innerText)
    c -= 1
    count.innerText = c
    }
})

//Create

function addToList(e){
  e.preventDefault()
  const li = document.createElement('li')
  li.className = "item"
  li.innerText = input.value
  ul.appendChild(li)

  let c = parseInt(count.innerText)
  c += 1
  count.innerText = c

  // document.getElementsByTagName('li').addEventListener('click', removeFromList)
}
// function removeFromList(ev) {
//  // e.preventDefault()
//   console.log(ev.target)
// }

// document.querySelectorAll('li.item') for each (element => element.remove())
// Create a function that when you click the button "clear" the crossed out items are deleted from the list.
function clearSelectedItems() {
    //e.preventDefault()
//
//
let deleteItem = ul.querySelectorAll('.crossItem')
deleteItem.forEach(li => {
  ul.removeChild(li)
})
// ul.addChild.(hideItem)
    //
    // let crossedItem = document.getElementsByClassName('crossItem')
    // crossedItem.style.backgroundColor = "purple"

}

function clearAll(){
  let deleteItem = ul.querySelectorAll('.item')
  deleteItem.forEach(li => {
    ul.removeChild(li)
  })

count.innerText = '0'
}
