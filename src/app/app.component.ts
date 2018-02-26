import {Observable} from 'rxjs/Observable';
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  course$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    console.log(this.course$);
  }
}
