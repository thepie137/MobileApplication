import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Price } from '../../models/price.model';

/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopProvider {
  public num: string;
  private priceUrl = "http://ed0ef52d7d56.ngrok.io"
  constructor(public http: HttpClient) {
    console.log('Hello ShopProvider Provider');
  }

  getPrice(num: string){
    console.log(num)
    return this.http.get<Price>(this.priceUrl+"/findscore?num="+num);
  }
  getMax 
}