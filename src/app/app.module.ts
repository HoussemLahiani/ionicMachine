import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

 import { environment } from '../environments/environment';
 import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx'
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent, InvoiceComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase))],
  providers: [StatusBar,
    SplashScreen,File,FileOpener,PDFGenerator,LocalNotifications,EmailComposer,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  
  bootstrap: [AppComponent],
})
export class AppModule {}