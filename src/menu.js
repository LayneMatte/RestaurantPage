import { createDiv, createA, createImg } from "./about.js";
import { pageWipe, tabListener } from "./index.js"

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
   const burger = foodFactory('Borger!','Its a BORGER!','10.55','../src/burger-robin-stickel-70497.jpg')
   const burrito = foodFactory('Burrito','Flour tortilla with beans','4.22','../src/burrito-pixabay-461198.jpg')
   const bisque = foodFactory('Tomato Bisque','A Pureed mix of tomato and bisque!','8.55','../src/bisque-foodie-factor-539451.jpg')
   const dumplings = foodFactory('Pork Dumplings','Pork filled dumplings','2.40','../src/dumplings-cats-coming-955137.jpg')
   const frenchFries = foodFactory('French Fries','Fried potato sticks','4.22','../src/frenchfries-dzenina-lukac-1583884.jpg')
   const sandwhich = foodFactory('Sandwhich','Two pieces of bread with stuff in between','5.44','../src/sandwhich-rajesh-tp-1603901.jpg')
   const pancakes = foodFactory('Pancakes','Batter Cakes','3.22','../src/pancakes-ash-376464.jpg')
   const macarons = foodFactory('Macarons','French cookies yo','2.55','../src/macarons-arminas-raudys-808941.jpg')
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
createImg('.footer','logo','../src/github-mark.png')
tabListener()
}