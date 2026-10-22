"use strict";
// const btn = document.querySelector('button')
// function handleClick(event: PointerEvent) {
//     console.log(event.pageX);
// }
// btn?.addEventListener("click", handleClick)
// function handleScroll(event: Event){
//     console.log(event);
// }
// window.addEventListener('scroll', handleScroll)
// function ativarMenu(event: Event) {
//     if(event instanceof MouseEvent) {
//         console.log(event.pageX);
//     }
//     if(event instanceof TouchEvent){
//         console.log(event.touches[0].pageX);
//     }
// }
// document.documentElement.addEventListener("mousedown", ativarMenu)
// document.documentElement.addEventListener("touchstart", ativarMenu)
// const btn = document.querySelector('button')
// function handleCLick(this: HTMLButtonElement, event: MouseEvent) {
//     console.log(this);    
// }
// btn?.addEventListener('click', handleCLick)
const btn = document.querySelector('button');
function handleCLick(event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        console.log(elemento.innerText);
    }
}
btn?.addEventListener('click', handleCLick);
