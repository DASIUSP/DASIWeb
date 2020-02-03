import { MatSnackBarRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styles: [`
      .text {
        color: #db6d6d;
      }
    `],
})
export class SnackbarComponent {
    constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>) { }

    closeSnackBarMensagem() {
        this.snackBarRef.dismiss();
    }
}