import { aboutPageCreation } from "./about.js";
import { menuPageCreation } from "./menu.js";
import {contactPageCreation} from "./contact.js"
aboutPageCreation()

export function pageWipe(){
    (function(){
        let body = document.querySelector('body')
        let count = body.childElementCount
        for (let i=0;i < count;i++){
            body.removeChild(body.children[0])
        }
    })()
}
export function tabListener(){
    let tabs = document.querySelectorAll('.tab')

    tabs.forEach(
        (tabs) => tabs.addEventListener(
            'click', (e)=> {
                let text = e.target.textContent
                if(text === 'About'){aboutPageCreation()}
                    else if(text === 'Menu'){menuPageCreation()}
                    else if(text === 'Contact'){contactPageCreation()}
            }
        )
    )
}





