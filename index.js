// Your code here

//Grab dodger
const dodger = document.getElementById('dodger')

//Use dodger to move left
function moveDodgerLeft() {
//Get the current value of dodger's style.left property
//use .replace() method to strip out the "px"
//store the result in leftNumbers
//Parse leftNumbers as an integer(base of 10) and store that result in left
//if left is greater than 0 (border starting point in 'px', total size 400px width)
//Update the dodger style.left property using string interpolation
//inject current value - 1
    const leftNumbers = dodger.style.left.replace('px','')
    const left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

//Use dodger to move right
function moveDodgerRight() {
//Get the current value of dodger's style.left property
//use .replace() method to strip out the "px"
//store the result in leftNumbers
//Parse leftNumbers as an integer(base of 10) and store that result in left
//if left is greater than 0 (border starting point in 'px', total size 400px width)
//Update the dodger style.left property using string interpolation
//inject current value + 1
    const rightNumbers = dodger.style.left.replace('px','')
    const right = parseInt(rightNumbers, 10)
    if (right < 360) {
        dodger.style.left = `${right + 1}px`
    }
}
//Add an event listeneters with a 'keydown' event and callback
//if event is "ArrowLeft", invoke moveDodgerLeft
//else if event is "ArrowRight" invoke moveDodgerRight
