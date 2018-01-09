import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public translate: TranslateService,
  ) {

    // Set Application Language
    this.translate.addLangs(['en', 'fr'])
    this.translate.setDefaultLang('en')
    this.translate.use(this.translate.getBrowserLang() === 'fr' ? 'fr' : 'en')
  }

  public changeLanguage() {
    this.translate.use(this.translate.currentLang === 'fr' ? 'en' : 'fr')
  }

}
