
var alto = window.innerHeight - 20;
var ancho = window.innerWidth - 20;
let x_block = ancho;
let y_block = alto;

let start = () => {
    dimensiones();
    let num_x = (x_block / 40);
    let num_y = (y_block / 20);
    console.log(`${num_x} ${num_y}`);
    create_html(num_x, num_y);

}

let dimensiones = () => {
    let isavalible = false;

    while (!isavalible) {
        if (((x_block % 40) != 0) || ((y_block %20) != 0)) {
            if ((x_block % 40) != 0) {
                x_block--;
            }
            else if ((y_block % 20) != 0) {
                y_block--;
            }
        }
        else {
            return x_block, y_block;
        }
    }

}

let create_html = (x, y) => {
    for (let i = 0; i < y; i++) {
        let newrow = document.createElement("div");
        newrow.setAttribute("class", "row");
        newrow.setAttribute("id", `row${i + 1}`);
        document.getElementById("contenedor").appendChild(newrow)
        for (let j = 0; j < x; j++) {
            let newelement = document.createElement("div");
            newelement.setAttribute("class", "box");
            document.getElementById(`row${i + 1}`).appendChild(newelement);
            console.log(`box creada ${i}-${j}`);
        }
    }
const elements = document.getElementsByClassName("box");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('animationend', function (e) {
        elements[i].classList.remove('animated');
    });

    elements[i].addEventListener('mouseover', function (e) {
        elements[i].classList.add('animated')
    })
}
}
console.log(`X:${ancho}\nY:${alto}`);
console.log(`X:${window.innerWidth}\nY:${window.innerHeight}`);

window.addEventListener('resize', ()=>{
    location.reload();
})