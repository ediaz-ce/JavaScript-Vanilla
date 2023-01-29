const botones = document.querySelectorAll('.btnStyle');
const boxText = document.querySelectorAll('.text')



botones.forEach((boton, indice) =>{
    boton.addEventListener('click', () => {
        if(boton.classList.contains('btnActivated')){
            boton.classList.remove('btnActivated')
            boton.classList.add('btnDisabled')
        }
        else{
            boton.classList.add('btnActivated')
            boton.classList.remove('btnDisabled')
        }
        isActivated(indice)
    })
    
})
window.addEventListener('DOMContentLoaded', ()=>{
    boxText[2].innerHTML = new Date().toLocaleDateString();
})

function isActivated(i){
    boxText[i].classList.toggle('pToggle');
}