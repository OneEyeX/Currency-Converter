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
      console.log(this.currChedJson);

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

    })


  }

}
