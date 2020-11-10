import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [`
    .container,
    .container-fluid,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl{
      width:100%;
      /* padding-right:15px;
      padding-left:15px; */
      /* margin-right:auto;
      margin-left:auto; */
    }
      @media (min-width:576px){
        .container,.container-sm{
          max-width:540px
        }
      }@media (min-width:768px){
        .container,
        .container-md,
        .container-sm{
          max-width:720px
        }
      }@media (min-width:992px){
        .container,
        .container-lg,
        .container-md,
        .container-sm{
          max-width:960px
        }
      }@media (min-width:1200px){
        .container,
        .container-lg,
        .container-md,
        .container-sm,
        .container-xl{
          max-width:1140px
        } 
      }
  `]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
