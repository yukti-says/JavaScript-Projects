// let h1 = document.querySelector('h1')
// let b = document.addEventListener('keydown', function (e) {
//     if(e.key !== " ")
//     { h1.textContent = e.key }
//     else {
//         h1.textContent = 'Space'
//     }
// })


let input = document.querySelector('#fileinp')
let button = document.querySelector('button')

button.addEventListener('click', function () {
    input.click()
})

input.addEventListener('change', function (det) { 
    // console.log(det);
    // button.textContent = det.target.files[0].name
    button.textContent = "File Selected"

    let h3 = document.createElement('h3')
    h3.textContent = det.target.files[0].name
    h3.style.color = 'white'
    h3.style.fontSize = '1.5rem'
    h3.style.fontWeight = '300'
    h3.style.marginTop = '1rem'
    h3.style.marginBottom = '1rem'
    h3.style.textAlign = 'center'
    h3.style.userSelect = 'none'
    h3.style.marginLeft = '4px'
    document.querySelector('#main').appendChild(h3)
    
})