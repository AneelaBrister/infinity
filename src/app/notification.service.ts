import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorShowerComponent } from './error-shower/error-shower.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
	constructor() { }
	public dlg$: BehaviorSubject<ErrorShowerComponent> = new BehaviorSubject(null);
	setDlg(dlg: ErrorShowerComponent) {
		this.dlg$.next(dlg);
	}
	logError(error) {
		console.error(error.name, error.message, error.stack, this.dlg$.value);
		if (this.dlg$.value) {
			this.dlg$.value.error$.next(error);
			this.dlg$.value.show();
		}
	}
}
