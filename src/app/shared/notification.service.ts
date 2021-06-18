import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';


/*
  https://stackoverflow.com/questions/42761039/how-to-use-snackbar-on-service-to-use-in-every-component-in-angular-2
  
*/

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notification$: Subject<string> = new Subject();

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) { }

  public open(message:string, action='success', duration = 50000) {
    this.zone.run(() => {
      this.snackBar.open(message, action, {duration});
    })
  }


  // Opens an ERROR/BAD Message snackbar
  public badAlert(message: string, actionButtonVerb: string) {
    this.zone.run(() => {
      this.snackBar.open(message, actionButtonVerb, {duration: 50000})
    })
  }

  public badAlertTop(message: string, actionButtonVerb: string) {
    this.zone.run(() => {
      this.snackBar.open(message, actionButtonVerb,
        {
          duration: 30000,
          verticalPosition: 'top'
        });

    })
  }




}
