import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  template: `
    <main>
      <mat-toolbar>
        <span>Application bancaire</span>
      </mat-toolbar>
      
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    mat-toolbar {
      background: white;
    }
  `],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('value : ', this.getTimer());
  }

  getTimer = (): any => {
    return 'Alfred Nico';
  }
}
