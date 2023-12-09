import './style.css';
import { pageWipe, tabListener } from "./index.js";
import restaurant from '../src/restaurant-rachel-claire-4992835.jpg';
import github from '../src/github-mark.png'



export function createDiv(element,className,text) {
    element = document.querySelector(`${element}`);
    let el = document.createElement('div');
    el.classList.add(`${className}`);
        if(!text){}
        else {
            el.textContent = `${text}`;
        }
    element.appendChild(el)
}
export function createA(element,className,href,text) {
    element = document.querySelector(`${element}`);
    let el = document.createElement('a');
    el.classList.add(`${className}`);
        if(!text){}
        else {
            el.textContent = `${text}`;
        }
    el.href = `${href}`
    element.appendChild(el)
}
export function createImg(element, className, imgSrc) {
    element = document.querySelector(`${element}`);
    let el = document.createElement('img');
    el.classList.add(`${className}`)
    el.src = `${imgSrc}`; 
    element.appendChild(el)
}
export function aboutPageCreation(){
pageWipe()
// Creating Page Structure
createDiv('body','header')
createDiv('body','main')
createDiv('body','footer')
// Creating Header Content
createDiv('.header','tab','About');
createDiv('.header','tab','Menu');
createDiv('.header','tab','Contact');
// Creating Main Content
createDiv('.main','headline','Restaurant - Est. 1438')
createDiv('.main','container')
createImg('.container','rest-img',`${restaurant}`)
// createDiv('.container','imgText','photo by rachel claire')
createDiv('.container','about-text','This is a restaurant. A place to eat food. Anyone is welcome! There are tables and chairs to sit down. People called waiters will wait on you. They can bring you drinks and food. They will ask you want to eat and you tell them! Restaurant has been in business since 1438. Generations of people have owned restaurant. Food style food has been a staple of restaurant since its conception. Restaurant will continue to serve its customers as long as humans eat food.')
// Creating Footer Content
createA('.footer','github','https://github.com/LayneMatte','Github @ LayneMatte')
createImg('.footer','logo',`${github}`)
tabListener()
}


