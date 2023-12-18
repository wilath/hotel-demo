import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  template: `<div class="carousel">
    <div
      class="carousel-inner"
      [ngStyle]="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }"
    >
      <div *ngFor="let photo of item" class="carousel-item">
        <img class="photo" [src]="photo" alt="Slide" />
      </div>
    </div>
    <div class="buttons" *ngIf="item.length > 1">
      <button (click)="prevSlide()">&#10094;</button>
      <button (click)="nextSlide()">&#10095;</button>
    </div>
  </div> `,
  styles: `.carousel {
        position: relative;
        overflow: hidden;
        max-width: 700px; /* Dostosuj szerokość karuzeli według potrzeb */
        height: auto;
        margin: auto;
      
      }
      
      .carousel-inner {
        display: flex;
        transition: transform 0.5s ease-in-out;
      }
      
      .carousel-item {
        width: 100%;
        flex: 0 0 auto;
        
      }
      .buttons{
        width:100%;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
        display:flex;
        align-items: center;
        justify-content: space-between;
      }
      
      button {
        cursor: pointer;
        position:relative;
        font-size: 30px;
        text-align: center;
        color: var(--color-pink);
        border: none;
        background: none;
        padding: 0;
        z-index: 3;
        margin: 15px;
        transition: all 0.1s ease;
      }
      button::after{
        content: '';
        position: absolute;
        height: 100%;
        aspect-ratio: 1/1;
        background :var(--color-pink);
        border-radius: 50%;
        left: 50%;
        transform: translateX(-50%);
        z-index: -2;
        opacity: 0;
        transition: all 0.1s ease;
      }
      button:hover::after{
        opacity: 0.5
      }
      button:active{
        color: white;
      }
      button:active::after{
        opacity: 0.7
      }
      .photo{
        width: 100%;
        height: 100%;
        object-fit: fill;
      
      }`,
  standalone: true,
  imports: [CommonModule],
})
export class CarouselComponent {
  @Input() item: string[] = [];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.item.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.item.length) % this.item.length;
  }
}
