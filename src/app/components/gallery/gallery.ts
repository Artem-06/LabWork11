import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-gallery',
  imports: [Carousel],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {}
