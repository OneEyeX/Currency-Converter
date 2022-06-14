import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency-Converter';
  currChedJson: any = [];

  // base = 'TND';
  // contChed2 = 'TND';
  // result: string = '1';
  base = "TND";
  contChed2 = "TND";
  result: string = "1";

  changebase(a: string) {
    this.base = a;
    // console.log(this.base);
  }

  tocountry(b: string) {
    this.contChed2 = b;
    // console.log(this.contChed2);
  }

  constructor(private currency: CurrencyapidataService) { }

  convert() {
    // console.log(this.base);
    // console.log(this.contChed2);
    this.currency.getcurrencydata(this.base).subscribe(data => {
      // console.log(data)
      this.currChedJson = JSON.stringify(data);
      // console.log(this.currChedJson);

      this.currChedJson = JSON.parse(this.currChedJson);
      // console.log(this.currChedJson);

      // this.result = this.currChedJson.rates.TND
      if (this.contChed2 == "TND") {
        this.result = this.currChedJson.rates.TND;
      }

      if (this.contChed2 == "EUR") {
        this.result = this.currChedJson.rates.EUR;
      }

      if (this.contChed2 == "USD") {
        this.result = this.currChedJson.rates.USD;
      }

      if (this.contChed2 == "MAD") {
        this.result = this.currChedJson.rates.MAD;
      }

      if (this.contChed2 == "ILS") {
        this.result = this.currChedJson.rates.ILS;
      }

      if (this.contChed2 == "DZD") {
        this.result = this.currChedJson.rates.DZD;
      }

      if (this.contChed2 == "LYD") {
        this.result = this.currChedJson.rates.LYD;
      }

      if (this.contChed2 == "EGP") {
        this.result = this.currChedJson.rates.EGP;
      }

      if (this.contChed2 == "SDG") {
        this.result = this.currChedJson.rates.SDG;
      }

      if (this.contChed2 == "SAR") {
        this.result = this.currChedJson.rates.SAR;
      }

      if (this.contChed2 == "TRY") {
        this.result = this.currChedJson.rates.TRY;
      }

      if (this.contChed2 == "QAR") {
        this.result = this.currChedJson.rates.QAR;
      }

    })


  }

}
