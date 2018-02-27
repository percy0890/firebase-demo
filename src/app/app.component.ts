import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  course$;
  authors$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges(); // valueChange() converts AngularFireList into observable
    this.course$ = db.object('/courses/1').valueChanges();
    this.authors$ = db.object('authors/1').valueChanges();
  }

  add(course) {
    this.db.list('/courses').push({title: course.value});
    course.value = '';
  }

  update(courseObj) {
    console.log(courseObj);
    this.db.list('/courses/' + courseObj.id)
      .set('title' , 'course' + courseObj.id);
  }
}
