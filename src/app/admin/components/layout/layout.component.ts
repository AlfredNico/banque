import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [`
    .footer {
      display: flex;
      justify-content: center;
      padding: 5px;
      background-color: #45a1ff;
      color: #000;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
