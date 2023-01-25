
const burguer = document.querySelector(".burguer");
const bars = document.querySelectorAll(".bar");
const nav = document.querySelector('nav');

const pref = ['up','mid','bottom'];


burguer.addEventListener('click', ()=>{
    burguer.classList.toggle('actived');
        bars.forEach((element, i)=>{
            const barclass = element.classList
            if(burguer.classList.contains('actived')){
                barclass.add(`${pref[i]}Active`);
                barclass.remove(`${pref[i]}Deactive`);
            }
            else{
                barclass.remove(`${pref[i]}Active`);
                barclass.add(`${pref[i]}Deactive`);
            }
        })
    sidebar(burguer.classList.contains('actived'));
})

function sidebar(isActive){
    const navclass = nav.classList;
    if(isActive){
        navclass.add('navActive');
        navclass.remove('navDeactive');
    }
    else{
        navclass.remove('navActive');
        navclass.add('navDeactive');
    }
}