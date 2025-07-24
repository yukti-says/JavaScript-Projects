// any action on browser this will cause event raise


let h1 = document.querySelector('h1')
let count = false

h1.addEventListener('click', function () {
    if (!count) {
        h1.style.color = 'red'
        count = true
    }
    else {
        h1.style.color = 'black'
        count = false
    }
})


let body = document.querySelector('body')
let button = document.querySelector('button')

let a = false

button.addEventListener('click', function () {
    if (!a) {
        body.style.backgroundColor = 'black'
        h1.style.color = 'white'
        a = true
    }
    else {
        body.style.backgroundColor = 'white'
        h1.style.color='black'
        a=false
    }

})