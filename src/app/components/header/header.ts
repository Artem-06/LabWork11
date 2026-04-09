import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, RouterLinkActive, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  links = [
    { path: '/main', label: 'Головна' },
    { path: '/gallery', label: 'Галерея' },
  ];
}
