import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-error-maker',
  templateUrl: './error-maker.component.html',
  styleUrls: ['./error-maker.component.css']
})
export class ErrorMakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	isError: boolean = false;

}
