import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(_translate: TranslateService) {
    _translate.setDefaultLang('en');
    // _translate.setDefaultLang('fr');
  }
}
