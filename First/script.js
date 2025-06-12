let img = document.querySelector('img');
let h2 = document.querySelector('button')

let prevSrc = img.src
let prevText = h2.innerText

h2.addEventListener('mouseover', function () {
    img.src =
        "https://images.pexels.com/photos/32277798/pexels-photo-32277798/free-photo-of-man-in-stylish-coat-posing-in-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
    h2.innerHTML="A man"
})

h2.addEventListener('mouseleave', () => {
    img.src = prevSrc
    button.innerText = prevText
})