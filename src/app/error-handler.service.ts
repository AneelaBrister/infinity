import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
	providedIn: "root"
})
export class ErrorHandlerService implements ErrorHandler {
	constructor(private _injector: Injector) { }
	handleError(error) {
		const notify = this._injector.get(NotificationService);
		notify.logError(error);
	}
}
