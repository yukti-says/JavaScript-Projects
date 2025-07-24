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

// append ->baad me append karo element ke
// prepend->pahle add karo element ko
// appendchild->andar append karo

let h2 = document.createElement("h2")
h2.innerText = "Hey there what is going on"
div.prepend(h2)

let h3 = document.createElement("h3")
h3.innerText = "Hey yukti what's app"
div.append(h3)

// h3.remove()y
h2.style.fontFamily = 'Gilroy'
h2.style.textTransform = 'uppercase'

// javascript se class ko lagana and remove karna class by which u add css
// h2.classList.add("yukti")
// class remove
// h2.classList.remove("yukti")

// toggle mean if there is class it will remove and if there is no class it will add
h2.classList.toggle("yukti")

