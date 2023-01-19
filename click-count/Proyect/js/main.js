const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const panel = document.querySelector(".count");

let contador = 0;
const operaciones = [increase, decrease];

operaciones.forEach(element => {
    element.addEventListener("click", () =>{
        (element.textContent == '+')? contador++ : contador--;
        panel.innerHTML = contador;
        element.classList.add('animated');
    })

    element.addEventListener("animationend", ()=>{
        element.classList.remove('animated')
    })
});