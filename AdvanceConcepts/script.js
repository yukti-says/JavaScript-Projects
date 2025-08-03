// closers

// function countForMe() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
        
//     }
// }

// first time function calling it is returing a function thus it is need to save in a varibale and then call it again(varibale)  to run the returned function
// let fnc = countForMe();
// fnc();

// fnc();
// fnc();

// creating a toaster
function createToaster(config) {
    return function (message) {
        let parentDiv = document.createElement("div");
        parentDiv.className = "inline-block flex flex-col p-5 items-start "
        let div = document.createElement("div");

        div.className = `inline-block bg-green-500 text-white px-6 py-3 rounded shadow-lg  pointer-events-none
        ${config.positionX === 'right' ? "right-10" : "left-10"} 
        ${config.positionX === 'top' ? "top-10" : "bottom-10"}
        ${config.theme === 'dark' ? "bg-gray-800" : "bg-white"};
        `
        parentDiv.appendChild(div);
        document.body.appendChild(parentDiv);
        div.textContent = message;

        setTimeout(() => {

            document.body.removeChild(parentDiv);
        }, config.duration * 1000)
    }
}

let taoster = createToaster({
    positionX: "right",
    positionY: "bottom",
    duration: 3,
    theme:"dark"   
})

taoster("This is a toaster message");
taoster("This is another toaster message");
taoster("This is a toaster message");