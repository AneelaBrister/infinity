import { Component, OnInit, Input, ChangeDetectorRef, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-error-shower',
  templateUrl: './error-shower.component.html',
  styleUrls: ['./error-shower.component.css']
})
export class ErrorShowerComponent implements OnInit {

	constructor(private _changeDetector: ChangeDetectorRef, private _zone: NgZone) { }

  ngOnInit() {
  }

	public error$: BehaviorSubject<any> = new BehaviorSubject(null);

	show() {
		this._changeDetector.detectChanges();
		$('#errorshower').modal('show');
	}

	onClose() {
		$('#errorshower').modal('hide');
	}
}
