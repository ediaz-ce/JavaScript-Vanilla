const people = [
    {
        id: 1,
        name: 'Rafael Martin',
        job: 'Frontend Developer',
        img: '../image/hombre_1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit risus nec ligula pretium pellentesque. Aliquam turpis libero, maximus sed nulla non, pretium scelerisque est. Sed consequat, mi ornare iaculis aliquet, mi sem elementum mauris, sit amet suscipit velit nunc sit amet magna. Nam purus turpis, condimentum eu dui a, tempor malesuada est. Suspendisse fringilla turpis id euismod aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque sem, quis fermentum eros blandit in. Maecenas id eros quis mauris suscipit tempor quis eu urna. Donec placerat .',
    },
    {
        id: 2,
        name: 'Victor Gutierrez',
        job: 'UX Designer',
        img: '../image/hombre_2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare metus in porta maximus. Cras diam diam, scelerisque semper facilisis ac, sagittis quis augue. Vestibulum magna turpis, aliquet eu tristique non, porttitor sed eros. Nam luctus dui sit amet nulla blandit, in condimentum mi laoreet. Vestibulum lobortis quam non leo imperdiet lobortis. Vivamus posuere a lectus sed vulputate. Nullam eu mi mi. Maecenas sagittis consectetur porta. Quisque id tempor purus. Nulla hendrerit mauris nulla, a laoreet mauris ullamcorper porttitor. Nulla facilisi. Maecenas ullamcorper quam at enim convallis mattis. Ves.',
    },
    {
        id: 3,
        name: 'Jacob Rodriguez',
        job: 'Marketing',
        img: '../image/hombre_mayor.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non purus in nisi maximus elementum sagittis sed nisi. Donec accumsan blandit vulputate. Morbi molestie blandit metus, sit amet cursus velit tincidunt at. Pellentesque gravida nunc et ipsum tempus dictum. Fusce eget lorem a justo sagittis congue ut quis mi. Integer at egestas urna. Phasellus velit elit, egestas et justo ac, gravida imperdiet eros. Nullam luctus viverra ligula. Donec vulputate nisl ut augue finibus, malesuada gravida nulla dignissim. Nunc nibh massa, rutrum sit amet feugiat non, eleifend a sapien. Nam dap.',
    },
    {
        id: 4,
        name: 'Juan Carlos Perez',
        job: 'Photographer',
        img: '../image/fotografo.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, tortor eget mattis aliquet, elit justo bibendum orci, nec tristique arcu metus et lorem. Etiam purus urna, fringilla at laoreet consequat, vestibulum vitae purus. Mauris blandit ipsum sed mauris tincidunt, luctus dignissim quam dictum. Praesent vel velit eleifend, gravida turpis et, dapibus lorem. Ut vestibulum elementum augue, ac ultrices magna dignissim vel. Duis elementum ipsum eu arcu iaculis ullamcorper. Curabitur maximus ullamcorper augue ac placerat. Nunc in rutrum orci. Suspendisse vulputate porttitor varius. Sed malesuada placerat mollis. Maecenas eg.',
    }
]
// Constantes para los componentes a cambiar
const img = document.querySelector(".img");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const random = document.querySelector(".random")
const botones = [btnPrev, btnNext, random, window]

//
let currentItem = 0;
//
window.addEventListener("DOMContentLoaded", ()=>{
    change();
})
btnNext.addEventListener('click', ()=>{
    currentItem ++;
    change()
})
btnPrev.addEventListener('click', ()=>{
    currentItem--;
    change()
})
random.addEventListener('click', () =>{
    currentItem = Math.round(Math.random()*3)
    change()

})

function change (){
    if(currentItem == -1){
        currentItem = 3; 
    }
    else if(currentItem == 4){
        currentItem = 0;
    }

    const currentPerson  = people[currentItem];

    img.src = currentPerson.img;
    name.innerHTML = currentPerson.name;
    job.innerHTML = currentPerson.job;
    text.innerHTML = currentPerson.text;

}