import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './core/state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserInfoEffects } from './core/state/user-info/user-info.effects';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([UserInfoEffects]),
    CoreModule,
    MatSnackBarModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
