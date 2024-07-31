import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { HttpInterceptorService } from './core/interceptors/http-interceptor.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';

registerLocaleData(en);
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ngZorroConfig } from './core/constants/nz/nz.config';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    IconsProviderModule,
    HttpClientModule,
    AppRoutingModule,
    // NzMessageModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    ShareModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
