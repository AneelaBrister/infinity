# Infinity

This project demonstrates an infinite loop that locks up the browser upon a template binding error. 
1. If you have a template binding error where a null object's property is being navigated to like this: 
	*ngIf="bad.prop"
2. And you have a system-wide error handler that shows a bootstrap modal
3. Trying to close the modal reporting the error will run change detection again
4. Thereby triggering the error again, locking up the browser. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
