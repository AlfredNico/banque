import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  template: `
    <mat-toolbar>
      <span>Application bancaire</span>
    </mat-toolbar>
  `,
  styles: [],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
