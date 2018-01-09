// Angular Imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http'

// External Imports
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { NgxCurrencyModule } from 'ngx-currency'

// Components
import { AppComponent } from './app.component'
import { NumericInputComponent, SelectOptionComponent, TooltipComponent, AlertOfflineComponent } from './components/atoms'
import { InputSelectComboComponent } from './components/molecules'
import { CurrencyConverterComponent, CurrencyConverterService } from './components/organisms'

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    NumericInputComponent,
    SelectOptionComponent,
    TooltipComponent,
    AlertOfflineComponent,
    InputSelectComboComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [CurrencyConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
