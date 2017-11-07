import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test = '';
  tsCode = `@Component({
    selector: 'my-app',
    templateUrl: 'my-app.html'
  })
  export class MyAppComponent{
    model;
  }`;
  tsModuleCode = `@NgModule({
    declarations: [
      MyAppComponent
    ],
    imports: [
      BrowserModule,
      AutosizeInputModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [MyAppComponent]
  })
  export class MyAppModule { }`;
  htmlCode = `<input autosize [(ngModel)]="test" style="font-size:30px;padding:0 15px" placeholder="Write Here" />`;
}
