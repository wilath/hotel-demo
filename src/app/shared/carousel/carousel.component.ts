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
          <img [src]="photo" alt="Slide" />
        </div>
      </div>
    </div>

    <button (click)="prevSlide()">&#10094;</button>
    <button (click)="nextSlide()">&#10095;</button>`,
  styles: `.carousel {
        overflow: hidden;
        width: 400px; /* Dostosuj szerokość karuzeli według potrzeb */
        aspect-ratio: 1/1;
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
      
      button {
        cursor: pointer;
        font-size: 24px;
      }`,
      standalone: true,
      imports: [
        CommonModule
      ]
})
export class CarouselComponent {
  @Input() item: string[] = []
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.item.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.item.length) %
      this.item.length;
  }
}
