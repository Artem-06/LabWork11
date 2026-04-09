import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './app.html',
})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    this.updateHeights();
  }

  @HostListener('window:resize')
  updateHeights() {
    const header = document.querySelector('nav');
    const footer = document.querySelector('footer');

    if (header && footer) {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
      document.documentElement.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
    }
  }
}
