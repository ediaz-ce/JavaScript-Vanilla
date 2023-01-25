const btnPrincipal = document.querySelector('#btn');
const btnModal = document.querySelector('#modal-btn');
const modalAlert = document.getElementById('modal');

btnPrincipal.addEventListener('click', ()=>{
    modal();
})
btnModal.addEventListener('click', ()=>{
    modal();
})

function modal(){
    modalAlert.classList.toggle('modalHidden');
}