// let h1 = document.querySelector('h1')
// let b = document.addEventListener('keydown', function (e) {
//     if(e.key !== " ")
//     { h1.textContent = e.key }
//     else {
//         h1.textContent = 'Space'
//     }
// })




// Form submission

let form = document.querySelector('form')

let inputs = document.querySelectorAll('input')

form.addEventListener('submit', function (dets) {
    dets.preventDefault() //this will prevent the default action of form submission
    // console.log(inputs[0].value);
    // console.log(inputs[1].value);
    // console.log(inputs[2].value);
    // console.log(inputs[3].value);
    
    // creating the elements
    let card = document.createElement('div')
    card.classList.add('card')
    let profile = document.createElement('div')
    profile.classList.add('profile')

    let img = document.createElement('img')
    img.setAttribute('src', inputs[0].value)
    img.setAttribute('alt', 'Profile Picture')
  
    let h3 = document.createElement('h3')
    h3.textContent = inputs[1].value
    
    let h5 = document.createElement('h5')
    h5.textContent = inputs[2].value
    let p = document.createElement('p')
    p.textContent = inputs[3].value
    // appending the elements
    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)
   let main = document.querySelector('.main')
    main.appendChild(card)

    // clearing the input fields
    inputs.forEach(function (input) {
        if(input.type !== 'submit') {
            input.value = ''
        }   
    })
    
})