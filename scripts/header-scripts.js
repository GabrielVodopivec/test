const botonMenu = document.getElementById("boton-menu");
const nav = document.getElementById("nav");
const firstDiv = botonMenu.firstElementChild;

const moveNavbarDelay = () => {
    setTimeout(() => {
        moveNavbar();
    }, 0)
}

const moveNavbar = () => {

    if (nav.classList.contains("active")) {
        nav.classList.remove("active")
        firstDiv.classList.remove("sup");
        firstDiv.nextElementSibling.classList.remove("mid");
        botonMenu.lastElementChild.classList.remove("inf");
    } else {
        nav.classList.add("active");
        firstDiv.classList.add("sup");
        firstDiv.nextElementSibling.classList.add("mid");
        botonMenu.lastElementChild.classList.add("inf");
    }
}

botonMenu.onclick = moveNavbar;
nav.onclick = moveNavbarDelay;

// const dpr = document.getElementById("dpr");
// const numDpr = document.getElementById("numDpr");
// const ancho = document.getElementById("ancho");
// const alto = document.getElementById("alto");


// const f = () => {
//     numDpr.innerHTML = `DPR: ${window.devicePixelRatio}`;
//     ancho.innerHTML = `Ancho: ${window.innerWidth}`
//     alto.innerHTML = `Alto: ${window.innerHeight}`
// }

// dpr.onclick = f;


const f = () => {

    // const laConferencia = document.getElementById("laConferencia");
    // console.log(laConferencia)

    const activeElement = document.activeElement.className
    console.log(activeElement);
}
document.addEventListener("click", f, true)
