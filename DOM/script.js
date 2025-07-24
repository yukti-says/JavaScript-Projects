// dom manipulation
// html se element select
// let h1 = document.querySelector('h1')
// console.log(h1);
// console.log(h1.innerText);
// console.log(h1.innerHTML);
// h1.innerText = "Hey i am daam good how are you doing these days"
// console.dir(h1);
// h1.innerHTML = "<span><i>Yukti sahu</i></span>";










// text change
// html change
// css change

// attribute change
// let a = document.querySelector("a")
// console.dir(a);
// a.href = "https://google.com"
// a.setAttribute("href", "https://www.google.com")
// a.setAttribute('target', "_blank") //opening in next tab

// getattribute and set a new attibute value
// a.setAttribute("href", "https://www.facebook.com")
// a.getAttribute("href")
// a.removeAttribute("href")
// event listeners


// dynamic dom 
let div = document.querySelector(".Yukti")
let h1 = document.createElement("h1")
h1.innerText = "Hello Yukti Sahu "
let a = document.createElement("a")
a.setAttribute("href", "https://www.google.com")
a.setAttribute("target","_blank")
h1.style.color = "Red"
h1.style.backgroundColor = "Green"
a.innerText = "Go here"
a.style.color = "Red";
a.style.backgroundColor = "Green";


div.appendChild(h1)
div.appendChild(a)
