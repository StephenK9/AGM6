import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { D3ComponentOneComponent } from './d3-component-one/d3-component-one.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { D3ComponentTwoComponent } from './d3-component-two/d3-component-two.component';
import { D3ComponentThreeComponent } from './d3-component-three/d3-component-three.component';
@NgModule({
  declarations: [
    AppComponent,
    D3ComponentOneComponent,
    D3ComponentTwoComponent,
    D3ComponentThreeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApi
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
