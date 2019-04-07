import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CookieService} from "ngx-cookie-service";

const mLabAPIKey = 'mLabAPIKey';
const domoticAPIKey = 'domoticAPIKey';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  configurationForm = this.fb.group({
    mLabAPIKey: this.cookieService.get(mLabAPIKey),
    domoticAPIKey: this.cookieService.get(domoticAPIKey),
  });

  constructor(private fb: FormBuilder, private cookieService: CookieService) {
  }

  onBlur() {
    let expires = new Date(new Date().setFullYear(new Date().getFullYear() + 100));
    this.cookieService.set(mLabAPIKey, this.configurationForm.get(mLabAPIKey).value, expires);
    this.cookieService.set(domoticAPIKey, this.configurationForm.get(domoticAPIKey).value, expires);
  }
}
