import { createDiv, createA, createImg } from "./about.js";
import { pageWipe, tabListener } from "./index.js"

export function contactPageCreation(){
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
createDiv('.main','contactUs','Contact Us')
    createDiv('.contactUs','address','123 Bistro Way,Town,State,Zip Code')
    createDiv('.contactUs','phone','823-999-00021')
    createDiv('.contactUs','email','restaurant@rest.com')
createDiv('.main','resthours','Restaurant Hours')
    createDiv('.resthours','hours','M-F: 4-8')
    createDiv('.resthours','hours','Sat: 2-8')
    createDiv('.resthours','hours','Sun: Closed')
createDiv('.main','followUs')
    createDiv('.followUs','medialinks','Follow us on all major social media platforms!')
    createDiv('.followUs','imgcontainer')
        createImg('.imgcontainer','medialogo','../src/facebook.png')
        createImg('.imgcontainer','medialogo','../src/twitter.png')
        createImg('.imgcontainer','medialogo','../src/instagram.png')
// Creating Footer Content
createA('.footer','github','https://github.com/LayneMatte','Github @ LayneMatte')
createImg('.footer','logo','../src/github-mark.png')
tabListener()
}