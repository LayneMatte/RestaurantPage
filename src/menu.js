import { createDiv, createA, createImg } from "./about.js";
import { pageWipe, tabListener } from "./index.js";
import github from '../src/github-mark.png';
import food1 from '../src/burger-robin-stickel-70497.jpg';
import food2 from '../src/burrito-pixabay-461198.jpg';
import food3 from '../src/bisque-foodie-factor-539451.jpg';
import food4 from '../src/dumplings-cats-coming-955137.jpg';
import food5 from '../src/frenchfries-dzenina-lukac-1583884.jpg';
import food6 from '../src/sandwhich-rajesh-tp-1603901.jpg';
import food7 from '../src/pancakes-ash-376464.jpg';
import food8 from '../src/macarons-arminas-raudys-808941.jpg';

export function menuPageCreation(){
pageWipe()
// Creating Page Structure
createDiv('body','header')
createDiv('body','main')
createDiv('body','footer')
// Creating Header Content
createDiv('.header','tab','About');
createDiv('.header','tab','Menu  ');
createDiv('.header','tab','Contact');
// // Main Content
const foodFactory = (title,body,number,imgSrc) => {
    return {
       title,
       body,
       number,
       imgSrc
    }
   } 
   let menu = [];
   const burger = foodFactory('Borger!','Its a BORGER!','10.55',`${food1}`)
   const burrito = foodFactory('Burrito','Flour tortilla with beans','4.22',`${food2}`)
   const bisque = foodFactory('Tomato Bisque','A Pureed mix of tomato and bisque!','8.55',`${food3}`)
   const dumplings = foodFactory('Pork Dumplings','Pork filled dumplings','2.40',`${food4}`)
   const frenchFries = foodFactory('French Fries','Fried potato sticks','4.22',`${food5}`)
   const sandwhich = foodFactory('Sandwhich','Two pieces of bread with stuff in between','5.44',`${food6}`)
   const pancakes = foodFactory('Pancakes','Batter Cakes','3.22',`${food7}`)
   const macarons = foodFactory('Macarons','French cookies yo','2.55',`${food8}`)
   menu = [burger,burrito,bisque,dumplings,frenchFries,sandwhich,pancakes,macarons]
   function menuGeneration (){
   createDiv('.main','card-container')
       for(let i=0;i < menu.length; i++){
           createDiv('.card-container',`card-${i}`)
               createImg(`.card-${i}`,'foodPic',menu[i].imgSrc)
               createDiv(`.card-${i}`,`textContainer-${i}`)
                   createDiv(`.textContainer-${i}`,'title',`${menu[i].title}`)
                   createDiv(`.textContainer-${i}`,'body',`${menu[i].body}`)
               createDiv(`.card-${i}`,`priceContainer-${i}`)
                   createDiv(`.priceContainer-${i}`,`price`,`Price`)
                   createDiv(`.priceContainer-${i}`,'number',`${menu[i].number}`)
       }
   }
menuGeneration()
// Creating Footer Content
createA('.footer','github','https://github.com/LayneMatte','Github @ LayneMatte')
createImg('.footer','logo',`${github}`)
tabListener()
}
