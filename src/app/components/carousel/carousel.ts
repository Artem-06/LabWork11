import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { If } from '../../directives/if';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgOptimizedImage, If],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  isFlipped: boolean = false;

  flipImg() {
    this.isFlipped = !this.isFlipped;
  }
}
