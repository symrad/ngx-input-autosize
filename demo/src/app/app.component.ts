import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test = 'fdhsjkfhjksdhf sdhf hsdkj fhkjsdhfks';
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
  htmlCode = `<input autosize [(ngModel)]="model" style="min-width:30px;font-size:30px" />`;
}
