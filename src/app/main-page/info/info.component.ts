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
    var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    reveal2(){
      var reveals2 = document.querySelectorAll(".reveal2");
      for (var i = 0; i < reveals2.length; i++) {
          reveals2[i].classList.add("active2");
      
      }
    }
    
}
