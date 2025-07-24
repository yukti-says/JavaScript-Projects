// dom manipulation
// html se element select
let h1 = document.querySelector('h1')
console.log(h1);
console.log(h1.innerText);
console.log(h1.innerHTML);
h1.innerText = "Hey i am daam good how are you doing these days"
console.dir(h1);
h1.innerHTML = "<span><i>Yukti sahu</i></span>";


// attribute change
let a = document.querySelector("a")
console.dir(a);
// a.href = "https://google.com"
a.setAttribute("href", "https://www.google.com")
a.setAttribute('target',"_blank") //opening in next tab






// text change
// html change
// css change
// attribute change
// event listeners
