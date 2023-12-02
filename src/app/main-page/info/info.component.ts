import { Component} from '@angular/core';


//import { options, fullpage_api } from C:\Users\Sebastian\Desktop\hotel-demo\hotel-demo\node_modules\fullpage.js\dist\fullpage.extensions.min.js'


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
 constructor(){
  window.addEventListener("scroll", ()=>{this.revealText()});
  setTimeout(()=>{this.reveal2()},100)
 }

  
  revealText(){
    const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 0;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    reveal2(){
      const reveals2 = document.querySelectorAll(".reveal2");
      for (let i = 0; i < reveals2.length; i++) {
          reveals2[i].classList.add("active2");
      
      }
    }
    
}
