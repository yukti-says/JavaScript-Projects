// any action on browser this will cause event raise


// let h1 = document.querySelector('h1')
// let count = false

// h1.addEventListener('click', function () {
//     if (!count) {
//         h1.style.color = 'red'
//         count = true
//     }
//     else {
//         h1.style.color = 'black'
//         count = false
//     }
// })


// let body = document.querySelector('body')
// let button = document.querySelector('button')

// let a = false

// button.addEventListener('click', function () {
//     if (!a) {
//         body.style.backgroundColor = 'black'
//         h1.style.color = 'white'
//         a = true
//     }
//     else {
//         body.style.backgroundColor = 'white'
//         h1.style.color='black'
//         a=false
//     }

// })

// button.addEventListener('dblclick', function () {
//     body.style.backgroundColor = 'green'
//     h1.style.color = 'black'
// })

// let input = document.querySelector('input')
// input.addEventListener('input', function (d) {
//     // alert("hello dear",e.target.value)
//     // // console.log("typed something");
//     // let content = data.target.value
//     // console.log(content);
//     // let h2 = document.createElement('h2')
//     // h2.innerText = content
//     // document.body.appendChild(h2);
//     if (d.data !== null) {
//          console.log(d.data); //with backspace removing null entering
//     }
    
// change event tab chalta hai jab aapka koi input select ya textarea mein koi change jojaye
let sel = document.querySelector('select')
let h3 = document.querySelector('h3')

sel.addEventListener('change', function (e) {
    //    h3.innerText =  e.target.value //yaha par jo value me likha hoga wo milega
    // h3.textContent = "Device selected"
    h3.textContent = `${e.target.value} Selected`

})
