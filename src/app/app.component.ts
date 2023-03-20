import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todoObject = { name: 'Wash clothes', done: false, id: 3 };

  catchDoneEvent(todo: any) {
    console.log(todo);
  }
}
