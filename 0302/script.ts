// const video = document.querySelector('#videoprincipal')

// if(video instanceof HTMLVideoElement){
//     console.log(video.volume);
// }

const links = document.querySelectorAll('.link');

links.forEach((link) => {
    if(link instanceof HTMLAnchorElement){
        console.log(link);
    } else{ 
        console.log(typeof link);
    }
})

const dados = [1,2,3]

const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter(
    (link) => link instanceof HTMLAnchorElement
)


// ===== exercicio 


links.forEach((item) => {
    if(item instanceof HTMLElement){
        ativarElemento(item);
    }
})

function ativarElemento(elemento: HTMLElement) {
    elemento.style.color = 'red';
    elemento.style.border = '2px solid red';
}
