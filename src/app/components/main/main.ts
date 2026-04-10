import { Component } from '@angular/core';
import { ShadowDirective } from '../../directives/shadow';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.css',
  imports: [ShadowDirective, HighlightDirective],
})
export class Main {}
