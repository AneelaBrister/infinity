import { Component, ViewChild, OnInit } from '@angular/core';
import { ErrorShowerComponent } from './error-shower/error-shower.component';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = "Angular TypeError Infinite Loop";
	@ViewChild(ErrorShowerComponent) public errDlg: ErrorShowerComponent;
	constructor(private _notifySvc: NotificationService) { }
	ngOnInit() {
		this._notifySvc.setDlg(this.errDlg);
	}
}
