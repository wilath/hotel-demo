import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-loading',
  standalone: false,
  template: ` <span class="ouro ouro3">
    <span class="left"><span class="anim"></span></span>
    <span class="right"><span class="anim"></span></span>
  </span>`,
  styleUrl: './main-loading.component.css',
})
export class MainLoadingComponent {
  

}
