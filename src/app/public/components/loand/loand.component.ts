import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loand',
  templateUrl: './loand.component.html',
  styles: [
  ]
})
export class LoandComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() {}
  ngOnInit() {}

}
